import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import "../styles/Accordion.css";

function PersonalInfo() {
  const accordionRef = useRef(null);

  useEffect(() => {
    const accordion = new Accordion(accordionRef.current!);

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <>
      <h2 ref={accordionRef}>
        <button
          type="button"
          aria-expanded="false"
          className="accordion-trigger"
          aria-controls="personal_info"
          id="personal_info_accordion"
        >
          <span className="accordion-title">Personal Information</span>
        </button>
      </h2>
      <div
        id="personal_info"
        className="accordion-panel"
        aria-labelledby="personal_info_accordion"
        hidden={true} // initially hidden
        role="region"
      >
        <div>
          <fieldset>
            <p>
              <label htmlFor="first_name">
                First Name
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="first_name" required />
            </p>
            <p>
              <label htmlFor="last_name">
                Last Name
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="last_name" required />
            </p>
            <p>
              <label htmlFor="email">
                Email
                <span aria-hidden="true">*</span>:
              </label>
              <input type="email" id="email" required />
            </p>
            <p>
              <label htmlFor="phone">
                Phone
                <span aria-hidden="true">*</span>:
              </label>
              <input type="tel" id="phone" required />
            </p>
            <p>
              <label htmlFor="address">
                Address
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="address" required />
            </p>
            <p>
              <label htmlFor="city">
                City
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="city" required />
            </p>
            <p>
              <label htmlFor="state">
                State
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="state" required />
            </p>
            <p>
              <label htmlFor="zip">
                Zip
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="zip" required />
            </p>
            <p>
              <label htmlFor="country">
                Country
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="country" required />
            </p>
            <p>
              <label htmlFor="dob">
                Date of Birth
                <span aria-hidden="true">*</span>:
              </label>
              <input type="date" id="dob" required />
            </p>
            <p>
              <label htmlFor="professional_title">
                Professional Title
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="professional_title" required />
            </p>
            <p>
              <label htmlFor="summary">
                Summary about yourself
                <span aria-hidden="true">*</span>:
              </label>
              <textarea id="summary" required></textarea>
            </p>
          </fieldset>
          <p>
            <button
              type="button"
              id="Save"
              aria-describedby="personal_info_accordion"
            >
              Save
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
