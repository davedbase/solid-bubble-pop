import { Component, useContext } from 'solid-js';
import { styled } from 'solid-styled-components';
import { GameStore } from '../store';

const Inputs: Component = () => {
  const [store, setStore] = useContext(GameStore)!;
  const updateStore = (key: 'finalScore' | 'totalBubbles') => {
    return (evt: any) => setStore(key, parseInt(evt.currentTarget.value));
  };
  return (
    <InputsStyle class="glass">
      <h2>Game Settings</h2>
      <label>
        Winning Score:
        <input
          onInput={updateStore('finalScore')}
          class="glass"
          min="1"
          max="100"
          type="number"
          name="score"
          value={store.finalScore}
        />
      </label>
      <label>
        Total Bubbles:
        <input
          onInput={updateStore('totalBubbles')}
          class="glass"
          min="1"
          max="100"
          type="number"
          name="bubbles"
          value={store.totalBubbles}
        />
      </label>
    </InputsStyle>
  );
};

const InputsStyle = styled('aside')`
  margin: var(--size-4);
  position: absolute;
  top: 0;
  left: 0;
  justify-items: flex-start;
  h2 {
    border-bottom: 1px solid var(--white);
  }
  label {
    display: flex;
    gap: var(--size-1);
  }
  input {
    margin: 0;
    padding: var(--size-1) var(--size-2);
  }
`;

export default Inputs;
