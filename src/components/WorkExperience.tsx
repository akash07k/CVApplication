import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import "../styles/Accordion.css";

function WorkExperience() {
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
                    aria-controls="work_experience"
                    id="work_experience_accordion"
                >
                    <span className="accordion-title">Work Experience</span>
                </button>
            </h2>
            <div
                id="work_experience"
                className="accordion-panel"
                aria-labelledby="work_experience_accordion"
                hidden={true} // initially hidden
                role="region"
            >
                <div>
                    <fieldset>
                        <p>
                            <label htmlFor="company_name">
                                Company Name
                                <span aria-hidden="true">*</span>:
                            </label>
                            <input type="text" id="company_name" required />
                        </p>
                        <p>
                            <label htmlFor="job_title">
                                Job Title
                                <span aria-hidden="true">*</span>:
                            </label>
                            <input type="text" id="job_title" required />
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
                            <label htmlFor="job_description">
                                Job Description
                                <span aria-hidden="true">*</span>:
                            </label>
                            <textarea id="job_description" required></textarea>
                        </p>
                    </fieldset>
                    <p>
                        <button
                            type="button"
                            id="Save"
                            aria-describedby="work_experience_accordion"
                        >
                            Save
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default WorkExperience;
