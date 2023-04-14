import { createSignal } from "@dilane3/gx";

const loadingSignal = createSignal({
  name: "loading",
  state: {
    loading: false,
    finished: false,
    link: null,
  },
  actions: {
    stop: (state) => ({ ...state, loading: false, finished: true }),
    start: (state) => ({ ...state, loading: true, finished: false }),
    setLink: (state, payload) => ({ ...state, link: payload }),
  },
});

export default loadingSignal;
