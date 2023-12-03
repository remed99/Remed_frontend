import { BrowserRouter as Router, Routes as Routee, Route } from "react-router-dom";
import HomePageLayout from "../layouts/HomePageLayout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import Authorizer from "../utils/authorizer";
import AdminPageLayout from "../layouts/AdminPageLayout";
import AdminLandingPage from "../pages/AdminLandingPage";

const Routes = () => {
  // const isVerified = localStorage.getItem('isVerified');
  const isVerified = false;
  return (
    <Router>
      <Routee>
        <Route path="/" element={<HomePageLayout/>}>
          <Route index element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>
        <Route path="/admin" element={<Authorizer isVerified={isVerified} component={<AdminPageLayout/>}/>}>
          <Route index element={<AdminLandingPage/>} />
        </Route>
      </Routee>
    </Router>
  );
};

export default Routes;
