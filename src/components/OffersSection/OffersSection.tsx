import { OffersCard } from "../OffersCard/OffersCard";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cardsData } from "./data";
import "./offers-section.scss";

export const OffersSection = () => {
  const mobile = useMediaQuery("(max-width: 999px)");

  return (
    <section className="offers">
      <h2>Offers</h2>
      <div className="offers-grid">
        {cardsData.map((card, index) => (
          <OffersCard
            key={index}
            picture={card.picture}
            title={card.title}
            motto={mobile ? card.mottoSmall : card.mottoBig}
          />
        ))}
      </div>
    </section>
  );
};
