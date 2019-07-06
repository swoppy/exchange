import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { BuyOrderRow } from './BuyOrderRow'

export class BuyOrder extends React.Component {
    render () {
        return (
            <div className={css(styles.buyOrderBook)}>
                <div className={css(styles.mainBuyOrderCon)}>
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    buyOrderBook: {
        height: '27vh',
        overflow: 'hidden',
    },

});