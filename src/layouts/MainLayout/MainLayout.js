import React from 'react';
import styles from "./MainLayout.module.css";
import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";
import Main from "../../elements/Main/Main";

const MainLayout = () => {
    return (
        <div className={styles.global}>
            <header>
                <Header/>
            </header>
            <main>
                <Main/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;