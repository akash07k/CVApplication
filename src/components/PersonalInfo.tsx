import React, { useEffect, useRef } from "react";
import Accordion from "./Accordion";
import { FormData } from "../types";
import "../styles/Accordion.css";

interface PersonalInfoProps {
  formData: FormData;
  onFormDataChange: (newFormData: Partial<FormData>) => void;
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
              { label: "First Name", type: "text", id: "first_name" },
              { label: "Last Name", type: "text", id: "last_name" },
              { label: "Email", type: "email", id: "email" },
              { label: "Phone", type: "tel", id: "phone" },
              { label: "Address", type: "text", id: "address" },
              { label: "City", type: "text", id: "city" },
              { label: "State", type: "text", id: "state" },
              { label: "Zip", type: "text", id: "zip" },
              { label: "Country", type: "text", id: "country" },
              { label: "Date of Birth", type: "date", id: "dob" },
              {
                label: "Professional Title",
                type: "text",
                id: "professional_title",
              },
              {
                label: "Summary about yourself",
                type: "textarea",
                id: "summary",
              },
            ].map(({ label, type, id }) => (
              <p key={id}>
                <label htmlFor={id}>
                  {label}
                  <span aria-hidden="true">*</span>:
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    required
                    value={formData[id as keyof FormData]}
                    onChange={handleInputValueChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={id}
                    required
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
