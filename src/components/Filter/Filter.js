import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Filter.styles";

export const Filter = ({ type, label, getSearchName }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <Input type={type} onChange={getSearchName} placeholder={label} />
    </>
  );
};

Filter.defaultProps = {
  type: "text",
};

Filter.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};
