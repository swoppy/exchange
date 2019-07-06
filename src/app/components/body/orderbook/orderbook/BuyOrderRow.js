import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class BuyOrderRow extends React.Component {
    render () {
        return (
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
        )
    }
}
const styles = StyleSheet.create({
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
});