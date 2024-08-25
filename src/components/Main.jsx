import React, { useState } from 'react';
import styles from '../styles/Main.module.css'
import { Link } from 'react-router-dom'

const FIELDS = {
    NAME: "name",
    PASSWORD: "password"
};

const Main = () => {
    const {NAME, PASSWORD} = FIELDS;

    const [values, setValues] = useState({[NAME]: "", [PASSWORD]: ""});

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((v) => !v);
    
        if (isDisabled) e.preventDefault();
      };
    

    console.log(values)

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
            <h1 className={styles.heading}>Join</h1>
            <form className={styles.form}>
            <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Username"
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={values[PASSWORD]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
            
            <Link className={styles.group}
            onClick={handleClick}
            to={`/chat?name=${values[NAME]}&room=${values[PASSWORD]}`}>
                <button type="submit" className={styles.button}>
                    Sign in
                </button>
            </Link>
            </form>
            </div>
            
        </div>
    );
};

export default Main;