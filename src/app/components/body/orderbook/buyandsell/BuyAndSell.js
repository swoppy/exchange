import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class BuyAndSell extends React.Component {
    render(){
        return (
            <div className={css(styles.buyAndSellCon)}>
                buy and sell container
            </div>
        )
    }
}

const styles = StyleSheet.create({
    buyAndSellCon: {
        display: 'flex',
        border: '1px solid rgb(0, 0, 0)',
        height: '36vh'
    }
});