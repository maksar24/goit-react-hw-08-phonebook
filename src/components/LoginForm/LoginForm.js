import { useState } from "react";
import { logIn } from "../../redux/auth/auth-operation(axios)";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";
import { Form, Label, LabelText, Input } from "./LoginForm.styles";

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
    <>
      {!isLoggedIn && (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            <LabelText>Email</LabelText>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Label>

          <Label>
            <LabelText>Password</LabelText>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Label>

          <Button type="submit" contentBtn="Log in" />
        </Form>
      )}
    </>
  );
}
