// tslint:disable
// this is an auto generated file. This will be overwritten

export const createRoutine = `mutation CreateRoutine($input: CreateRoutineInput!) {
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
      }
      nextToken
    }
  }
}
`;
export const updateRoutine = `mutation UpdateRoutine($input: UpdateRoutineInput!) {
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
      }
      nextToken
    }
  }
}
`;
export const deleteRoutine = `mutation DeleteRoutine($input: DeleteRoutineInput!) {
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
      }
      nextToken
    }
  }
}
`;
export const createExercise = `mutation CreateExercise($input: CreateExerciseInput!) {
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
        nextToken
      }
    }
  }
}
`;
export const updateExercise = `mutation UpdateExercise($input: UpdateExerciseInput!) {
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
        nextToken
      }
    }
  }
}
`;
export const deleteExercise = `mutation DeleteExercise($input: DeleteExerciseInput!) {
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
        nextToken
      }
    }
  }
}
`;
