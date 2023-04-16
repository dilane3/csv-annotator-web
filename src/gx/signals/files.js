import { createSignal } from "@dilane3/gx";

const fileSignal = createSignal({
  name: "files",
  state: [],
  actions: {
    addFiles: (state, payload) => {
      const files = [...state];

      for (let file of payload) {
        const fileExtensionCorrect = file.name.split(".").pop() === "csv";

        if (fileExtensionCorrect && !files.map((f) => f.name).includes(file.name)) {
          files.push(file);
        }
      }

      return files;
    },
    removeFile: (state, payload) => {
      return state.filter((file) => file.name !== payload);
    },
  },
});

export default fileSignal;
