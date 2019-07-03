import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { OrderBookHeader } from './OrderBookHeader'
import { SellOrder } from './SellOrder'
import { CurrentPrice } from './CurrentPrice'
import { BuyOrder } from './BuyOrder'

export class OrderBook extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookCon)}>
                <div className={css(styles.orderBookWrapper)}>
                    <div className={css(styles.orderBook)}>
                        <OrderBookHeader />
                        <SellOrder />
                        <CurrentPrice />
                        <BuyOrder />
                </div>
                <div className={css(styles.orderBookHistory)}>
                   
                </div>
            </div>
            <div className={css(styles.buyAndSellCon)}>
                buy and sell container
            </div>
        </div>
        )
    }
}
const styles = StyleSheet.create({
    orderBookCon: {
        display: 'flex',
        flexDirection: 'column',
        //border: '1px solid rgb(0, 0, 0)',
        position: 'relative',
        width: '42vw',
        backgroundColor: 'rgb(38, 45, 51)',
        position: 'relative',
        fontWeight: '300',
        height: 'auto'
    },
    orderBookWrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: '60vh',
    },
    orderBook: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        width: '42vw',
        position: 'relative'
    },
    
    orderBookHistory: {
        border: '1px solid #111',
        width: '100%'
    },
    buyAndSellCon: {
        display: 'flex',
        border: '1px solid rgb(0, 0, 0)',
        height: '36vh'
    }
});