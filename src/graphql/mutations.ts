// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWorkout = `mutation CreateWorkout($input: CreateWorkoutInput!) {
  createWorkout(input: $input) {
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
export const updateWorkout = `mutation UpdateWorkout($input: UpdateWorkoutInput!) {
  updateWorkout(input: $input) {
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
export const deleteWorkout = `mutation DeleteWorkout($input: DeleteWorkoutInput!) {
  deleteWorkout(input: $input) {
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
    workouts {
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
    workouts {
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
    workouts {
      id
      name
      exercises {
        nextToken
      }
    }
  }
}
`;
