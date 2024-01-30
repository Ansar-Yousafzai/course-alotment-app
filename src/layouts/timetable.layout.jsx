import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TimeTable from "@mikezzb/react-native-timetable";

const styles = StyleSheet.create({
  centeredContainer: {
    height: "100%",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  timetableContainer: {
    marginTop: 40,
  },
  text: {
    color: "black",
  },
});

export const Timetable = () => {
  const greenTheme = {
    header: {
      background: "green",
    },
  };
  return (
    <View style={styles.centeredContainer}>
      <View style={styles.timetableContainer}>
        <TimeTable
          eventGroups={[
            {
              courseId: "CS-692",
              title: "Visual Programming",
              sections: {
                "BSCS 7 B": {
                  days: [1, 2, 5],
                  startTimes: ["15:30", "14:30", "11:30"],
                  endTimes: ["17:15", "16:15", "13:15"],
                  locations: ["Lab 2", "CL 8", "CL 2"],
                },
              },
            },
            {
              courseId: "CS-123",
              title: "Advanced Data Structures",
              sections: {
                "BSCS 7 A": {
                  days: [2, 4, 7],
                  startTimes: ["09:00", "13:30", "10:45"],
                  endTimes: ["11:45", "15:00", "12:30"],
                  locations: ["CL 4", "Lab 5", "CL 7"],
                },
              },
            },
            {
              courseId: "CS-456",
              title: "Cyber Security",
              sections: {
                "BSCS 5 C": {
                  days: [3, 5, 8],
                  startTimes: ["14:00", "11:45", "16:30"],
                  endTimes: ["16:30", "13:30", "18:00"],
                  locations: ["CL 6", "Lab 3", "CL 1"],
                },
              },
            },
            {
              courseId: "CS-789",
              title: "Web Development",
              sections: {
                "BSCS 6 A": {
                  days: [1, 6, 9],
                  startTimes: ["12:15", "15:45", "10:00"],
                  endTimes: ["14:00", "17:30", "11:30"],
                  locations: ["CL 3", "Lab 8", "CL 5"],
                },
              },
            },
            {
              courseId: "CS-234",
              title: "Computer Networks and Security",
              sections: {
                "BSCS 4 B": {
                  days: [2, 4, 6],
                  startTimes: ["10:30", "14:15", "12:00"],
                  endTimes: ["12:00", "15:45", "13:30"],
                  locations: ["CL 2", "Lab 7", "CL 8"],
                },
              },
            },
            {
              courseId: "CS-567",
              title: "Artificial Intelligence",
              sections: {
                "BSCS 2 A": {
                  days: [3, 5, 10],
                  startTimes: ["13:00", "10:45", "15:30"],
                  endTimes: ["15:45", "13:30", "17:15"],
                  locations: ["CL 1", "Lab 6", "CL 4"],
                },
              },
            },
          ]}
          eventOnPress={(event) => {
            alert(event.title);
          }}
          theme={greenTheme}
        />
      </View>
    </View>
  );
};
