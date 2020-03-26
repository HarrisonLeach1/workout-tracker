/* tslint:disable */
/* eslint-disable */
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
  exerciseRoutineId: string,
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

export type CreateWorkoutInput = {
  id?: string | null,
  startedAt: string,
  completedAt?: string | null,
  workoutRoutineId: string,
};

export type UpdateWorkoutInput = {
  id: string,
  startedAt?: string | null,
  completedAt?: string | null,
  workoutRoutineId?: string | null,
};

export type DeleteWorkoutInput = {
  id?: string | null,
};

export type CreateExerciseResultInput = {
  id?: string | null,
  exerciseResultWorkoutId: string,
  exerciseResultExerciseId: string,
};

export type UpdateExerciseResultInput = {
  id: string,
  exerciseResultWorkoutId?: string | null,
  exerciseResultExerciseId?: string | null,
};

export type DeleteExerciseResultInput = {
  id?: string | null,
};

export type CreateSetInput = {
  setNumber?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  setExerciseResultId?: string | null,
};

export type UpdateSetInput = {
  setNumber?: number | null,
  repetitions?: number | null,
  weightInKg?: number | null,
  setExerciseResultId?: string | null,
};

export type DeleteSetInput = {
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
  weightInKg?: ModelFloatFilterInput | null,
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
  between?: Array< number | null > | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDFilterInput | null,
  startedAt?: ModelStringFilterInput | null,
  completedAt?: ModelStringFilterInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelExerciseResultFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelExerciseResultFilterInput | null > | null,
  or?: Array< ModelExerciseResultFilterInput | null > | null,
  not?: ModelExerciseResultFilterInput | null,
};

export type ModelSetFilterInput = {
  setNumber?: ModelIntFilterInput | null,
  repetitions?: ModelIntFilterInput | null,
  weightInKg?: ModelFloatFilterInput | null,
  and?: Array< ModelSetFilterInput | null > | null,
  or?: Array< ModelSetFilterInput | null > | null,
  not?: ModelSetFilterInput | null,
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
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
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
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
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
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    results:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    results:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    results:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
};

