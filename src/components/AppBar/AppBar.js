import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNavigation/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { Header } from "./AppBar.styles";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
