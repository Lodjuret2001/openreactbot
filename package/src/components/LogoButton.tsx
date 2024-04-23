import { StylesConfig } from "../types/chatBotTypes";

type Props = {
  styles: StylesConfig;
  handleSetIsOpen: () => void;
};

const LogoButton = ({ styles, handleSetIsOpen }: Props) => {
  const { logo, logoWidth, logoHeight, logoBorderRadius, bottom, left, right } =
    styles;

  const logoButtonStyles: React.CSSProperties = {
    background: `url(${logo})`,
    backgroundSize: "cover",
    width: logoWidth,
    height: logoHeight,
    borderRadius: logoBorderRadius,
    position: "fixed",
    bottom: bottom,
    left: left,
    right: right,
  };

  return (
    <button style={logoButtonStyles} onClick={() => handleSetIsOpen()}></button>
  );
};

export default LogoButton;