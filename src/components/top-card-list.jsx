import React from "react";
import Card from "./card";
import "../assets/css/top-card-list.css";

const cardListData = [
  {
    id: 1,
    username: "@DazaiLuxF",
    followers: "1596",
    todayFollowers: 12,
    icon: "images/icon-facebook.svg",
    name: "facebook",
  },
  {
    id: 2,
    username: "@DazaiLuxT",
    followers: "1596",
    todayFollowers: 12,
    icon: "images/icon-twitter.svg",
    name: "twitter",
  },
  {
    id: 3,
    username: "@DazaiLuxI",
    followers: "1596",
    todayFollowers: 12,
    icon: "images/icon-instagram.svg",
    name: "instagram",
  },
  {
    id: 4,
    username: "@DazaiLuxY",
    followers: "1596",
    todayFollowers: 12,
    icon: "images/icon-youtube.svg",
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
