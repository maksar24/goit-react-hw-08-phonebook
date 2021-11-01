import { useState } from "react";
import { logIn } from "../../redux/auth/auth-operation(axios)";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {!isLoggedIn && (
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <span className={styles.labelText}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              className={styles.input}
            />
          </label>

          <Button type="submit" contentBtn="Sign up" />
        </form>
      )}
    </div>
  );
}
