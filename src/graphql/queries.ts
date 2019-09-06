// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWorkout = `query GetWorkout($id: ID!) {
  getWorkout(id: $id) {
    id
    name
    exercises {
      id
      name
      sets
      repetitions
      weightInKg
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
        id
        name
        sets
        repetitions
        weightInKg
      }
    }
    nextToken
  }
}
`;
