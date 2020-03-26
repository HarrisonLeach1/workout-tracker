import { createContext, useState } from 'react';

export function useSelectedRoutine() {
  const [routineID, setRoutineID] = useState<string>('');
  return { routineID, setRoutineID };
}

export const SelectedRoutineContext = createContext(null);
