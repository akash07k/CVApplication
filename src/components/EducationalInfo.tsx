import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import "../styles/Accordion.css";

function EducationalInfo() {
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
          aria-controls="educational_info"
          id="educational_info_accordion"
        >
          <span className="accordion-title">Educational Information</span>
        </button>
      </h2>
      <div
        id="educational_info"
        className="accordion-panel"
        aria-labelledby="educational_info_accordion"
        hidden={true} // initially hidden
        role="region"
      >
        <div>
          <fieldset>
            <p>
              <label htmlFor="university_institution">
                University/Institution/Organization
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="university_institution" required />
            </p>
            <p>
              <label htmlFor="degree_program_course">
                Degree/Program/Course
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="degree_program_course" required />
            </p>
            <p>
              <label htmlFor="start_date">
                Start Date
                <span aria-hidden="true">*</span>:
              </label>
              <input type="date" id="start_date" required />
            </p>
            <p>
              <label htmlFor="end_date">
                End Date
                <span aria-hidden="true">*</span>:
              </label>
              <input type="date" id="end_date" required />
            </p>
            <p>
              <label htmlFor="percentage_cgpa">
                Percentage/CGPA
                <span aria-hidden="true">*</span>:
              </label>
              <input type="text" id="percentage_cgpa" required />
            </p>
          </fieldset>
          <p>
            <button
              type="button"
              id="Save"
              aria-describedby="educational_info_accordion"
            >
              Save
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default EducationalInfo;
