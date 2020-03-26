import { GetRoutineQuery } from '../API';
import { Exercise } from '../types/WorkoutTypes';
import { ExerciseResultInput, CreateSetFormInput, WorkoutInputs } from '../types/FormInputTypes';

export const mapRoutinetoWorkoutInputs = (routineData: GetRoutineQuery): WorkoutInputs => {
  const routine = routineData.getRoutine;

  const workoutInputs: WorkoutInputs = {
    createWorkoutInput: {
      startedAt: new Date().toISOString(),
      workoutRoutineId: routine.id,
    },
    exerciseResultInputs: getExerciseResultInputs(routine.exercises.items),
  };

  return workoutInputs;
};

const getExerciseResultInputs = (exercises: Exercise[]): ExerciseResultInput[] => {
  return exercises.map<ExerciseResultInput>((exercise: Exercise) => ({
    createExerciseResultInput: {
      exerciseResultExerciseId: exercise.id,
      exerciseResultWorkoutId: null,
    },
    createSetInputs: getCreateSetInputs(exercise),
  }));
};

const getCreateSetInputs = (exercise: Exercise): CreateSetFormInput[] => {
  const sets: CreateSetFormInput[] = [];
  for (let i = 1; i <= exercise.sets; i++) {
    sets.push({
      setNumber: i,
      // TODO: Make target weight and sets equal to previous exercise result OR previous
      // exercise result + prediction
      targetWeightInKg: exercise.weightInKg,
      targetRepetitions: exercise.repetitions,
    });
  }
  return sets;
};
