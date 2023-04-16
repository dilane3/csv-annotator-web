import axios from "axios";

// export const instance = axios.create({
//   baseURL: "http://localhost:5000",
//   timeout: 86400000,
// });

export const instance = axios.create({
  baseURL: "https://csv-annotator.onrender.com",
  timeout: 86400000,
});

export const annotateCsv = async (files) => {
  const formData = new FormData();

  try {
    files.forEach((file) => {
      formData.append("image", file);
    });

    const response = await instance.post("/api/annotation", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
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
