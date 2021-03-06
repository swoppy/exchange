import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { OrderBook } from './orderbook/orderbook/OrderBook'
import  { TradeHistory } from './tradehistory/tradeHistory'

export class Body extends React.Component {
    render () {
        return (
            <div className={css(styles.body)}>
                <div className={css(styles.chartAndHistoryCon)}>
                    <div className={css(styles.chartCon)}>
                        chart
                    </div>
                    <TradeHistory />
                </div>
                <OrderBook />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1em',
        flexWrap: 'nowrap',
        width: '100%',
        height: 'auto'
    },
        chartAndHistoryCon: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgb(0, 0, 0)',
            width: '67vw',
            backgroundColor: 'rgb(38, 45, 51)',
        },
        chartCon: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgb(0, 0, 0)',
            flex: '6'
        },
        
        
    
});