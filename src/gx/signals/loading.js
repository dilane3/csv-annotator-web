import { createSignal } from "@dilane3/gx";

const loadingSignal = createSignal({
  name: "loading",
  state: {
    loading: false,
    finished: false,
  },
  actions: {
    stop: (_) => ({ loading: false, finished: true }),
    start: (_) => ({ loading: true, finished: false }),
  },
});

export default loadingSignal;
