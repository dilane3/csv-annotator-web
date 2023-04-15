import axios from "axios";

const instance = axios.create({
  baseURL: "https://csv-annotator.onrender.com/api",
  timeout: 86400000,
});

export const annotateCsv = async (files) => {
  const formData = new FormData();

  try {
    files.forEach((file) => {
      formData.append("image", file);
    });

    const response = await instance.post("/annotation", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      return { data: response.data };
    } else {
      return { error: "Something went wrong" };
    }
  } catch (err) {
    console.log(err);

    return { error: "Something went wrong" };
  }
};
