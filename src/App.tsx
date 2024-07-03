import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState({
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

  interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    dob: string;
    professional_title: string;
    summary: string;
  }

  const handleFormDataChange = (newFormData: FormData) => {
    setFormData(newFormData);
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
