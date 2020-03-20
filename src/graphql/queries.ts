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
    workouts {
      items {
        id
        startedAt
        completedAt
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
      workouts {
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
      results {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getWorkout = `query GetWorkout($id: ID!) {
  getWorkout(id: $id) {
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
`;
export const getExerciseResult = `query GetExerciseResult($id: ID!) {
  getExerciseResult(id: $id) {
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
}
`;
export const listExerciseResults = `query ListExerciseResults(
  $filter: ModelExerciseResultFilterInput
  $limit: Int
  $nextToken: String
) {
  listExerciseResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getSet = `query GetSet($id: ID!) {
  getSet(id: $id) {
    exerciseResult {
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
    setNumber
    repetitions
    weightInKg
  }
}
`;
export const listSets = `query ListSets($filter: ModelSetFilterInput, $limit: Int, $nextToken: String) {
  listSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
