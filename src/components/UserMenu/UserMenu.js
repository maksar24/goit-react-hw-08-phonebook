import { Container, Name } from "./UserMenu.styles";
import defaultAvatar from "../../images/DefaultPicture.png";
import { getUsername } from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation(axios)";
import Button from "../Button/Button";
import { Avatar } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar alt="default" src={avatar} sx={{ width: 56, height: 56 }} />
      <Name>Welcome, {name}</Name>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        contentBtn="Log out"
      />
    </Container>
  );
}
