import React from "react";
import { StylesConfig } from "../types/orbTypes";

const LogoButton = ({ styles, handleSetIsOpen }: LogoButtonProps) => {
  const { logo, logoWidth, logoHeight, logoBorderRadius, bottom, left, right } =
    styles;

  const logoButtonStyles: React.CSSProperties = {
    background: `url(${logo})`,
    backgroundSize: "cover",
    width: logoWidth,
    height: logoHeight,
    borderRadius: logoBorderRadius,
    border: "none",
    position: "fixed",
    bottom: bottom,
    left: left,
    right: right,
  };

  return (
    <button style={logoButtonStyles} onClick={() => handleSetIsOpen()}></button>
  );
};

export type LogoButtonProps = {
  styles: StylesConfig;
  handleSetIsOpen: () => void;
};

export default LogoButton;
