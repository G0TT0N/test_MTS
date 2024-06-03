import "./BaseLayout.css";
import {Outlet} from "react-router-dom";

export const BaseLayout = () => {
  return (
    <main className='baseLayout'>
      <Outlet />
    </main>
  );
};
