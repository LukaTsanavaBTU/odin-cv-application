import '../styles/CvView.css';
import phoneImg from "../assets/phone.svg";
import emailImg from "../assets/email.svg";

export default function CvView({generalInfo, educationalExperience, practicalExperience}) {
    return (
        <div class="cv-wrapper">
            <h1>{generalInfo.name}</h1>
            <div class="contact">
            {(generalInfo.email && generalInfo.email !== "") &&
                <div>
                    <img src={emailImg} alt="" class="icon"/>
                    {generalInfo.email}
                </div>
            }
            {(generalInfo.phone && generalInfo.phone !== "") && 
                <div>
                    <img src={phoneImg} alt="" class="icon"/>
                    {generalInfo.phone}
                </div>
            }   
            </div>
            <p>{generalInfo.summary}</p>
            <div class="line"></div>
            <h2>Education</h2>
            <div class="education-wrapper">
                {educationalExperience.map((education) => {
                    return (
                        <div key={education.id}>
                            <h3>
                                {education.name}
                                {(education.name && education.title) && " | "}
                                <span class="title">{education.title}</span>
                            </h3>
                            <p class="date">
                                {education.startDate ? "From: " : null}
                                {education.startDate} 
                                {education.endDate ? " To: " : null}
                                {education.endDate}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div class="line"></div>
            <h2>Experience</h2>
            <div class="experience-wrapper">
                {practicalExperience.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h3>
                                {experience.name}
                                {(experience.name && experience.position) && " | "}
                                <span class="position">{experience.position}</span>
                            </h3>
                            <p class="date">
                                {experience.startDate ? "From: " : null}
                                {experience.startDate} 
                                {experience.endDate ? " To: " : null}
                                {experience.endDate}
                            </p>
                            <ul class="responsibilities">
                                {experience.responsibilities.map((responsibility) => {
                                    return (
                                        responsibility.name &&
                                        <li key={responsibility.id}>
                                            {responsibility.name}
                                        </li>
                                    );
                                })}
                            </ul>
                            
                        </div>
                    );
                })}
            </div>
        </div>    
    );
}