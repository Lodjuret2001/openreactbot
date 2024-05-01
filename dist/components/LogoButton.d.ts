/// <reference types="react" />
import { StylesConfig } from "../types/orbTypes";
declare const LogoButton: ({ styles, handleSetIsOpen }: Props) => import("react").JSX.Element;
type Props = {
    styles: StylesConfig;
    handleSetIsOpen: () => void;
};
export default LogoButton;
