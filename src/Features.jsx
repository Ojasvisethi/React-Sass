import "./features.scss";
import { FaCompass, FaGlobe, FaHeart, FaMap } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <div className="feature-box">
        <FaGlobe className="icon"></FaGlobe>
        <h3 className="feature_text mar-bottom-small">Explore the world</h3>
        <p className="feature_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis, aperiam doloremque soluta saepe quam quisquam.
        </p>
      </div>
      <div className="feature-box">
        <FaCompass className="icon"></FaCompass>
        <h3 className="feature_text mar-bottom-small">Meet Nature</h3>
        <p className="feature_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis, aperiam doloremque soluta saepe quam quisquam.
        </p>
      </div>
      <div className="feature-box">
        <FaMap className="icon"></FaMap>
        <h3 className="feature_text mar-bottom-small">Find your way</h3>
        <p className="feature_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis, aperiam doloremque soluta saepe quam quisquam.
        </p>
      </div>
      <div className="feature-box">
        <FaHeart className="icon"></FaHeart>
        <h3 className="feature_text mar-bottom-small">Explore the world</h3>
        <p className="feature_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis, aperiam doloremque soluta saepe quam quisquam.
        </p>
      </div>
    </section>
  );
}

export default Features;
