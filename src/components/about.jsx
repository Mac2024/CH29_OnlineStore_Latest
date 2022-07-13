import { useState } from "react";

const About = () => {
    const [visible, setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <h1>About Me</h1>
            <h3>Mario McGrady</h3>

            { visible ? <h4>mcgradymario84@gmail.com</h4> : "Click on the button below" }
            <button onClick={changeVisibility}>Show info</button>
        
            <br />
            <br />
            <br />
        </div>
    );
};
export default About;