import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { PersonalInfoData } from "../types";

import "../styles/Accordion.css";

interface PersonalInfoProps {
  formData: PersonalInfoData;
  onFormDataChange: (newFormData: Partial<PersonalInfoData>) => void;
}

const PersonalInfo = ({ formData, onFormDataChange }: PersonalInfoProps) => {
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
        hidden={true}
        role="region"
      >
        <div>
          <fieldset>
            {[
              {
                label: "First Name",
                type: "text",
                id: "first_name",
                required: true,
              },
              {
                label: "Last Name",
                type: "text",
                id: "last_name",
                required: true,
              },
              { label: "Email", type: "email", id: "email", required: true },
              { label: "Phone", type: "tel", id: "phone", required: true },
              { label: "Address", type: "text", id: "address", required: true },
              { label: "City", type: "text", id: "city", required: true },
              { label: "State", type: "text", id: "state", required: true },
              { label: "Zip", type: "text", id: "zip", required: true },
              { label: "Country", type: "text", id: "country", required: true },
              {
                label: "Date of Birth",
                type: "date",
                id: "dob",
                required: true,
              },
              {
                label: "Professional Title",
                type: "text",
                id: "professional_title",
                required: false,
              },
              {
                label: "Summary about yourself",
                type: "textarea",
                id: "summary",
                required: false,
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
                    value={formData[id as keyof PersonalInfoData]}
                    onChange={handleInputValueChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={id}
                    required={required}
                    value={formData[id as keyof PersonalInfoData]}
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
              aria-describedby="personal_info_accordion"
            >
              Save
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
