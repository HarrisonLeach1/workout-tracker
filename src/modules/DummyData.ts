import { CreateWorkoutInput } from "../API";

export const DummyData: CreateWorkoutInput[] = [
    {
        name: "Back",
        exercises: [
            {
                name: "Barbell Rows",
                sets: 5,
                repetitions: 6,
                weightInKg: 60
            },
            {
                name: "Deadlift",
                sets: 5,
                repetitions: 5,
                weightInKg: 110
            }
        ]
    },
    {
        name: "Chest",
        exercises: [
            {
                name: "Barbell BenchPress",
                sets: 5,
                repetitions: 5,
                weightInKg: 80
            },
            {
                name: "Incline Dumbell Press",
                sets: 4,
                repetitions: 6,
                weightInKg: 24
            }
        ]
    },
    {
        name: "Legs",
        exercises: [
            {
                name: "Barbell Back Squats",
                sets: 5,
                repetitions: 5,
                weightInKg: 90
            },
            {
                name: "Leg Press",
                sets: 4,
                repetitions: 6,
                weightInKg: 80
            }
        ]
    }
];
