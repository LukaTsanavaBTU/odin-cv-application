import { capitalize, strExists } from '../helpers';
import '../styles/CvView.css';
import phoneImg from "../assets/phone.svg";
import emailImg from "../assets/email.svg";
import facebookImg from "../assets/facebook.svg";
import githubImg from "../assets/github.svg";
import linkedinImg from "../assets/linkedin.svg";
import twitterImg from "../assets/twitter.svg";
import websiteImg from "../assets/linkcircle.svg";

export default function CvView({generalInfo, educationalExperience, practicalExperience}) {
    return (
        <div className="cv-wrapper">
            <h1>{generalInfo.name}</h1>
            <div className="contact">
            {(generalInfo.email && generalInfo.email !== "") &&
                <div>
                    <img src={emailImg} alt="" className="icon"/>
                    {generalInfo.email}
                </div>
            }
            {(generalInfo.phone && generalInfo.phone !== "") && 
                <div>
                    <img src={phoneImg} alt="" className="icon"/>
                    {generalInfo.phone}
                </div>
            }
            {generalInfo.links.map(link => {
                if (strExists(link.link)) {
                    let icon;
                    switch (link.website) {
                        case "github":
                            icon = githubImg;
                            break;
                        case "linkedin":
                            icon = linkedinImg;
                            break;
                        case "twitter":
                            icon = twitterImg;
                            break;
                        case "facebook":
                            icon = facebookImg;
                            break;
                        default:
                            icon = websiteImg;
                            break;
                    }
                    return (
                        <a href={link.link} key={link.id}>
                            <div>
                                <img src={icon} alt=""/>
                                {capitalize(link.website)}
                            </div>
                        </a>
                    );
                } 
            })}
            </div>
            <p>{generalInfo.summary}</p>
            {educationalExperience.length > 0 &&
                <>
                <h2>Education</h2>
                <div className="line"></div>
                </>
            }
            <div className="education-wrapper">
                {educationalExperience.map((education) => {
                    return (
                        <div key={education.id}>
                            <h3>
                                {education.name}
                                {(education.name && education.title) && " | "}
                                <span className="title">{education.title}</span>
                            </h3>
                            <p className="date">
                                {education.startDate ? "From: " : null}
                                {education.startDate} 
                                {education.endDate ? " To: " : null}
                                {education.endDate}
                            </p>
                        </div>
                    );
                })}
            </div>
            {practicalExperience.length > 0 &&
                <>
                    <h2>Experience</h2>
                    <div className="line"></div>
                </>
            }
            <div className="experience-wrapper">
                {practicalExperience.map((experience) => {
                    return (
                        <div key={experience.id}>
                            <h3>
                                {experience.name}
                                {(experience.name && experience.position) && " | "}
                                <span className="position">{experience.position}</span>
                            </h3>
                            <p className="date">
                                {experience.startDate ? "From: " : null}
                                {experience.startDate} 
                                {experience.endDate ? " To: " : null}
                                {experience.endDate}
                            </p>
                            <ul className="responsibilities">
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
