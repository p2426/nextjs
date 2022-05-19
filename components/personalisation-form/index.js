import styles from '../../styles/PersonalisationForm.module.css';
import { useState } from 'react';
import Link from 'next/link';

const PersonalisationForm = () => {

    const [choices, setChoices] = useState({});

    const handleChange = (e) => {
        const newChoices = {};
        newChoices[e.target.name] = e.target.id;
        setChoices({
            ...choices,
            ...newChoices
        });
    };

    return (
        <div className={styles.container}>
            <h2>About you</h2>

            <p>Pick an animal</p>

            <div>
                <input type='radio' id='cat' name='animal' onChange={handleChange}/>
                <label htmlFor='cat'>Cat</label>
                <input type='radio' id='octopus' name='animal' onChange={handleChange}/>
                <label htmlFor='octopus'>Octopus</label>
                <input type='radio' id='pigeon' name='animal' onChange={handleChange}/>
                <label htmlFor='pigeon'>Pigeon</label>
            </div>

            <p>Best day?</p>

            <div>
                <input type='radio' id='monday' name='day' onChange={handleChange}/>
                <label htmlFor='monday'>Monday</label>
                <input type='radio' id='friday' name='day' onChange={handleChange}/>
                <label htmlFor='friday'>Friday</label>
                <input type='radio' id='yesterday' name='day' onChange={handleChange}/>
                <label htmlFor='yesterday'>Yesterday</label>
            </div>

            <Link href={{ pathname: '/profile', query: choices }}>See our newsletter!</Link>
        </div>
    );
}

export default PersonalisationForm;