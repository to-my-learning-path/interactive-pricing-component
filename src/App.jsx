import { useState } from "react";
import "./App.css";

import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";

import CheckIcon from "./assets/images/icon-check.svg";

const pricePerViewData = [
  {
    view: 50,
    price: 8,
  },
  {
    view: 100,
    price: 16,
  },
  {
    view: 150,
    price: 24,
  },
  {
    view: 200,
    price: 32,
  },
  {
    view: 250,
    price: 40,
  },
];

function calculateDiscount(price, discount) {
  if (discount === undefined) {
    return price;
  }
  return price * ((100 - discount) / 100);
}

function App() {
  const [pricePerViewList, setpricePerViewList] = useState(pricePerViewData);
  const initalPricePerView = pricePerViewList[1];
  const [currentPricePerView, setCurrentPricePerView] =
    useState(initalPricePerView);
  const [isChecked, setIsChecked] = useState(false);

  const handleSliderChange = (e) => {
    const currentPricePerViewItem = pricePerViewList.find(
      (item) => item.view === e.target.value
    );
    setCurrentPricePerView(currentPricePerViewItem);
  };

  const handleSwitchChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
  };

  const defaultValue = initalPricePerView.view;
  const minValue = pricePerViewList[0].view;
  const maxValue = pricePerViewList[pricePerViewList.length - 1].view;

  const discount = 25;

  const displayView = currentPricePerView.view;
  const displayPrice = isChecked
    ? `$${(calculateDiscount(currentPricePerView.price, discount) * 12).toFixed(
        2
      )}`
    : `$${currentPricePerView.price.toFixed(2)}`;

  return (
    <main>
      <article>
        <div className="article__header">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="article__body">
          <div className="article__section">
            <div className="article__pricing">
              <p>{displayView}K Pageviews</p>
              <Slider
                aria-label="Prices"
                defaultValue={defaultValue}
                step={50}
                onChange={handleSliderChange}
                min={minValue}
                max={maxValue}
              />
              <p>
                <span>{displayPrice}</span> {isChecked ? "/year" : "/month"}
              </p>
            </div>
            <div className="article__billing">
              <p>Monthly Billing</p>
              <Switch checked={isChecked} onChange={handleSwitchChange} />
              <div className="article__yearly-bill">
                <p>Yearly Billing</p>{" "}
                <p className="article__discount">
                  -{discount}% <span className="discount-text">discount</span>
                </p>
              </div>
            </div>
          </div>
          <div className="article__section">
            <ul className="article__benefits">
              <li>
                <img src={CheckIcon} alt="" />
                <p>Unlimited websites</p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <p>100% data ownership</p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <p>Email reports</p>
              </li>
            </ul>
            <div>
              <button className="article__cta-button">Start my trial</button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
