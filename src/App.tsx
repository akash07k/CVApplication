import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";
import { FormData } from "./types";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "Akash",
    last_name: "Kakkar",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    dob: "",
    professional_title: "",
    summary: "",
    university_institution: "",
    degree_program_course: "",
    start_date: "",
    end_date: "",
    percentage_cgpa: "",
    company_name: "",
    job_title: "",
    job_description: "",
    work_start_date: "",
    work_end_date: "",
  });

  const handleFormDataChange = (newFormData: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newFormData,
    }));
  };

  return (
    <>
      <h1>Resume Builder</h1>
      <PersonalInfo
        formData={formData}
        onFormDataChange={handleFormDataChange}
      />
      <EducationalInfo
        formData={formData}
        onFormDataChange={handleFormDataChange}
      />
      <WorkExperience
        formData={formData}
        onFormDataChange={handleFormDataChange}
      />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
}

export default App;
