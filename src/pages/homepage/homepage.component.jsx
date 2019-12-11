import React from "react";
import Header from "../../components/homepage-header/homepage-header.component";
import ServicesSection from "../../components/services-section/services-section.component";
import "./homepage.styles.scss";

const HomePage = props => {
  return (
    <div>
      <Header />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
