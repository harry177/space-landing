import { Button } from "../Button/Button";
import "./offers-card.scss";

interface OffersCardProps {
  picture: string;
  title: string;
  motto: string;
}

export const OffersCard = ({ picture, title, motto }: OffersCardProps) => {
  return (
    <article className="offers-card">
      <img src={picture} className="offers-card__background"></img>
      <div className="offers-card__gradient"></div>
      <div className="offers-card__content">
        <h3>{title}</h3>
        <h4>{motto}</h4>
        <Button>Learn more</Button>
      </div>
    </article>
  );
};
