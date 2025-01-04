export default function GeneralInformation({generalInfo, setGeneralInfo}) {
    const links = generalInfo.links;

    const linksList = links.map((link, index) => {
        return (
            <li key={link.id}>
                <label>
                    Website: 
                    <select 
                        name="website" className="website"
                        defaultValue="github"
                        onChange={(e) => handleOnLinkChange(e, link.id)}
                    >
                        <option value="github">Github</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="facebook">Facebook</option>
                        <option value="twitter">Twitter</option>
                        <option value="website">other</option>
                    </select>
                </label>
                <label>
                    Link: 
                    <input 
                        type="text" name="link"
                        onChange={(e) => handleOnLinkChange(e, link.id)}    
                    />
                </label>
                {index !== 0 && <button onClick={(e) => removeLink(e, link.id)}>X</button>}
            </li>
        ); 
    });

    function handleOnChange(e) {
        e.preventDefault();
        setGeneralInfo({
            ...generalInfo,
            [e.target.name]: e.target.value
        });
    }

    function handleOnLinkChange(e, linkId) {
        e.preventDefault();
        const newLinks = [...links];
        const targetIndex = newLinks.findIndex((link) => link.id === linkId);
        newLinks[targetIndex][e.target.name] = e.target.value;
        if (targetIndex === links.length - 1 && e.target.name === "link") {
            newLinks.push({id: crypto.randomUUID(), website: "github"});
        }
        setGeneralInfo({
            ...generalInfo,
            links: newLinks,
        });
    }

    function removeLink(e, linkId) {
        e.preventDefault();
        setGeneralInfo({
            ...generalInfo,
            links: links.filter(link => link.id !== linkId),
    });
    }

    return (
        <form className="general-form">
            <label>
                Name:
                <input 
                    type="text" name="name"
                    onChange={handleOnChange}
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" name="email"
                    onChange={handleOnChange}
                />
            </label>
            <label>
                Phone:
                <input 
                    type="tel" name="phone"
                    onChange={handleOnChange}
                />
            </label>
            <div  className="link-inputs-wrapper">
                <h3>Website Links</h3>
                <ul>
                    {linksList}
                </ul>
            </div>
            <label className="summary-input">
                Summary:
                <textarea 
                    name="summary"
                    onChange={handleOnChange}
                />
            </label>
        </form>
    );
}