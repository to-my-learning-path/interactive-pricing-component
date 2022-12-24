import { useState } from "react";
import "./App.css";

function App() {
  return (
    <main>
      <article>
        <div className="article__header">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="article__body">
          <div className="article__section">
            <div>
              <p>Pageviews</p>
              <p>
                <span>$</span> /month
              </p>
            </div>
            {/* <div> Slider </div> */}
            <div>
              <p>Monthly Billing</p>
              <p></p>
              <p>
                Yearly Billing <span>25% discount</span>
              </p>
            </div>
          </div>
          <div className="article__section">
            <div>
              <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </div>
            <div>
              <button>Start my trial</button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
