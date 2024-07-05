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
      <EducationalInfo />
      <WorkExperience />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
}

export default App;
