/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkoutInput = {
  id?: string | null,
  name?: string | null,
  exercises?: Array< ExerciseInput | null > | null,
};

export type ExerciseInput = {
  name?: string | null,
  sets?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  exercises?: Array< ExerciseInput | null > | null,
};

export type DeleteWorkoutInput = {
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

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
};

export type CreateWorkoutMutation = {
  createWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
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
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
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
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
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
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
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
      exercises:  Array< {
        __typename: "Exercise",
        id: string,
        name: string | null,
        sets: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout:  {
    __typename: "Workout",
    id: string,
    name: string | null,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      name: string | null,
      sets: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
  } | null,
};