export type CreateWorkoutMutation = {
  createWorkout:  {
    __typename: "Workout",
    id: string,
    routine:  {
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    startedAt: string,
    completedAt: string | null,
    exerciseResults:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
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
    routine:  {
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    startedAt: string,
    completedAt: string | null,
    exerciseResults:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
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
    routine:  {
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    startedAt: string,
    completedAt: string | null,
    exerciseResults:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateExerciseResultMutationVariables = {
  input: CreateExerciseResultInput,
};

export type CreateExerciseResultMutation = {
  createExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    workout:  {
      __typename: "Workout",
      id: string,
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      startedAt: string,
      completedAt: string | null,
      exerciseResults:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    exercise:  {
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
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      results:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    sets:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        exerciseResult:  {
          __typename: "ExerciseResult",
          id: string,
        } | null,
        setNumber: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateExerciseResultMutationVariables = {
  input: UpdateExerciseResultInput,
};

export type UpdateExerciseResultMutation = {
  updateExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    workout:  {
      __typename: "Workout",
      id: string,
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      startedAt: string,
      completedAt: string | null,
      exerciseResults:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    exercise:  {
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
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      results:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    sets:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        exerciseResult:  {
          __typename: "ExerciseResult",
          id: string,
        } | null,
        setNumber: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteExerciseResultMutationVariables = {
  input: DeleteExerciseResultInput,
};

export type DeleteExerciseResultMutation = {
  deleteExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    workout:  {
      __typename: "Workout",
      id: string,
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      startedAt: string,
      completedAt: string | null,
      exerciseResults:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    exercise:  {
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
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      results:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    sets:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        exerciseResult:  {
          __typename: "ExerciseResult",
          id: string,
        } | null,
        setNumber: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSetMutationVariables = {
  input: CreateSetInput,
};

export type CreateSetMutation = {
  createSet:  {
    __typename: "Set",
    exerciseResult:  {
      __typename: "ExerciseResult",
      id: string,
      workout:  {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      exercise:  {
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
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      sets:  {
        __typename: "ModelSetConnection",
        items:  Array< {
          __typename: "Set",
          setNumber: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    setNumber: number | null,
    repetitions: number | null,
    weightInKg: number | null,
  } | null,
};

export type UpdateSetMutationVariables = {
  input: UpdateSetInput,
};

export type UpdateSetMutation = {
  updateSet:  {
    __typename: "Set",
    exerciseResult:  {
      __typename: "ExerciseResult",
      id: string,
      workout:  {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      exercise:  {
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
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      sets:  {
        __typename: "ModelSetConnection",
        items:  Array< {
          __typename: "Set",
          setNumber: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    setNumber: number | null,
    repetitions: number | null,
    weightInKg: number | null,
  } | null,
};

export type DeleteSetMutationVariables = {
  input: DeleteSetInput,
};

export type DeleteSetMutation = {
  deleteSet:  {
    __typename: "Set",
    exerciseResult:  {
      __typename: "ExerciseResult",
      id: string,
      workout:  {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      exercise:  {
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
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      sets:  {
        __typename: "ModelSetConnection",
        items:  Array< {
          __typename: "Set",
          setNumber: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    setNumber: number | null,
    repetitions: number | null,
    weightInKg: number | null,
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
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    results:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null > | null,
      nextToken: string | null,
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
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      results:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout:  {
    __typename: "Workout",
    id: string,
    routine:  {
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
      workouts:  {
        __typename: "ModelWorkoutConnection",
        items:  Array< {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    startedAt: string,
    completedAt: string | null,
    exerciseResults:  {
      __typename: "ModelExerciseResultConnection",
      items:  Array< {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
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
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      startedAt: string,
      completedAt: string | null,
      exerciseResults:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseResultQueryVariables = {
  id: string,
};

export type GetExerciseResultQuery = {
  getExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    workout:  {
      __typename: "Workout",
      id: string,
      routine:  {
        __typename: "Routine",
        id: string,
        name: string | null,
        exercises:  {
          __typename: "ModelExerciseConnection",
          nextToken: string | null,
        } | null,
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      startedAt: string,
      completedAt: string | null,
      exerciseResults:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    exercise:  {
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
        workouts:  {
          __typename: "ModelWorkoutConnection",
          nextToken: string | null,
        } | null,
      },
      results:  {
        __typename: "ModelExerciseResultConnection",
        items:  Array< {
          __typename: "ExerciseResult",
          id: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
    },
    sets:  {
      __typename: "ModelSetConnection",
      items:  Array< {
        __typename: "Set",
        exerciseResult:  {
          __typename: "ExerciseResult",
          id: string,
        } | null,
        setNumber: number | null,
        repetitions: number | null,
        weightInKg: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListExerciseResultsQueryVariables = {
  filter?: ModelExerciseResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseResultsQuery = {
  listExerciseResults:  {
    __typename: "ModelExerciseResultConnection",
    items:  Array< {
      __typename: "ExerciseResult",
      id: string,
      workout:  {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      exercise:  {
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
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      sets:  {
        __typename: "ModelSetConnection",
        items:  Array< {
          __typename: "Set",
          setNumber: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSetQueryVariables = {
  id: string,
};

export type GetSetQuery = {
  getSet:  {
    __typename: "Set",
    exerciseResult:  {
      __typename: "ExerciseResult",
      id: string,
      workout:  {
        __typename: "Workout",
        id: string,
        routine:  {
          __typename: "Routine",
          id: string,
          name: string | null,
        },
        startedAt: string,
        completedAt: string | null,
        exerciseResults:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      exercise:  {
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
        },
        results:  {
          __typename: "ModelExerciseResultConnection",
          nextToken: string | null,
        } | null,
      },
      sets:  {
        __typename: "ModelSetConnection",
        items:  Array< {
          __typename: "Set",
          setNumber: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    setNumber: number | null,
    repetitions: number | null,
    weightInKg: number | null,
  } | null,
};

export type ListSetsQueryVariables = {
  filter?: ModelSetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSetsQuery = {
  listSets:  {
    __typename: "ModelSetConnection",
    items:  Array< {
      __typename: "Set",
      exerciseResult:  {
        __typename: "ExerciseResult",
        id: string,
        workout:  {
          __typename: "Workout",
          id: string,
          startedAt: string,
          completedAt: string | null,
        },
        exercise:  {
          __typename: "Exercise",
          id: string,
          name: string | null,
          sets: number | null,
          repetitions: number | null,
          weightInKg: number | null,
        },
        sets:  {
          __typename: "ModelSetConnection",
          nextToken: string | null,
        } | null,
      } | null,
      setNumber: number | null,
      repetitions: number | null,
      weightInKg: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
