import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { FormData } from "../types";
import "../styles/Accordion.css";

interface EducationalInfoProps {
  formData: FormData;
  onFormDataChange: (newFormData: Partial<FormData>) => void;
}

const EducationalInfo = ({
  formData,
  onFormDataChange,
}: EducationalInfoProps) => {
  const accordionRef = useRef<HTMLHeadingElement>(null);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    console.log(`ID: ${id}, Value: ${value}`);
    onFormDataChange({ [id]: value });
  };

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
            {[
              {
                label: "University/Institution",
                type: "text",
                id: "university_institution",
                required: true,
              },
              {
                label: "Degree/Program/Course",
                type: "text",
                id: "degree_program_course",
                required: true,
              },
              {
                label: "Start Date",
                type: "date",
                id: "start_date",
                required: true,
              },
              {
                label: "End Date",
                type: "date",
                id: "end_date",
                required: true,
              },
              {
                label: "Percentage/CGPA",
                type: "text",
                id: "percentage_cgpa",
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
                    value={formData[id as keyof FormData]}
                    onChange={handleInputValueChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={id}
                    required={required}
                    value={formData[id as keyof FormData]}
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
              aria-describedby="educational_info_accordion"
            >
              Save
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default EducationalInfo;
