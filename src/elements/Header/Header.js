import React from 'react';
import styles from "./Header.module.css";
import {privateRoutes} from "../../Routes";
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div className={styles.main}>
            {
                privateRoutes.map((value, index) => <Link to={value.path} className={styles.link} key={index}>
                    {value.name}
                </Link>)
            }
        </div>
    );
};

export default Header;