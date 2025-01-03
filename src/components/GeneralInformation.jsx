export default function GeneralInformation({generalInfo, setGeneralInfo}) {
    function handleOnChange(e) {
        e.preventDefault();
        setGeneralInfo({
            ...generalInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
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
            <label>
                Summary:
                <textarea 
                    name="summary"
                    onChange={handleOnChange}
                />
            </label>
        </form>
    );
}