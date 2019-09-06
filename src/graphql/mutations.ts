// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWorkout = `mutation CreateWorkout($input: CreateWorkoutInput!) {
  createWorkout(input: $input) {
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
export const updateWorkout = `mutation UpdateWorkout($input: UpdateWorkoutInput!) {
  updateWorkout(input: $input) {
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
export const deleteWorkout = `mutation DeleteWorkout($input: DeleteWorkoutInput!) {
  deleteWorkout(input: $input) {
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
