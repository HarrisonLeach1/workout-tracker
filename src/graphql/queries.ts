// tslint:disable
// this is an auto generated file. This will be overwritten

export const getRoutine = `query GetRoutine($id: ID!) {
  getRoutine(id: $id) {
    id
    name
    exercises {
      nextToken
    }
    workouts {
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
    }
    instances {
      nextToken
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
    }
    nextToken
  }
}
`;
export const getWorkout = `query GetWorkout($id: ID!) {
  getWorkout(id: $id) {
    routine {
      id
      name
    }
    id
    startedAt
    completedAt
    exerciseInstances {
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
      startedAt
      completedAt
    }
    nextToken
  }
}
`;
export const getExerciseInstance = `query GetExerciseInstance($id: ID!) {
  getExerciseInstance(id: $id) {
    workout {
      id
      startedAt
      completedAt
    }
    id
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
}
`;
export const listExerciseInstances = `query ListExerciseInstances(
  $filter: ModelExerciseInstanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseInstances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
export const getSet = `query GetSet($id: ID!) {
  getSet(id: $id) {
    exerciseInstance {
      id
    }
    id
    setNumber
    repetitions
    weightInKg
  }
}
`;
export const listSets = `query ListSets($filter: ModelSetFilterInput, $limit: Int, $nextToken: String) {
  listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      setNumber
      repetitions
      weightInKg
    }
    nextToken
  }
}
`;
