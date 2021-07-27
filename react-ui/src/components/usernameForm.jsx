import { useState } from "react";

const UsernameForm = () => {

    const [username, setUsername] = useState('Paul');

    const handleChange = e => {
        setUsername(e.target.value);
    };

    return <input onChange={handleChange} value={username} />;

};

export default UsernameForm;