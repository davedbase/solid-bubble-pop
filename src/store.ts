import { createContext } from 'solid-js';
import { Store, SetStoreFunction } from 'solid-js/store';

type GameState = {
  session: boolean;
  score: number;
  totalBubbles: number;
  finalScore: number;
  lastScore: number | null;
};

export const GameStore = createContext<
  [Store<GameState>, SetStoreFunction<GameState>]
>([
  {
    session: false,
    score: 0,
    totalBubbles: 0,
    finalScore: 0,
    lastScore: 0,
  },
  () => {},
]);
