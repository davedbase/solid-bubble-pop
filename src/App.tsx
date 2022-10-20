import { Component, Switch, Match, Show, createEffect, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import { GameStore } from './store';
import Layout from './components/Layout';
import Inputs from './components/Inputs';
import GameBar from './components/GameBar';
import Bubbles from './components/bubbles/Bubbles';
import { getStorage, setStorage } from './utils/storage';

const [store, setStore] = createStore({
  score: 0,
  session: false,
  totalBubbles: getStorage('bubbles', 50)!,
  lastScore: getStorage('lastScore', 0, true),
  finalScore: getStorage('finalScore', 10)!,
  bubbles: getStorage('bubbles', 50)!,
});

createEffect(() => {
  setStorage('lastScore', store.lastScore);
  setStorage('finalScore', store.finalScore);
  setStorage('bubbles', store.bubbles);
});

const App: Component = () => (
  <GameStore.Provider value={[store, setStore]}>
    <Layout>
      <Switch>
        <Match when={!store.session}>
          <Inputs />
          <h1>Bubble Pop</h1>
          <button onclick={() => setStore('session', true)}>
            Start Popping
          </button>
          <Show when={store.lastScore !== null}>
            <h2>Previous High Score: {store.lastScore || 'null'}</h2>
          </Show>
        </Match>
        <Match when={store.session}>
          <Bubbles />
          <GameBar />
        </Match>
      </Switch>
    </Layout>
  </GameStore.Provider>
);

export default App;
