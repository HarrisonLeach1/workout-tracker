type Exercise = {
    title: string;
    sets: number;
    repetitions: number;
    weightInKg: number;
};

type Workout = {
    title: string;
    exercises: Exercise[];
};

const dummyData: Workout[] = [
    {
        title: "Back",
        exercises: [
            {
                title: "Barbell Rows",
                sets: 5,
                repetitions: 6,
                weightInKg: 60
            },
            {
                title: "Deadlift",
                sets: 5,
                repetitions: 5,
                weightInKg: 110
            }
        ]
    },
    {
        title: "Chest",
        exercises: [
            {
                title: "Barbell BenchPress",
                sets: 5,
                repetitions: 5,
                weightInKg: 80
            },
            {
                title: "Incline Dumbell Press",
                sets: 4,
                repetitions: 6,
                weightInKg: 24
            }
        ]
    },
    {
        title: "Legs",
        exercises: [
            {
                title: "Barbell Back Squats",
                sets: 5,
                repetitions: 5,
                weightInKg: 90
            },
            {
                title: "Leg Press",
                sets: 4,
                repetitions: 6,
                weightInKg: 80
            }
        ]
    }
];
