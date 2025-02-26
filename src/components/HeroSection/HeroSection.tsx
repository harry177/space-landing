import { Button } from "../Button/Button";
import "./hero-section.scss";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-container__left">
          <h1 className="hero-title">
            Discover the vast expanses of <span>space</span>
          </h1>
          <h2 className="hero-motto">
            Where the possibilities are <span>endless!</span>
          </h2>
          <Button className="button-full">Learn more</Button>
        </div>
        <div className="hero-container__right">
          <div className="orbit-container">
            <div className="orbit-item"></div>
            <div className="orbit-item"></div>
            <div className="orbit-item"></div>
          </div>
          <div className="earth-container"></div>
        </div>
      </div>
    </section>
  );
};
