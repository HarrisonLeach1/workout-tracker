export type Workout = {
    __typename: "Workout";
    id: string;
    name: string | null;
    exercises: {
        __typename: "ModelExerciseConnection";
        nextToken: string | null;
    } | null;
};
