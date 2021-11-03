import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { CustomLoader } from "./components/Loader/Loader";
import { fetchCurrentUser } from "./redux/auth/auth-operation(axios)";
import PrivetRouter from "./components/Routes/PrivetRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { getIsRefreshing } from "./redux/auth/auth-selectors";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /* webpackChunkName: "home-page"*/)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /* webpackChunkName: "registration-page"*/
  )
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /* webpackChunkName: "login-page"*/)
);
const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /* webpackChunkName: "contacts-page"*/
  )
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<CustomLoader />}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivetRouter path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivetRouter>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
