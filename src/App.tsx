import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";
import ResumePreview from "./components/ResumePreview";
import ExportResume from "./components/ExportResume";
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
      email: "akash@example.com",
      phone: "1234567890",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "12345",
      country: "USA",
      dob: "01/01/1990",
      professional_title: "Software Engineer",
      summary:
        "Experienced software engineer with a passion for web development.",
    },
    educationalInfo: {
      university_institution: "University of XYZ",
      degree_program_course: "Bachelor of Science in Computer Science",
      start_date: "09/2010",
      end_date: "05/2014",
      percentage_cgpa: "3.8",
    },
    workExperience: {
      company_name: "ABC Company",
      job_title: "Software Developer",
      job_description:
        "Developed and maintained web applications using React and Node.js.",
      work_start_date: "06/2014",
      work_end_date: "present",
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
      <ResumePreview resumeData={formData} />
      <ExportResume resumeData={formData} />
    </>
  );
}

export default App;
