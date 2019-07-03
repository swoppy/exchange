import React from "react"
import { render } from "react-dom"

import { Header } from "./components/head/Header"
import { Body } from "./components/Body"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
            
        );
    }
}

render(<App />, document.getElementById('root'))



