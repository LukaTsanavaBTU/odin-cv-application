export default function PracticalExperiece({practicalExperience, setPracticalExperience}) {
    console.log(practicalExperience);

    const listItems = practicalExperience.map(item => {
        return (
            <li key={item.id}>
                <form>
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
                    <label>
                        Responsibilities:
                        <input 
                            type="tel" name="responsibilities"
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
        const newPracticalExperience = [...practicalExperience];
        const index = newPracticalExperience.findIndex(item => item.id === itemId);
        newPracticalExperience[index] = {
            ...newPracticalExperience[index],
            [e.target.name]: e.target.value,
        };
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