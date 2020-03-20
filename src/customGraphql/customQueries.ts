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