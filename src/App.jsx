import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
          <div className="main__uploader">
            <button className="main__uploader__title">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              <span>Add csv files</span>
            </button>

            <button className="upload__btn">
              <span>Annotate</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer"></footer>
    </main>
  );
}

export default App;
