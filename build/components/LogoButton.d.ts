import React from "react";
import { StylesConfig } from "../types/orbTypes";
declare const LogoButton: ({ styles, handleSetIsOpen }: Props) => React.JSX.Element;
type Props = {
    styles: StylesConfig;
    handleSetIsOpen: () => void;
};
export default LogoButton;
