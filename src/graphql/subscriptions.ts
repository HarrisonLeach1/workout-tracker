// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkout = `subscription OnCreateWorkout {
  onCreateWorkout {
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
export const onUpdateWorkout = `subscription OnUpdateWorkout {
  onUpdateWorkout {
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
export const onDeleteWorkout = `subscription OnDeleteWorkout {
  onDeleteWorkout {
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
export const onCreateExercise = `subscription OnCreateExercise {
  onCreateExercise {
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
export const onUpdateExercise = `subscription OnUpdateExercise {
  onUpdateExercise {
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
export const onDeleteExercise = `subscription OnDeleteExercise {
  onDeleteExercise {
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
