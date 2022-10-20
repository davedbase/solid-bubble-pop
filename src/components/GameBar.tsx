import { Component, Switch, Match, useContext } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Transition } from 'solid-transition-group';
import ConfettiExplosion from 'solid-confetti-explosion';
import { fade } from '../utils/transitions';
import { GameStore } from '../store';

const GameBar: Component = () => {
  const [store, setStore] = useContext(GameStore)!;
  const resetGame = () => {
    const lastScore =
      store.score > store.lastScore ? store.score : store.lastScore;
    setStore('session', false);
    setStore('lastScore', lastScore);
  };
  return (
    <Transition
      appear={true}
      onEnter={fade('in', { duration: 1500 })}
      onExit={fade('out', { duration: 400 })}
    >
      <Switch>
        <Match when={store.score === store.finalScore && store.session}>
          <WinStyle>
            <h1>You Win 🥳</h1>
            <button onclick={resetGame}>Play Again</button>
            <ConfettiExplosion />
          </WinStyle>
        </Match>
        <Match when={store.session}>
          <PoppingStyle class="glass">
            <h1>Bubble Pop</h1>
            <h2>{store.score}</h2>
            <button onclick={resetGame}>Stop Game</button>
          </PoppingStyle>
        </Match>
      </Switch>
    </Transition>
  );
};

const WinStyle = styled('section')`
  opacity: 1;
  position: absolute;
  div {
    display: flex;
    justify-content: center;
  }
`;
const PoppingStyle = styled('aside')`
  opacity: 1;
  border-radius: var(--radius-blob-2);
  padding: var(--size-10);
  position: absolute;
  bottom: 0;
  margin-inline: auto;
`;

export default GameBar;
