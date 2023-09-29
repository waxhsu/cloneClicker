// src/AutoClicker.js
import React, { useState, useEffect } from "react";
import { autoClickerOptions } from "../const.js";

function AutoClicker({ cookies, setCookies }) {
    const [autoClickers, setAutoClickers] = useState(
      autoClickerOptions.map((option) => ({
        ...option,
        count: 0,
        interval: null,
      }))
    );
  
    const purchaseAutoClicker = (autoClicker) => {
      if (cookies >= autoClicker.cost) {
        const updatedAutoClickers = autoClickers.map((ac) =>
          ac.id === autoClicker.id
            ? { ...ac, count: ac.count + 1 }
            : ac
        );
        setAutoClickers(updatedAutoClickers);
        setCookies(cookies - autoClicker.cost);
      }
    };
  
    useEffect(() => {
      autoClickers.forEach((autoClicker) => {
        if (autoClicker.count > 0) {
          const interval = setInterval(() => {
            setCookies((prevCookies) => prevCookies + autoClicker.clicksPerSecond);
          }, 1000);
          return () => clearInterval(interval);
        }
      });
    }, [autoClickers, setCookies]);
  
    return (
      <div>
        <h2>AutoClickers</h2>
        <ul>
          {autoClickers.map((autoClicker) => (
            <li key={autoClicker.id}>
              <p>
                {autoClicker.name} - Cost: {autoClicker.cost}, Count:{" "}
                {autoClicker.count}
              </p>
              <button onClick={() => purchaseAutoClicker(autoClicker)}>
                Buy ({autoClicker.cost} cookies)
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AutoClicker;