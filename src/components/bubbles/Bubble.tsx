import { Component, Show, useContext, createSignal } from 'solid-js';
import { styled, keyframes } from 'solid-styled-components';
import { Transition } from 'solid-transition-group';
import { popTransition } from '../../utils/transitions';
import { GameStore } from '../../store';

const Bubble: Component<{
  scale: number;
  offset: number;
  delay: number;
  speed: number;
}> = (props) => {
  const [popped, setPopped] = createSignal(false);
  const [store, setStore] = useContext(GameStore)!;
  return (
    <BubbleStyle
      style={{
        '--scale': props.scale,
        '--offset': `${props.offset}%`,
        '--delay': `${props.delay}ms`,
        '--speed': `${props.speed}s`,
      }}
    >
      <div class="positioner-inner">
        <Transition onExit={popTransition({ duration: 200 })}>
          <Show when={!popped()}>
            <div
              class="bubble"
              onclick={() => {
                setStore('score', store.score + 1);
                setPopped(true);
              }}
            />
          </Show>
        </Transition>
      </div>
    </BubbleStyle>
  );
};

const position = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, calc((-2.5 * var(--bubble-size)) - 100vh), 0);
  }
`;
const wobble = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(42px, 0, 0);
  }
`;
const BubbleStyle = styled('div')`
  --bubble-size: calc(200px * var(--scale));

  animation: ${position} var(--speed) linear infinite forwards;

  animation-delay: var(--delay);

  position: fixed;
  z-index: var(--zindex, 99);

  bottom: calc(var(--bubble-size) * -2);
  left: var(--offset);

  .positioner-inner {
    animation: ${wobble} 2s ease-in-out alternate infinite;
    animation-delay: inherit;
  }
  .bubble {
    width: var(--bubble-size);
    height: var(--bubble-size);

    border-radius: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), inset 0px 5px 15px 2px rgba(255, 255, 255, 1);

    backdrop-filter: blur(1px);
    filter: blur(2px);
  }
`;

export default Bubble;
