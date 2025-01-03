export default function CvView({generalInfo, educationalExperience, practicalExperience}) {
    return (
        <div class="cv-wrapper">
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phone}</p>
            <p>{generalInfo.summary}</p>
            <h2>Education</h2>
                {educationalExperience.map((education) => {
                    return (
                        <div key={education.id}>
                            <h3>
                                {education.name}
                                {(education.name && education.title) && " | "}
                                {education.title}
                            </h3>
                            <p>
                                {education.startDate ? "From: " : null}
                                {education.startDate} 
                                {education.endDate ? " To: " : null}
                                {education.endDate}
                            </p>
                        </div>
                    );
                })}
            <h2>Experience</h2>
                {practicalExperience.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h3>{experience.name}</h3>
                            <p>{experience.position}</p>
                            <ul>
                                {experience.responsibilities.map((responsibility) => {
                                    return (
                                        responsibility.name &&
                                        <li key={responsibility.id}>
                                            {responsibility.name}
                                        </li>
                                    );
                                })}
                            </ul>
                            <p>
                                {experience.startDate ? "From: " : null}
                                {experience.startDate} 
                                {experience.endDate ? " To: " : null}
                                {experience.endDate}
                            </p>
                        </div>
                    );
                })}
        </div>    
    );
}