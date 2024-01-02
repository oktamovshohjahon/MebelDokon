import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();

  const statusText = err.statusText;
  const status = err.status;

  return (
    <div className="error-page">
      <h1 className="title">
        {status} | {statusText}
      </h1>
      <NavLink to={"/"} className={"button"}>
        Bosh sahifaga qaytish
      </NavLink>
    </div>
  );
}

export default ErrorPage;
