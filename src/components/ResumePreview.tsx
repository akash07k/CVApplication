import {
  FormData,
  PersonalInfoData,
  EducationalInfoData,
  WorkExperienceData,
} from "../types";
import "../styles/ResumePreview.css";

interface ResumePreviewProps {
  resumeData: FormData;
}

const renderSection = (
  sectionTitle: string,
  sectionData: PersonalInfoData | EducationalInfoData | WorkExperienceData
) => (
  <section aria-label={sectionTitle}>
    <h3>{sectionTitle}</h3>
    {Object.entries(sectionData).map(([key, value]) => (
      <p key={key}>
        <strong>
          {key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
          :
        </strong>{" "}
        {value}
      </p>
    ))}
  </section>
);

const ResumePreview = ({ resumeData }: ResumePreviewProps) => {
  const { personalInfo, educationalInfo, workExperience } = resumeData;

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      {renderSection("Personal Information", personalInfo)}
      {renderSection("Educational Information", educationalInfo)}
      {renderSection("Work Experience", workExperience)}
    </div>
  );
};

export default ResumePreview;
