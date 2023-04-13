import { createStore } from "@dilane3/gx";
import fileSignal from "../signals/files";
import loadingSignal from "../signals/loading";

export default createStore([fileSignal, loadingSignal]);
