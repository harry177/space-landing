import { ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};
