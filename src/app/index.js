import React from "react"
import { render } from "react-dom"
import { StyleSheet, css } from 'aphrodite/no-important'

import { Header } from "./components/head/Header"
import { Body } from "./components/body/Body"

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black'
    }
});

const App = () => {
    return (
        <div className={css(styles.main)}>
            <Header />
            <Body />
        </div>        
    );
}

render(<App />, document.getElementById('root'))



