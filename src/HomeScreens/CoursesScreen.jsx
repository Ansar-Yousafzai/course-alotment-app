import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const CoursesScreen = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <ScrollView>
            {courses.map(course => (
                <Card key={course.id} style={{margin: 10}}>
                    <Card.Content>
                        <Title>{course.title}</Title>
                        <Paragraph>{course.description}</Paragraph>
                        <Paragraph>By {course.author}</Paragraph>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
};

export default CoursesScreen;
