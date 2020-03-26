import { useMutation } from "@apollo/react-hooks";

import {
  CreateWorkoutMutation,
  CreateWorkoutMutationVariables,
  CreateExerciseResultMutation,
  CreateExerciseResultMutationVariables,
  CreateSetMutation,
  CreateSetMutationVariables,
  CreateSetInput
} from "../API";

import gql from "graphql-tag";

import { createWorkout, createExerciseResult, createSet } from "../graphql/mutations";

import { Exercise } from "../types/WorkoutTypes";
import { ApolloError } from "apollo-boost";
import { WorkoutInputs, ExerciseResultInput } from "../types/FormInputTypes";
import { listWorkouts } from "../graphql/queries";

// TODO: This is very inefficient.
// There is currently a limitation in amplify that arrays cannot be added as mutation inputs
// thus each exercise must be added one by one.
export const useCreateWorkout = (): [(values: WorkoutInputs, exercises: Exercise[]) => Promise<void>, { loading: boolean; errors: ApolloError[] }] => {
  const [addWorkout, { loading: addWorkoutLoading, error: addWorkoutError }] = useMutation<CreateWorkoutMutation, CreateWorkoutMutationVariables>(
    gql(createWorkout)
  );
  const [addExerciseResult, { loading: addExerciseLoading, error: addExerciseError }] = useMutation<
    CreateExerciseResultMutation,
    CreateExerciseResultMutationVariables
  >(gql(createExerciseResult));
  const [addSet, { loading: addSetLoading, error: addSetError }] = useMutation<CreateSetMutation, CreateSetMutationVariables>(gql(createSet));

  const handleCreateWorkout = async (values: WorkoutInputs, exercises: Exercise[]): Promise<void> => {
    values.createWorkoutInput.completedAt = new Date().toISOString();

    const createdWorkout = await addWorkout({
      variables: {
        input: values.createWorkoutInput
      },
      // TODO: Very inefficient doubles the number of requests, which is already high. Must fix once the amplify issue is addressed
      refetchQueries: [{ query: gql(listWorkouts) }]
    });

    await addExerciseResults(values.exerciseResultInputs, createdWorkout.data.createWorkout.id, exercises);
  };

  const addExerciseResults = (exerciseResultInputs: ExerciseResultInput[], createdWorkoutId: string, exercises: Exercise[]) => {
    exerciseResultInputs.forEach(async (exerciseResultInputs, index) => {
      const createdExerciseResult = await addExerciseResult({
        variables: {
          input: {
            ...exerciseResultInputs.createExerciseResultInput,
            exerciseResultWorkoutId: createdWorkoutId,
            // TODO: allow exercises to be reordered
            exerciseResultExerciseId: exercises[index].id
          }
        }
      });

      await addSets(exerciseResultInputs.createSetInputs, createdExerciseResult.data.createExerciseResult.id);
    });
  };

  const addSets = (createSetInputs: CreateSetInput[], createdExerciseResultId: string) => {
    createSetInputs.forEach(async createSetInput => {
      await addSet({
        variables: {
          input: {
            setNumber: createSetInput.setNumber,
            // TODO: Add form validation, should not be able to create workout without completing sets
            weightInKg: createSetInput.weightInKg || 0,
            repetitions: createSetInput.repetitions || 0,
            setExerciseResultId: createdExerciseResultId
          }
        }
      });
      console.log("adding set");
    });
  };

  const options = {
    loading: addSetLoading || addExerciseLoading || addWorkoutLoading,
    errors: [addSetError, addExerciseError, addWorkoutError]
  };

  return [handleCreateWorkout, options];
};
