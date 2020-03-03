import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";
import gql from "graphql-tag";
import {
    CreateExerciseInput,
    CreateExerciseMutation,
    CreateRoutineMutation,
    ListRoutinesQuery
} from "./API";
import { listRoutines } from "./graphql/queries";

export const getOptmisticCreateExerciseResponse = (
    exerciseData: CreateExerciseInput,
    routineData: CreateRoutineMutation
): CreateExerciseMutation => {
    const response: CreateExerciseMutation = {
        createExercise: {
            __typename: "Exercise",
            id: "1",
            name: exerciseData.name,
            sets: exerciseData.sets,
            repetitions: exerciseData.repetitions,
            weightInKg: exerciseData.weightInKg,
            routine: {
                __typename: "Routine",
                id: routineData.createRoutine.id,
                name: routineData.createRoutine.name,
                exercises: {
                    __typename: "ModelExerciseConnection",
                    nextToken: null
                }
            }
        }
    };

    return response;
};

export const getOptmisticCreateRoutineResponse = (
    name: string
): CreateRoutineMutation => {
    const response: CreateRoutineMutation = {
        createRoutine: {
            __typename: "Routine",
            id: String(new Date().getTime()),
            name: name,
            exercises: {
                __typename: "ModelExerciseConnection",
                items: [],
                nextToken: null
            }
        }
    };

    return response;
};

export const createRoutineUpdate = (
    cache: DataProxy,
    response: FetchResult<CreateRoutineMutation>
) => {
    const cachedRoutines: ListRoutinesQuery = cache.readQuery({
        query: gql(listRoutines),
        variables: { limit: 5 }
    });

    console.log("Cached routines");
    console.log(JSON.stringify(cachedRoutines));

    cachedRoutines.listRoutines.items.push(response.data.createRoutine);

    console.log(JSON.stringify(response));
    console.log("Cached with pushed changes");
    console.log(JSON.stringify(cachedRoutines));

    cache.writeQuery({
        query: gql(listRoutines),
        variables: { limit: 5 },
        data: cachedRoutines
    });

    const cachedRoutines2: ListRoutinesQuery = cache.readQuery({
        query: gql(listRoutines),
        variables: { limit: 5 }
    });

    console.log("Cached routines 2");
    console.log(JSON.stringify(cachedRoutines2));
};
