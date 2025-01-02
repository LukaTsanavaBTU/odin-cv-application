export default function PracticalExperiece({practicalExperice, setPracticalExperice}) {
    console.log(practicalExperice);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setPracticalExperice([
            ...practicalExperice,
            {
                name: e.target.name.value,
                position: e.target.position.value,
                responsibilities: e.target.responsibilities.value,
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
            }
        ]);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Company Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Position Title:
                <input type="email" name="position"/>
            </label>
            <label>
                Responsibilities:
                <input type="tel" name="responsibilities"/>
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate"/>
            </label>
            <label>
                End Date:
                <input type="date" name="endDate"/>
            </label>
            <button>Next</button>
        </form>
    );
}