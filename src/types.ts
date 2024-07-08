export interface PersonalInfoData {
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
  professional_title?: string;
  summary?: string;
}

export interface EducationalInfoData {
  university_institution: string;
  degree_program_course: string;
  start_date: string;
  end_date: string;
  percentage_cgpa: string;
}

export interface WorkExperienceData {
  company_name: string;
  job_title: string;
  job_description: string;
  work_start_date: string;
  work_end_date: string;
}

export interface FormData {
  personalInfo: PersonalInfoData;
  educationalInfo: EducationalInfoData;
  workExperience: WorkExperienceData;
}
