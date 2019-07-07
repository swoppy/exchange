import React from "react"
import { render } from "react-dom"

import { Header } from "./components/head/Header"
import { Body } from "./components/body/Body"

const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>        
    );
}

render(<App />, document.getElementById('root'))



