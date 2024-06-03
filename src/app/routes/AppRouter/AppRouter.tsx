import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../../../pages/home";
import {BaseLayout} from "../../layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route element={<Home />} index={true} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
