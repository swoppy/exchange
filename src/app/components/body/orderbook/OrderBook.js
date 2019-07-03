import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { OrderBookHeader } from './OrderBookHeader'
import { SellOrder } from './SellOrder'
import { CurrentPrice } from './CurrentPrice'

export class OrderBook extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookCon)}>
                <div className={css(styles.orderBookWrapper)}>
                    <div className={css(styles.orderBook)}>
                        <OrderBookHeader />
                        <SellOrder />
                        <CurrentPrice />
                        <div className={css(styles.buyOrderBook)}>
                        <div className={css(styles.mainBuyOrderCon)}>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                            <div className={css(styles.buyOrderRowCon)}>
                                <div className={css(styles.buyPrice)}>
                                    10000.93
                                </div>
                                <div className={css(styles.amount)}>
                                    90.909467
                                </div>
                                <div className={css(styles.total)}>
                                    13.0004456
                                </div>
                            </div>
                        </div>
                    </div>
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
    
    buyOrderRowCon: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right'
    },
    buyPrice: {
        flexGrow: '1',
        textAlign: 'left', 
        marginLeft: '6px',
        color: 'rgb(112, 168, 0)'
    },
    amount: {
        flexGrow: '1',
        color: 'rgb(212, 212, 212)'
    },
    total: {
        flexGrow: '1',
        color: 'rgb(212, 212, 212)',
        marginRight: '6px'
    },
    buyOrderBook: {
        height: '27vh',
        border: '1px solid rgb(0, 0, 0)'
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