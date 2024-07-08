import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";
import {
  EducationalInfoData,
  FormData,
  PersonalInfoData,
  WorkExperienceData,
} from "./types";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
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
    },
    educationalInfo: {
      university_institution: "",
      degree_program_course: "",
      start_date: "",
      end_date: "",
      percentage_cgpa: "",
    },
    workExperience: {
      company_name: "",
      job_title: "",
      job_description: "",
      work_start_date: "",
      work_end_date: "",
    },
  });

  const handleFormDataChange = (
    section: keyof FormData,
    newFormData: Partial<
      PersonalInfoData | EducationalInfoData | WorkExperienceData
    >
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        ...newFormData,
      },
    }));
  };

  return (
    <>
      <h1>Resume Builder</h1>
      <PersonalInfo
        formData={formData.personalInfo}
        onFormDataChange={(newData) =>
          handleFormDataChange("personalInfo", newData)
        }
      />
      <EducationalInfo
        formData={formData.educationalInfo}
        onFormDataChange={(newData) =>
          handleFormDataChange("educationalInfo", newData)
        }
      />
      <WorkExperience
        formData={formData.workExperience}
        onFormDataChange={(newData) =>
          handleFormDataChange("workExperience", newData)
        }
      />
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
}

export default App;
