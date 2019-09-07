/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkoutInput = {
  id?: string | null,
  name?: string | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
};

export type DeleteWorkoutInput = {
  id?: string | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  name?: string | null,
  sets?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  exerciseWorkoutId?: string | null,
};

export type UpdateExerciseInput = {
  id: string,
  name?: string | null,
  sets?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  exerciseWorkoutId?: string | null,
};

export type DeleteExerciseInput = {
  id?: string | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  sets?: ModelIntFilterInput | null,
  repetitions?: ModelIntFilterInput | null,
  weightInKg?: ModelIntFilterInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
};

export type CreateWorkoutMutation = {
  createWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
};

export type UpdateWorkoutMutation = {
  updateWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
};

export type DeleteWorkoutMutation = {
  deleteWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
};

export type CreateExerciseMutation = {
  createExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
};

export type UpdateExerciseMutation = {
  updateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
};

export type DeleteExerciseMutation = {
  deleteExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
      workout:  {
        __typename: "Workout",
        id: string,
        name: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise:  {
    __typename: "Exercise",
    id: string,
    name: string | null,
    sets: number | null,
    repetitions: number | null,
    weightInKg: number | null,
    workout:  {
      __typename: "Workout",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
