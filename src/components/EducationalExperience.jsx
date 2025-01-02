export default function EducationalExperience({educationalExperience, setEducationalExperience}) {
    console.log(educationalExperience);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setEducationalExperience([
            ...educationalExperience,
            {
                name: e.target.name.value,
                title: e.target.title.value,
                date: e.target.date.value,
            }
        ]);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Organization Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Title of Study:
                <input type="text" name="title"/>
            </label>
            <label>
                Date of Study:
                <input type="date" name="date"/>
            </label>
            <button>Next</button>
        </form>
    );
}