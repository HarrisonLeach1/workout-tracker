import { GetRoutineQuery, CreateSetInput } from "../API";
import { WorkoutInputs as WorkoutFormInputs, ExerciseResultInput } from "../contexts/InProgressWorkoutContext";
import { Exercise } from "../types/WorkoutTypes";

export const mapRoutinetoWorkoutInputs = (routineData: GetRoutineQuery): WorkoutFormInputs => {
  const routine = routineData.getRoutine;

  const workoutInputs: WorkoutFormInputs = {
    createWorkoutInput: {
      startedAt: new Date().toISOString(),
      workoutRoutineId: routine.id
    },
    exerciseResultInputs: getExerciseResultInputs(routine.exercises.items)
  };

  return workoutInputs;
};

const getExerciseResultInputs = (exercises: Exercise[]): ExerciseResultInput[] => {
  return exercises.map<ExerciseResultInput>((exercise: Exercise) => ({
    createExerciseResultInput: {
      exerciseResultExerciseId: exercise.id,
      exerciseResultWorkoutId: null
    },
    createSetInputs: getCreateSetInputs(exercise)
  }));
};

const getCreateSetInputs = (exercise: Exercise): CreateSetInput[] => {
  const sets: CreateSetInput[] = [];
  for (let i = 1; i <= exercise.sets; i++) {
    sets.push({
      setNumber: i,
      weightInKg: exercise.weightInKg,
      repetitions: exercise.repetitions
    });
  }
  return sets;
};
