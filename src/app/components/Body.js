import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Body extends React.Component {
    render () {
        return (
            <div className={css(styles.body)}>
                <div className={css(styles.chartAndHistoryCon)}>
                    <div className={css(styles.chartCon)}>
                        chart
                    </div>
                    <div className={css(styles.historyCon)}>
                        trade history
                    </div>
                </div>
                <div className={css(styles.orderBookCon)}>
                    <div className={css(styles.orderBookWrapper)}>
                        <div className={css(styles.orderBook)}>
                            <div className={css(styles.orderBookHeader)}>
                                header
                            </div>
                            <div className={css(styles.sellOrderBook)}>
                                sell orders
                            </div>
                            <div className={css(styles.currentPrice)}>
                                current price
                            </div>
                            <div className={css(styles.buyOrderBook)}>
                                buy order book
                            </div>
                        </div>
                        <div className={css(styles.orderBookHistory)}>
                            order history
                        </div>
                    </div>
                    <div className={css(styles.buyAndSellCon)}>
                        buy and sell container
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row'
    },
    chartAndHistoryCon: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        position: 'relative',
        width: '60vw',
        backgroundColor: 'rgb(38, 45, 51)'
    },
    chartCon: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        height: '70vh'
    },
    historyCon: {
        display: 'flex',
        border: '1px solid rgb(0, 0, 0)',
        height: '23vh'
    },
    orderBookCon: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        position: 'relative',
        width: '40vw',
        backgroundColor: 'rgb(38, 45, 51)',
        position: 'relative'
    },
    orderBookWrapper: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid rgb(0, 0, 0)',
        height: '60vh',
    },
    orderBook: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        width: '70%',
        position: 'relative'
    },
    orderBookHeader: {
        width: '100%',
        border: '1px solid rgb(0, 0, 0)',
    },
    sellOrderBook: {
        width: '100%',
        height: '27vh',
        border: '1px solid rgb(0, 0, 0)'
    },
    currentPrice: {
        display: 'flex',
        webkitBoxAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '4vh',
        border: '1px solid rgb(0, 0, 0)',
        alignItems: 'center'
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
        height: '33vh'
    }
    
});