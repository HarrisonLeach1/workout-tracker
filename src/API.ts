/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateRoutineInput = {
  id?: string | null,
  name?: string | null,
};

export type UpdateRoutineInput = {
  id: string,
  name?: string | null,
};

export type DeleteRoutineInput = {
  id?: string | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  name?: string | null,
  sets?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  exerciseRoutineId?: string | null,
};

export type UpdateExerciseInput = {
  id: string,
  name?: string | null,
  sets?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  exerciseRoutineId?: string | null,
};

export type DeleteExerciseInput = {
  id?: string | null,
};

export type ModelRoutineFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelRoutineFilterInput | null > | null,
  or?: Array< ModelRoutineFilterInput | null > | null,
  not?: ModelRoutineFilterInput | null,
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

export type CreateRoutineMutationVariables = {
  input: CreateRoutineInput,
};

export type CreateRoutineMutation = {
  createRoutine:  {
    __typename: "Routine",
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

export type UpdateRoutineMutationVariables = {
  input: UpdateRoutineInput,
};

export type UpdateRoutineMutation = {
  updateRoutine:  {
    __typename: "Routine",
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

export type DeleteRoutineMutationVariables = {
  input: DeleteRoutineInput,
};

export type DeleteRoutineMutation = {
  deleteRoutine:  {
    __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetRoutineQueryVariables = {
  id: string,
};

export type GetRoutineQuery = {
  getRoutine:  {
    __typename: "Routine",
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

export type ListRoutinesQueryVariables = {
  filter?: ModelRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutinesQuery = {
  listRoutines:  {
    __typename: "ModelRoutineConnection",
    items:  Array< {
      __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
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
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoutineSubscription = {
  onCreateRoutine:  {
    __typename: "Routine",
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

export type OnUpdateRoutineSubscription = {
  onUpdateRoutine:  {
    __typename: "Routine",
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

export type OnDeleteRoutineSubscription = {
  onDeleteRoutine:  {
    __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
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
    routine:  {
      __typename: "Routine",
      id: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
