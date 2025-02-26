import { ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  children: ReactNode;
  className: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`button ${className}`}>{children}</button>;
};
