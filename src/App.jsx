import { useState } from 'react';
import './reset.css';
import './App.css';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperiece from './components/PracticalExperience';
import CvView from './components/CvView';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalExperience, setEducationalExperience] = useState([{id: crypto.randomUUID()}]);
  const [practicalExperice, setPracticalExperice] = useState([{
    id: crypto.randomUUID(), 
    responsibilities: [{
      id: crypto.randomUUID(),
    }]
  }]);
  const info = {generalInfo, educationalExperience, practicalExperice};

  return (
    <>
      <div class="input-wrapper">
        <h2>General Information</h2>
        <GeneralInformation 
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <h2>Education</h2>
        <EducationalExperience
          educationalExperience={educationalExperience}
          setEducationalExperience={setEducationalExperience}
        />
        <h2>Work Experience</h2>
        <PracticalExperiece 
          practicalExperience={practicalExperice}
          setPracticalExperience={setPracticalExperice}
        />
      </div>
      
      <CvView 
        generalInfo={generalInfo}
        educationalExperience={educationalExperience}
        practicalExperience={practicalExperice}
      />
    </>
  )
}
