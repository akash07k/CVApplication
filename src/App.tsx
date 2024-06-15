import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>Resume Builder</h1>
      <PersonalInfo />
<EducationalInfo />
<WorkExperience />
    </>
  )
}

export default App;