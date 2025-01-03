export default function GeneralInformation({generalInfo, setGeneralInfo}) {
    function handleOnChange(e) {
        e.preventDefault();
        setGeneralInfo({
            ...generalInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form class="general-form">
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
            <label class="summary-input">
                Summary:
                <textarea 
                    name="summary"
                    onChange={handleOnChange}
                />
            </label>
        </form>
    );
}