import { useState } from "react";
import { useCreateUserMutation } from "../../redux/auth/auth-operations";
import Button from "../../components/Button/Button";
import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const [createUser] = useCreateUserMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    createUser({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.labelText}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            className={styles.input}
          />
        </label>

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
