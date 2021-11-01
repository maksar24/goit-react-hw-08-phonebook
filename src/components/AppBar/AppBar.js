import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNavigation/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import styles from "./Appbar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
