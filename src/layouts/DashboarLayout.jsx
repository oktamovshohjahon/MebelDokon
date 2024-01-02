import { Outlet } from "react-router-dom";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar";

function DashboarLayout() {
  const localLogin = localStorage.getItem("login");
  let login;

  if (localLogin == "false") {
    login = false;
  } else {
    login = true;
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
