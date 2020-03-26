// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoutine = /* GraphQL */ `
  mutation CreateRoutine($input: CreateRoutineInput!) {
    createRoutine(input: $input) {
      id
      name
      exercises {
        items {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        nextToken
      }
      workouts {
        items {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateRoutine = /* GraphQL */ `
  mutation UpdateRoutine($input: UpdateRoutineInput!) {
    updateRoutine(input: $input) {
      id
      name
      exercises {
        items {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        nextToken
      }
      workouts {
        items {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteRoutine = /* GraphQL */ `
  mutation DeleteRoutine($input: DeleteRoutineInput!) {
    deleteRoutine(input: $input) {
      id
      name
      exercises {
        items {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        nextToken
      }
      workouts {
        items {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
      name
      sets
      repetitions
      weightInKg
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      results {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise($input: UpdateExerciseInput!) {
    updateExercise(input: $input) {
      id
      name
      sets
      repetitions
      weightInKg
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      results {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise($input: DeleteExerciseInput!) {
    deleteExercise(input: $input) {
      id
      name
      sets
      repetitions
      weightInKg
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      results {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout($input: CreateWorkoutInput!) {
    createWorkout(input: $input) {
      id
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      startedAt
      completedAt
      exerciseResults {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout($input: UpdateWorkoutInput!) {
    updateWorkout(input: $input) {
      id
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      startedAt
      completedAt
      exerciseResults {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout($input: DeleteWorkoutInput!) {
    deleteWorkout(input: $input) {
      id
      routine {
        id
        name
        exercises {
          items {
            id
            name
            sets
            repetitions
            weightInKg
          }
          nextToken
        }
        workouts {
          items {
            id
            startedAt
            completedAt
          }
          nextToken
        }
      }
      startedAt
      completedAt
      exerciseResults {
        items {
          id
          workout {
            id
            startedAt
            completedAt
          }
          exercise {
            id
            name
            sets
            repetitions
            weightInKg
          }
          sets {
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createExerciseResult = /* GraphQL */ `
  mutation CreateExerciseResult($input: CreateExerciseResultInput!) {
    createExerciseResult(input: $input) {
      id
      workout {
        id
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        startedAt
        completedAt
        exerciseResults {
          items {
            id
          }
          nextToken
        }
      }
      exercise {
        id
        name
        sets
        repetitions
        weightInKg
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        results {
          items {
            id
          }
          nextToken
        }
      }
      sets {
        items {
          exerciseResult {
            id
          }
          setNumber
          repetitions
          weightInKg
        }
        nextToken
      }
    }
  }
`;
export const updateExerciseResult = /* GraphQL */ `
  mutation UpdateExerciseResult($input: UpdateExerciseResultInput!) {
    updateExerciseResult(input: $input) {
      id
      workout {
        id
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        startedAt
        completedAt
        exerciseResults {
          items {
            id
          }
          nextToken
        }
      }
      exercise {
        id
        name
        sets
        repetitions
        weightInKg
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        results {
          items {
            id
          }
          nextToken
        }
      }
      sets {
        items {
          exerciseResult {
            id
          }
          setNumber
          repetitions
          weightInKg
        }
        nextToken
      }
    }
  }
`;
export const deleteExerciseResult = /* GraphQL */ `
  mutation DeleteExerciseResult($input: DeleteExerciseResultInput!) {
    deleteExerciseResult(input: $input) {
      id
      workout {
        id
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        startedAt
        completedAt
        exerciseResults {
          items {
            id
          }
          nextToken
        }
      }
      exercise {
        id
        name
        sets
        repetitions
        weightInKg
        routine {
          id
          name
          exercises {
            nextToken
          }
          workouts {
            nextToken
          }
        }
        results {
          items {
            id
          }
          nextToken
        }
      }
      sets {
        items {
          exerciseResult {
            id
          }
          setNumber
          repetitions
          weightInKg
        }
        nextToken
      }
    }
  }
`;
export const createSet = /* GraphQL */ `
  mutation CreateSet($input: CreateSetInput!) {
    createSet(input: $input) {
      exerciseResult {
        id
        workout {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        exercise {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        sets {
          items {
            setNumber
            repetitions
            weightInKg
          }
          nextToken
        }
      }
      setNumber
      repetitions
      weightInKg
    }
  }
`;
export const updateSet = /* GraphQL */ `
  mutation UpdateSet($input: UpdateSetInput!) {
    updateSet(input: $input) {
      exerciseResult {
        id
        workout {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        exercise {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        sets {
          items {
            setNumber
            repetitions
            weightInKg
          }
          nextToken
        }
      }
      setNumber
      repetitions
      weightInKg
    }
  }
`;
export const deleteSet = /* GraphQL */ `
  mutation DeleteSet($input: DeleteSetInput!) {
    deleteSet(input: $input) {
      exerciseResult {
        id
        workout {
          id
          routine {
            id
            name
          }
          startedAt
          completedAt
          exerciseResults {
            nextToken
          }
        }
        exercise {
          id
          name
          sets
          repetitions
          weightInKg
          routine {
            id
            name
          }
          results {
            nextToken
          }
        }
        sets {
          items {
            setNumber
            repetitions
            weightInKg
          }
          nextToken
        }
      }
      setNumber
      repetitions
      weightInKg
    }
  }
`;
