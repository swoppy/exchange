import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { OrderBook } from './orderbook/OrderBook'

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
        height: '94.5vh'
    },
        chartAndHistoryCon: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgb(0, 0, 0)',
            width: '58vw',
            backgroundColor: 'rgb(38, 45, 51)',
        },
        chartCon: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgb(0, 0, 0)',
            flex: '8'
        },
        historyCon: {
            display: 'flex',
            border: '1px solid rgb(0, 0, 0)',
            flex: '3'
        },
        
    
});