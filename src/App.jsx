import { useState } from 'react'
import './App.css'
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
      <GeneralInformation 
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <EducationalExperience
        educationalExperience={educationalExperience}
        setEducationalExperience={setEducationalExperience}
      />
      <PracticalExperiece 
        practicalExperience={practicalExperice}
        setPracticalExperience={setPracticalExperice}
      />
      <CvView 
        generalInfo={generalInfo}
        educationalExperience={educationalExperience}
        practicalExperience={practicalExperice}
      />
    </>
  )
}
