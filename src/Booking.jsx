import { useState } from "react";
import "./booking.scss";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <section className="booking">
        <div className="bookingbox">
          <div className="book">
            <form onSubmit={() => {}} className="form">
              <div className="text-center">
                <h2 className="primary-heading1 margin-bottom-medium">
                  Start Booking now
                </h2>
                <div className="form-group">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Full Name"
                    className="form_input"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label className="form_label" htmlFor="name">
                    Full Name
                  </label>
                </div>
                <div className="form-group">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    className="form_input"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label className="form_label" htmlFor="name">
                    Email
                  </label>
                </div>
              </div>
            </form>
            <a
              style={{ alignSelf: "left", marginLeft: "3.9rem" }}
              href="#3"
              className="btn btnGreen"
            >
              Next Step &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
