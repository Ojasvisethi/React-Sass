import "./tours.scss";

function Tour() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="text-center">
        <h2 className="primary-heading mar-bottom-large">Most Popular tours</h2>
      </div>
      <div className="box">
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-1"> &nbsp;</div>
            <h4 className="heading">
              <span className="card-heading-span card-heading-span--1">
                The Sea Explorer
              </span>
            </h4>
            <div className="content">
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side--back card-side--back1">
            <div className="card-cta">
              <div className="card-cta-price-box">
                <p className="card-cta-price-only">Only</p>
                <p className="card-cta-price-value">$297</p>
              </div>
              <a href="#popup" className="btn btnWhite">
                Book Now!
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-2"> &nbsp;</div>
            <h4 className="heading">
              <span className="card-heading-span card-heading-span--2">
                The forest hiker
              </span>
            </h4>
            <div className="content">
              <ul>
                <li>7 day tours</li>
                <li>Up to 40 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: medium</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side--back card-side--back2">
            <div className="card-cta">
              <div className="card-cta-price-box">
                <p className="card-cta-price-only">Only</p>
                <p className="card-cta-price-value">$597</p>
              </div>
              <a href="#popup" className="btn btnWhite">
                Book Now!
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-3"> &nbsp;</div>
            <h4 className="heading">
              <span className="card-heading-span card-heading-span--3">
                The Snow Adventure
              </span>
            </h4>
            <div className="content">
              <ul>
                <li>10 day tours</li>
                <li>Up to 20 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: hard</li>
              </ul>
            </div>
          </div>
          <div className="card-side card-side--back card-side--back3">
            <div className="card-cta">
              <div className="card-cta-price-box">
                <p className="card-cta-price-only">Only</p>
                <p className="card-cta-price-value">$897</p>
              </div>
              <a href="#popup" className="btn btnWhite">
                Book Now!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }} className="text-center ">
        <a href="#3" className="btn btnGreen">
          Discover All Tours
        </a>
      </div>
    </section>
  );
}

export default Tour;
