import "./home.scss";

function Home() {
  return (
    <section className="section-about">
      <div className="text-center">
        <h2 className="primary-heading mar-bottom-large">
          Exciting tours for adventrous people
        </h2>
      </div>
      <div className="content">
        <div className="text-content">
          <div className="text">
            <h3 className="main mar-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              necessitatibus accusamus, quo fugiat impedit porro id temporibus
              nesciunt quas inventore.
            </p>
            <h3 className="main  mar-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              necessitatibus accusamus, quo fugiat impedit porro id temporibus
              nesciunt quas inventore.
            </p>
          </div>
          <a href="#1" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="imgs">
          <img
            src="/nat-1-large.jpg"
            alt="Photo"
            className="composition_photo composition_photo_p1"
          />
          <img
            src="/nat-2-large.jpg"
            alt="Photo"
            className="composition_photo composition_photo_p2"
          />
          <img
            src="/nat-3-large.jpg"
            alt="Photo"
            className="composition_photo composition_photo_p3"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
