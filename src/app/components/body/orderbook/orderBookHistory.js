import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class OrderBookHistory extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookHistory)}>
                <div className={css(styles.orderBookHistoryRow)}>
                    <div className={css(styles.priceInStableCoin)}>

                    </div>
                    <div className={css(styles.priceInCurrentCoin)}>

                    </div>
                    <div className={css(styles.timeOrderExecuted)}>
                        
                    </div>
                </div>
         </div>
        )
    }
}

const styles = StyleSheet.create({
    orderBookHistory: {
        border: '1px solid #111',
        width: '100%'
    }
});