import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const TeachersScreen = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/teachers')
            .then(response => {
                setTeachers(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <ScrollView>
            {teachers.map(teacher => (
                <Card key={teacher.id} style={{ margin: 10 }}>
                    <Card.Content>
                        <Title>{teacher.name}</Title>
                        <Paragraph>{teacher.bio}</Paragraph>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
};

export default TeachersScreen;
