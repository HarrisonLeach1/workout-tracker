// tslint:disable
// this is an auto generated file. This will be overwritten

export const getRoutine = `query GetRoutine($id: ID!) {
  getRoutine(id: $id) {
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
export const listRoutines = `query ListRoutines(
  $filter: ModelRoutineFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      routine {
        id
        name
      }
    }
    nextToken
  }
}
`;
