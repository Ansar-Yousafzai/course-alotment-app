const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const prisma= new PrismaClient();
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(bodyParser.json());

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if the user exists based on the provided email and role
    const user = role === 'student' ?
      await prisma.students.findUnique({ where: { email } }) :
      await prisma.teachers.findUnique({ where: { email } });

    // If user does not exist, return error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, role }, 'your_secret_key', { expiresIn: '1h' });

    // Return token as response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signup endpoint for students
router.post('/signup/student', async (req, res) => {
  try {
    const { name, email, password, cnic, aridno, address } = req.body;

    // Check if user already exists with the provided email
    const existingUser = await prisma.students.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student in the database
    const newStudent = await prisma.students.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cnic,
        aridno,
        address
      }
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signup endpoint for teachers
router.post('/signup/teacher', async (req, res) => {
  try {
    const { name, email, password, cnic, aridno, address } = req.body;

    // Check if user already exists with the provided email
    const existingUser = await prisma.teachers.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new teacher in the database
    const newTeacher = await prisma.teachers.create({
      data: {
        name,
        email,
        password: hashedPassword,
        cnic,
        aridno,
        address
      }
    });

    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

// Route to handle sending email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'Tahirkhattak456@gmail.com', // Receiver's email
    subject: 'New Contact Form Submission',
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(3001, () => 
      console.log('server listening on port ${3001}'));