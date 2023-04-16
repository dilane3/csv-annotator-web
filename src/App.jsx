import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import loaderBlue from "./assets/loader_blue.svg";
import loaderWhite from "./assets/loader_white.svg";
import "./App.css";
import { FileItem } from "./components/File";
import { useActions, useSignal } from "@dilane3/gx";
import { useRef } from "react";
import { annotateCsv } from "./api";
import { instance } from "./api";
import { formatTime } from "./utils";
import { downloadBaseUrl } from "./utils";

function App() {
  // Global state
  const files = useSignal("files");
  const { loading, finished, link } = useSignal("loading");

  // Global actions
  const { addFiles } = useActions("files");
  const { start, stop, setLink } = useActions("loading");

  // Local state
  const [zip, setZip] = useState(null);
  const [counter, setCounter] = useState(0);

  // Ref section
  const inputRef = useRef();

  // UseEffect section
  useEffect(() => {
    let timer;

    if (loading) {
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [loading]);

  // Some functions
  const handleOpenFolder = () => {
    if (!loading && inputRef.current) inputRef.current.click();
  };

  const handleFileSelected = (event) => {
    // Add files to global state
    addFiles(event.target.files);

    // Empty files into input tag
    // inputRef.current.files;
  };

  const handleSubmit = async () => {
    if (files.length === 0) return;

    // Start loading
    start();
    setCounter(0);

    const { data } = await annotateCsv(files);

    console.log(data)

    if (data) {
      // Set link to download
      setLink(data.link);
    }

    // Stop loading
    stop();
  };

  const handleDownload = async (link) => {
    if (!finished) return;

    // Download file with custom name
    const { data } = await instance.get(`/static/${link}`, {
      responseType: "blob",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    // Create a blob link to download
    const urlToDownload = window.URL.createObjectURL(new Blob([data]));

    const filename = link.split("/").pop();

    console.log({ urlToDownload });

    // Add link to download
    setZip({
      url: urlToDownload,
      name: filename,
    });
  };

  return (
    <main className="App">
      <header className="header">
        <span>.CSV</span>
      </header>

      <section className="main">
        <div className="main__title">
          <h1>
            Welcome to <span>CSV ANNOTATOR</span>
          </h1>

          <p>Upload yours clean CSV files and let us do the rest.</p>
        </div>

        <div className="main__upload">
          <div className="main__chrono">{formatTime(counter)}</div>
          <div className="main__uploader">
            <input
              ref={inputRef}
              type="file"
              onChange={handleFileSelected}
              multiple
              hidden
              accept="text/csv"
            />

            <button
              className="main__uploader__title"
              onClick={handleOpenFolder}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                  fill="#000"
                />
              </svg>
              <span>Select Files</span>

              <span className="badge">{files.length}</span>
            </button>

            {finished && link !== null ? (
              <a href={`${downloadBaseUrl}/${link}`} download={link.split("/").pop()} target="_blanc">
                <button className="main__results">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                      fill="#000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                      fill="#000"
                    />
                  </svg>
                  <span>Download</span>
                </button>
              </a>
            ) : (
              <span className="tips">
                Use Ctrl or Shift to select many files
              </span>
            )}

            <button
              className={`upload__btn ${files.length > 0 ? "active" : ""}`}
              onClick={handleSubmit}
            >
              <span>Annotate</span>

              {loading ? (
                <img src={loaderWhite} width="24" height="24" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
                </svg>
              )}
            </button>
          </div>

          <section className="main__files">
            {files.map((file, index) => (
              <FileItem key={index} file={file} />
            ))}
          </section>
        </div>
      </section>

      <footer className="footer"></footer>
    </main>
  );
}

export default App;
