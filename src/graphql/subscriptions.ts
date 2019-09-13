// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateRoutine = `subscription OnCreateRoutine {
  onCreateRoutine {
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
export const onUpdateRoutine = `subscription OnUpdateRoutine {
  onUpdateRoutine {
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
export const onDeleteRoutine = `subscription OnDeleteRoutine {
  onDeleteRoutine {
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
export const onUpdateExercise = `subscription OnUpdateExercise {
  onUpdateExercise {
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
export const onDeleteExercise = `subscription OnDeleteExercise {
  onDeleteExercise {
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
