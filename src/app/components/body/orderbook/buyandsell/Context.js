import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { Buy } from './Buy'
import { Sell } from './Sell'

export class Context extends React.Component {
    render(){
        return (
            <div className={css(styles.context)}>
                <Buy />
                <Sell />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    context: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        color: 'rgb(212, 212, 212)',
        backgroundColor: 'rgb(32, 38, 43)'
    }
});