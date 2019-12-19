import React, { Component } from "react";
import HeadingSecondary from "./../heading-secondary/heading-secondary.component";
import { Container } from "reactstrap";
import Card from "../card/card.component";
import "./services-section.styles.scss";
import Periodico from "../SVG/periodico/periodico";
import Analysis from "../SVG/analysis/analysis";
import Calculadora from "../SVG/calculadora/calculadora-completa";
import Bitcoin from "../SVG/bitcoin/bitcoin";

class ServicesSection extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 0,
        title: "Financial Tools",
        imgSrc: <Calculadora />,
        description:
          "There is almost unlimited information, and everyone can access it with the right tools."
      },
      {
        id: 1,
        title: "Portfolio analysis",
        imgSrc: <Analysis />,
        description:
          "It's harder to save and invest money profitably if you aren't prudently overseeing it to improve the odds of having enough growth to harvest the financial rewards you need."
      },
      {
        id: 2,
        title: "Crypto loans platforms",
        imgSrc: <Bitcoin />,
        description:
          "We offer the oportunity to monitor the interest rate and earnings from the crypto loans platforms supported at the moment. We are working hard to bring more platforms."
      },
      {
        id: 3,
        title: "Latest news and special offers ",
        imgSrc: <Periodico />,
        description:
          "Stay up to date with the latest news from the P2P world and get special offers."
      }

    ];
  }
  render() {
    return (
      <Container>
        <div className="services-section">
          <HeadingSecondary text="Services We Offer" />
          <div className="grid-container">
            {this.state.map(card => {
              return (
                <div className="card-grid">
                  <Card
                    id={card.id}
                    title={card.title}
                    imgSrc={card.imgSrc}
                    description={card.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default ServicesSection;
