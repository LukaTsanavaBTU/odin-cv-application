import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperiece from './components/PracticalExperience';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalExperience, setEducationalExperience] = useState([]);
  const [practicalExperice, setPracticalExperice] = useState([]);

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
        practicalExperice={practicalExperice}
        setPracticalExperice={setPracticalExperice}
      />
    </>
  )
}
