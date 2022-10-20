import { Component, Show, For, createSignal, useContext } from 'solid-js';
import { createEffect } from 'solid-js';
import { GameStore } from '../../store';
import { random } from '../../utils/random';
import Bubble from './Bubble';

const Bubbles: Component = () => {
  const [store] = useContext(GameStore)!;
  const [showBubbles, setShowBubbles] = createSignal(true);
  createEffect(() => {
    if (store.finalScore == store.score) {
      setShowBubbles(false);
    }
  });
  return (
    <Show when={showBubbles()}>
      <For each={new Array(store.totalBubbles)}>
        {(_, i) => (
          <Bubble
            scale={random(2, 3.5) / 10}
            offset={i() * random(8, 10)}
            delay={random(1000, 5000)}
            speed={random(10, 20)}
          />
        )}
      </For>
    </Show>
  );
};

export default Bubbles;
