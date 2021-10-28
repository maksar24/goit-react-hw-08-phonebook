import { useState } from "react";
import { useLoginUserMutation } from "../../redux/auth/auth-operations";
import Button from "../../components/Button/Button";
import styles from "./LoginView.module.css";

export default function LoginView() {
  const [loginUser] = useLoginUserMutation();
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
    loginUser({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
    </div>
  );
}
