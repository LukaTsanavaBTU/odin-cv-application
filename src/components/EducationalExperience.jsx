export default function EducationalExperience({educationalExperience, setEducationalExperience}) {
    const listItems = educationalExperience.map(item => {
        return (
            <li key={item.id}>
                <form>
                    <label>
                        Organization Name:
                        <input 
                            type="text" name="name"
                            onChange={(e) => handleOnChange(e, item.id)}
                        />
                    </label>
                    <label>
                        Title of Study:
                        <input 
                            type="text" name="title"
                            onChange={(e) => handleOnChange(e, item.id)}
                        />
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
                    <button onClick={(e) => removeField(item.id)}>Remove</button>
                </form>
            </li>
        );
    });

    function handleOnChange(e, itemId) {
        e.preventDefault();
        const newEducationalExperience = [...educationalExperience];
        const index = newEducationalExperience.findIndex(item => item.id === itemId);
        newEducationalExperience[index] = {
            ...newEducationalExperience[index],
            [e.target.name]: e.target.value
        };
        setEducationalExperience(newEducationalExperience);
    }

    function removeField(itemId) {
        setEducationalExperience(
            educationalExperience.filter(item => item.id !== itemId)
        );
    }

    function addNewField() {
        setEducationalExperience([
            ...educationalExperience,
            {id: crypto.randomUUID()}
        ]);
    }

    return (
        <>
            <ul>
                {listItems}
            </ul>
            <button onClick={addNewField}>Add</button>  
        </>                                                      
    );
}