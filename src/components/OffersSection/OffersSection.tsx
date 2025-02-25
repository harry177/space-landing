import { OffersCard } from "../OffersCard/OffersCard";
import { cardsData } from "./data";
import "./offers-section.scss";

export const OffersSection = () => {
  return (
    <section className="offers">
      <h2>Offers</h2>
      <div className="offers-grid">
        {cardsData.map((card, index) => (
          <OffersCard key={index} picture={card.picture} title={card.title} motto={card.motto} />
        ))}
      </div>
    </section>
  );
};
