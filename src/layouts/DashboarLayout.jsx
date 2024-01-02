import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar";

function DashboarLayout() {
  const localLogin = localStorage.getItem("login");
  let login;

  if (localLogin == "true") {
    login = true;
  } else {
    login = false;
  }

  console.log(localLogin);

  return (
    <>
      {login ? (
        <div className="dashboard">
          <Outlet />
          <DashboardNavbar />
        </div>
      ) : (
        (location.href = "/")
      )}
    </>
  );
}

export default DashboarLayout;
