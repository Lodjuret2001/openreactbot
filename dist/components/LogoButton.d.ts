/// <reference types="react" />
import { StylesConfig } from "../types/orbTypes";
type Props = {
    styles: StylesConfig;
    handleSetIsOpen: () => void;
};
declare const LogoButton: ({ styles, handleSetIsOpen }: Props) => import("react").JSX.Element;
export default LogoButton;
