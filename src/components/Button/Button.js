import React from "react";
import PropTypes from "prop-types";
import { DefaultButton } from "./Button.styles";

const Button = ({ onClick, contentBtn, disabled }) => (
  <DefaultButton disabled={disabled} onClick={onClick}>
    {contentBtn}
  </DefaultButton>
);

Button.defaultProps = {
  onClick: () => null,
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  contentBtn: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
