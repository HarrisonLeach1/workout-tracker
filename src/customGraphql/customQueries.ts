export const getRoutineAndExercises = `query GetRoutine($id: ID!) {
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
      }
    }
  }
  `;

export const getWorkoutSets = `query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      exerciseResults {
        items {
          id
          exercise {
            name
          }
          sets {
            items {
              setNumber
              repetitions
              weightInKg
            }
          }
        }
      }
    }
  }
  `;
