export default function GeneralInformation({generalInfo, setGeneralInfo}) {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setGeneralInfo({
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        });
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <label>
                Email:
                <input type="email" name="email"/>
            </label>
            <label>
                Phone:
                <input type="tel" name="phone"/>
            </label>
            <button>Next</button>
        </form>
    );
}