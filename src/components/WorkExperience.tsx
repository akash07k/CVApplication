import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { WorkExperienceData } from "../types";
import "../styles/Accordion.css";

interface WorkExperienceProps {
  formData: WorkExperienceData;
  onFormDataChange: (newFormData: Partial<WorkExperienceData>) => void;
}

const WorkExperience = ({
  formData,
  onFormDataChange,
}: WorkExperienceProps) => {
  const accordionRef = useRef<HTMLHeadingElement>(null);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    console.log(`ID: ${id}, Value: ${value}`);
    onFormDataChange({ [id]: value });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            {[
              {
                label: "Company Name",
                type: "text",
                id: "company_name",
                required: true,
              },
              {
                label: "Job Title",
                type: "text",
                id: "job_title",
                required: true,
              },
              {
                label: "Job Description",
                type: "textarea",
                id: "job_description",
                required: true,
              },
              {
                label: "Start Date",
                type: "date",
                id: "work_start_date",
                required: true,
              },
              {
                label: "End Date",
                type: "date",
                id: "work_end_date",
                required: true,
              },
            ].map(({ label, type, id, required }) => (
              <p key={id}>
                <label htmlFor={id}>
                  {label}
                  <span aria-hidden="true">*</span>:
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    required={required}
                    value={formData[id as keyof WorkExperienceData]}
                    onChange={handleInputValueChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={id}
                    required={required}
                    value={formData[id as keyof WorkExperienceData]}
                    onChange={handleInputValueChange}
                  />
                )}
              </p>
            ))}
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
};

export default WorkExperience;
