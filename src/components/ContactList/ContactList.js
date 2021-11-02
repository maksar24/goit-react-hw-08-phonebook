import React from "react";
import PropTypes from "prop-types";
import { List, Item, Button } from "./ContactList.styles";

export const ContactList = ({ options, onDelete }) => {
  return (
    <List>
      {options.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
