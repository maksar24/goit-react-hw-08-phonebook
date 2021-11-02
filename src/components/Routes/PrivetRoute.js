import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PrivetRouter({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
