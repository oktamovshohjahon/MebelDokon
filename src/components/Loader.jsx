import { PacmanLoader } from "react-spinners";

function PageLoader() {
  // mode
  let dark;

  // body
  const body = document.querySelector("body");
  const mode = body.classList.contains("dark-mode");

  if (mode) {
    dark = true;
  }

  return (
    <div className="overlay">
      <PacmanLoader color={dark ? "#fff" : "#000"} size={60} />
    </div>
  );
}

export default PageLoader;
