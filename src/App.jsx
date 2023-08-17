import { useState } from "react";
import "./App.scss";
import Booking from "./Booking";
import Features from "./Features";
import Home from "./Home";
import Stories from "./Stories";
import Tour from "./Tour";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "./firebase/firebase";
import { HiXMark, HiBars3 } from "react-icons/hi2";

function App() {
  const [open, setOpen] = useState(false);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };
  console.log(logGoogleUser);
  return (
    <>
      <nav className="navigation">
        {open === false && (
          <HiBars3 className="navBtn" onClick={() => setOpen(true)}></HiBars3>
        )}
        <div
          className="nav-background"
          style={open ? { transform: "scale(80)" } : {}}
        >
          {" "}
          &nbsp;
        </div>
        {open && (
          <>
            <HiXMark
              onClick={() => setOpen(false)}
              className="navBtn"
            ></HiXMark>
            <div className="nav">
              <ul className="nav-list">
                <div className="nav-item">
                  <span style={{ marginRight: "1rem" }}>01</span>About Natours
                </div>
                <div className="nav-item">
                  <span style={{ marginRight: "1rem" }}>02</span>Stories
                </div>
                <div className="nav-item">
                  <span style={{ marginRight: "1rem" }}>03</span>Popular Tours
                </div>
                <div className="nav-item">
                  <span style={{ marginRight: "1rem" }}>04</span>Book now
                </div>
              </ul>
            </div>
          </>
        )}
      </nav>
      <header className="header">
        <div className="logo_box">
          <img src="/logo-white.png" alt="Logo" className="logo"></img>
        </div>
        <div className="textBox">
          <h1 className="Heading">
            <span className="mainheading">Outdoors</span>
            <span className="subheading">is where life begins</span>
          </h1>
          <a className={"btn btnWhite btnAnimated"} href="#">
            Discover our tools
          </a>
        </div>
      </header>
      <main>
        <Home></Home>
        <Features></Features>
        <Tour></Tour>
        <Stories></Stories>
        <Booking></Booking>
        <Footer></Footer>
      </main>
      <div id="popup" className="popup">
        <div className="popup-content">
          <a href="#section-tours" className="popup-close">
            &times;
          </a>
          <div className="popup-left">
            <img src="/nat-8.jpg" alt="Tour Logo" className="popup-img" />
            <img src="/nat-9.jpg" alt="Tour Logo" className="popup-img" />
          </div>
          <div className="popup-right">
            <h2 className="primary-heading margin-bottom-medium">
              Start Booking Now
            </h2>
            <h3 className="margin-bottom-small">
              Important! Please read the terms and conditions First
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <span style={{ width: "45%", textAlign: "justify" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minima, hic. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nisi, nemo.
              </span>
              <span style={{ width: "45%", textAlign: "justify" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minima, hic. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nisi, nemo.
              </span>
            </div>
            <a
              href="#3"
              className="btn btnGreen"
              style={{ alignSelf: "flex-start" }}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img className="footer-img" src="/logo-green-2x.png" alt="logo"></img>
        <div className="footer-content">
          <div className="footer-content-links">
            <ul className="reful">
              <li className="ref">Company</li>
              <li className="ref">Contact Us </li>
              <li className="ref">Careers</li>
              <li className="ref">Terms</li>
            </ul>
          </div>
          <div className="copyright">Powered By QuickJick</div>
        </div>
      </div>
    </footer>
  );
}
