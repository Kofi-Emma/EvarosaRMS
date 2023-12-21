import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import POSInterface from "./pages/POSInterface";
import ConsolePage from "./pages/ConsolePage";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignIn";
import MainMenuPage from "./pages/MainMenuPage";
import PrivateRoutes from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/POS' element={<POSInterface />} />
            <Route
              path='/console/*'
              element={<ConsolePage />}
            />
          </Route>
          <Route path='/sign-in' element={<SignInPage />} />
          <Route
            path='/main-menu'
            element={<MainMenuPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
