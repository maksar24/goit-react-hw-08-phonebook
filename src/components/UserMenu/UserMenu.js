import styles from "./UserMenu.module.css";
import defaultAvatar from "./DefaultPicture.png";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "../../redux/auth/auth-operations";

export default function UserMenu() {
  const [logoutUser] = useLogoutUserMutation();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  const logoutFn = async () => {
    await logoutUser();
  };

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => logoutFn()}>
        Log out
      </button>
    </div>
  );
}
