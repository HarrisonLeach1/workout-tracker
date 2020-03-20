export type Workout = {
    __typename: "Workout";
    id: string;
    name: string | null;
    exercises: {
        __typename: "ModelExerciseConnection";
        nextToken: string | null;
    } | null;
};

export type Exercise = {
    id: string;
    name: string;
    sets: number;
    repetitions: number;
    weightInKg: number;
};
