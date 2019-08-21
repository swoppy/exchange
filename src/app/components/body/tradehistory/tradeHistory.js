import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class TradeHistory extends React.Component {
    render () {
        return (
                <div className={css(styles.historyCon)}>
                    <div className={css(styles.navHeader)}>
                        <div className={css(styles.mainNav)}>
                            <button className={css(styles.button)}>Open Orders</button>
                            <button className={css(styles.button)}>Order History</button>
                            <button className={css(styles.button)}>Trade History</button>
                            <button className={css(styles.button)}>Funds</button>
                        </div>
                    </div>
                </div>
        )
    }
}
const styles = StyleSheet.create({
    historyCon: {
        display: 'flex',
        border: '1px solid rgb(0, 0, 0)',
        flex: '3',
    },
    navHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '0.5em',
        marginTop: '4px'
    },
    mainNav: {
        display: 'flex',
        height: '2em',
        margin: '0.3em 0px'
    },
    button: {
        backgroundColor: 'rgb(47, 56, 63)',
        color: 'rgb(245, 188, 0)',
        cursor: 'pointer',
        lineHeight: '100%',
        fontSize: '12px',
        border: '1px solid black',
        padding: '4px 5px',
        margin: '0px 2px',
        outline: '0px',
        ':focus' : {
            border: '1px solid rgb(240, 185, 11)',
        }
    }
});