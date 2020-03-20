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

import { WorkoutInputs, ExerciseResultInput } from "../contexts/InProgressWorkoutContext";
import { Exercise } from "../types/WorkoutTypes";
import { ApolloError } from "apollo-boost";

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

    console.log("sent values: " + JSON.stringify(values));

    return;

    const createdWorkout = await addWorkout({
      variables: {
        input: values.createWorkoutInput
      }
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
            ...createSetInput,
            setExerciseResultId: createdExerciseResultId
          }
        }
      });
    });
  };

  const options = {
    loading: addSetLoading || addExerciseLoading || addWorkoutLoading,
    errors: [addSetError, addExerciseError, addWorkoutError]
  };

  return [handleCreateWorkout, options];
};
