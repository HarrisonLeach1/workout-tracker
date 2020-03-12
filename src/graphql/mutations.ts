// tslint:disable
// this is an auto generated file. This will be overwritten

export const createRoutine = `mutation CreateRoutine($input: CreateRoutineInput!) {
  createRoutine(input: $input) {
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
export const updateRoutine = `mutation UpdateRoutine($input: UpdateRoutineInput!) {
  updateRoutine(input: $input) {
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
export const deleteRoutine = `mutation DeleteRoutine($input: DeleteRoutineInput!) {
  deleteRoutine(input: $input) {
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
    }
    instances {
      nextToken
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
    }
    instances {
      nextToken
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
    }
    instances {
      nextToken
    }
  }
}
`;
export const createWorkout = `mutation CreateWorkout($input: CreateWorkoutInput!) {
  createWorkout(input: $input) {
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
export const updateWorkout = `mutation UpdateWorkout($input: UpdateWorkoutInput!) {
  updateWorkout(input: $input) {
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
export const deleteWorkout = `mutation DeleteWorkout($input: DeleteWorkoutInput!) {
  deleteWorkout(input: $input) {
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
export const createExerciseInstance = `mutation CreateExerciseInstance($input: CreateExerciseInstanceInput!) {
  createExerciseInstance(input: $input) {
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
export const updateExerciseInstance = `mutation UpdateExerciseInstance($input: UpdateExerciseInstanceInput!) {
  updateExerciseInstance(input: $input) {
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
export const deleteExerciseInstance = `mutation DeleteExerciseInstance($input: DeleteExerciseInstanceInput!) {
  deleteExerciseInstance(input: $input) {
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
export const createSet = `mutation CreateSet($input: CreateSetInput!) {
  createSet(input: $input) {
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
export const updateSet = `mutation UpdateSet($input: UpdateSetInput!) {
  updateSet(input: $input) {
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
export const deleteSet = `mutation DeleteSet($input: DeleteSetInput!) {
  deleteSet(input: $input) {
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
