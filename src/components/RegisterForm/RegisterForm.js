import { useState } from "react";
import { signIn } from "../../redux/auth/auth-operation(axios)";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { Form, Label, LabelText, Input } from "./RegisterForm.styles";

export default function RegisterForm() {
  const dispatch = useDispatch();
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
    dispatch(signIn({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <LabelText>Name</LabelText>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Label>

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

        <Button type="submit" contentBtn="Sign up" />
      </Form>
    </>
  );
}
