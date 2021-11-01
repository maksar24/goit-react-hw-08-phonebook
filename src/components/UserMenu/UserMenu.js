import styles from "./UserMenu.module.css";
import defaultAvatar from "./DefaultPicture.png";
import { getUsername } from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation(axios)";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
