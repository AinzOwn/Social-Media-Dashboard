import React from "react";
import CardSmall from "./card-small";
import "../assets/css/overview.css";

const cardSmallList = [
  {
    icon: "images/icon-facebook.svg",
    pageViews: "87",
    growth: 3,
    key: 1,
  },
  {
    icon: "images/icon-twitter.svg",
    pageViews: "88",
    growth: 3,
    key: 2,
  },
  {
    icon: "images/icon-instagram.svg",
    pageViews: "100",
    growth: 3,
    key: 3,
  },
  {
    icon: "images/icon-youtube.svg",
    pageViews: "50",
    growth: 3,
    key: 4,
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(({ icon, pageViews, growth, key }) => (
            <CardSmall
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
