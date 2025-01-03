export default function PracticalExperiece({practicalExperience, setPracticalExperience}) {
    const listItems = practicalExperience.map(item => {
        const responsibilitiesList = item.responsibilities.map((responsibility, index) => {
            return (
                <li key={responsibility.id}>
                    <input 
                        type="tel" name="responsibility"
                        onChange={(e) => handleOnResponsibilityChange(e, item.id, responsibility.id)}
                    />
                    {index !== 0 &&
                        <button onClick={(e) => removeResponsibility(e, item.id, responsibility.id)}>X</button>
                    }
                </li>
            );
        });
        return (
            <li key={item.id}>
                <form class="practical-form">
                    <label>
                        Company Name:
                        <input 
                            type="text" name="name" 
                            onChange={(e) => handleOnChange(e, item.id)}
                        />
                    </label>
                    <label>
                        Position Title:
                        <input 
                            type="email" name="position"
                            onChange={(e) => handleOnChange(e, item.id)}    
                        />
                    </label>
                    <label class="responsibilities-form">
                        Responsibilities:
                        <ul>
                            {responsibilitiesList}
                        </ul>
                    </label>
                    <label>
                        Start Date:
                        <input 
                            type="date" name="startDate"
                            onChange={(e) => handleOnChange(e, item.id)}
                        />
                    </label>
                    <label>
                        End Date:
                        <input 
                            type="date" name="endDate"
                            onChange={(e) => handleOnChange(e, item.id)}
                        />
                    </label>
                    <button class="remove-button" onClick={(e) => removeField(item.id)}>Remove</button>
                </form>
            </li>
        );
    });

    function handleOnChange(e, itemId) {
        e.preventDefault();
        const newPracticalExperience = [...practicalExperience];
        const index = newPracticalExperience.findIndex(item => item.id === itemId);
        newPracticalExperience[index] = {
            ...newPracticalExperience[index],
            [e.target.name]: e.target.value,
        };
        setPracticalExperience(newPracticalExperience);
    }

    function handleOnResponsibilityChange(e, itemId, responsibilityId) {
        e.preventDefault();
        const newPracticalExperience = [...practicalExperience];
        const experienceIndex = newPracticalExperience.findIndex(item => item.id === itemId);
        const responsibilityIndex = newPracticalExperience[experienceIndex].responsibilities
                                    .findIndex(item => item.id === responsibilityId);
        newPracticalExperience[experienceIndex].responsibilities[responsibilityIndex] = {
            ...newPracticalExperience[experienceIndex].responsibilities[responsibilityIndex],
            name: e.target.value,
        };
        if (responsibilityIndex === newPracticalExperience[experienceIndex].responsibilities.length - 1) {
            newPracticalExperience[experienceIndex].responsibilities.push({
                id: crypto.randomUUID(),
            });
        }
        setPracticalExperience(newPracticalExperience);
    }

    function removeResponsibility(e, itemId, responsibilityId) {
        e.preventDefault();
        const newPracticalExperience = [...practicalExperience];
        const experienceIndex = newPracticalExperience.findIndex(item => item.id === itemId);
        newPracticalExperience[experienceIndex].responsibilities = 
                            newPracticalExperience[experienceIndex].responsibilities
                            .filter(responsibility => responsibility.id !== responsibilityId); 
        setPracticalExperience(newPracticalExperience);
    }

    function removeField(itemId) {
        setPracticalExperience(
            practicalExperience.filter(item => item.id !== itemId)
        );
    }

    function addNewField() {
        setPracticalExperience([
            ...practicalExperience,
            {
                id: crypto.randomUUID(),
                responsibilities: [{
                    id: crypto.randomUUID(),
                }]
            }
        ]);
    }

    return (
        <>
            <ul>
                {listItems}
            </ul>
            <button class="add-button" onClick={addNewField}>Add</button>  
        </>                                                      
    );
}