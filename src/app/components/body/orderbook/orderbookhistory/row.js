import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class Row extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookHistoryRow)}>
                <div className={css(styles.priceInStableCoin)}>
                    11,390
                </div>
                <div className={css(styles.priceInCurrentCoin)}>
                    0.00189873
                </div>
                <div className={css(styles.timeOrderExecuted)}>
                    17:20:11
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    orderBookHistoryRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%',
        height: '18px',
        padding: '2px 2px 2px 2px',
        
    },
        priceInStableCoin: {
            display: 'flex',
            flex: '0 1 1000px',
            fontSize: '1em'
        },
        priceInCurrentCoin: {
            display: 'flex',
            flex: '0 1 1000px',
            justifyContent: 'flex-end',
            fontSize: '1em'
        },
        timeOrderExecuted: {
            display: 'flex',
            flex: '0 1 1000px',
            justifyContent: 'flex-end',
            fontSize: '1em'
        }
})