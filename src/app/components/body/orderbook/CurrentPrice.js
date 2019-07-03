import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class CurrentPrice extends React.Component {
    render () {
        return (
            <div className={css(styles.currentPrice)}>
                10000.93225
            </div>
        )
    }
}
const styles = StyleSheet.create({
    currentPrice: {
        display: 'flex',
        webkitBoxAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '4vh',
        border: '1px solid rgb(0, 0, 0)',
        alignItems: 'center'
    },
});