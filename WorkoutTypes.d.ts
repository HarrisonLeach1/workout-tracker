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
