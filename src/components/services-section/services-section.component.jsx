import React, { Component } from "react";
import HeadingSecondary from "./../heading-secondary/heading-secondary.component";

import Card from "../card/card.component";
import "./services-section.styles.scss";

class ServicesSection extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 3,
        title: "Peer to Peer Platforms",
        imgSrc: "https://image.flaticon.com/icons/png/512/2237/2237929.png",
        description:
          "Stay up to date with the latest news from the P2P world and get special offers."
      },
      {
        id: 2,
        title: "Crypto loans platforms",
        imgSrc: "https://image.flaticon.com/icons/png/512/976/976848.png",
        description:
          "We offer the oportunity to monitor the interest rate and earnings from the crypto loans platforms supported at the moment. We are working hard to bring more platforms."
      },
      {
        id: 0,
        title: "Financial Tools",
        imgSrc: "https://image.flaticon.com/icons/png/512/1212/1212051.png",
        description:
          "There is almost unlimited information, and everyone can access it with the right tools."
      },
      {
        id: 1,
        title: "Portfolio analysis",
        imgSrc: "https://image.flaticon.com/icons/png/512/816/816066.png",
        description:
          "It's harder to save and invest money profitably if you aren't prudently overseeing it to improve the odds of having enough growth to harvest the financial rewards you need."
      }
    ];
  }
  render() {
    return (
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
    );
  }
}

export default ServicesSection;
