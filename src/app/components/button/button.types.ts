import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentBase & {
    isLink?: boolean,
    animatedIcon?: boolean,
    shape?: ButtonShapes,
}

export type ButtonShapes = "default" | "wide" | "full" | "square"