// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWorkout = `query GetWorkout($id: ID!) {
  getWorkout(id: $id) {
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
export const listWorkouts = `query ListWorkouts(
  $filter: ModelWorkoutFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      exercises {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getExercise = `query GetExercise($id: ID!) {
  getExercise(id: $id) {
    id
    name
    sets
    repetitions
    weightInKg
    workout {
      id
      name
      exercises {
        nextToken
      }
    }
  }
}
`;
export const listExercises = `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sets
      repetitions
      weightInKg
      workout {
        id
        name
      }
    }
    nextToken
  }
}
`;
