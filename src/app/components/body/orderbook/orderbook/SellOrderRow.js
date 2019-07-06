import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class SellOrderRow extends React.Component {
    render () {
        return (
            <div className={css(styles.sellOrderRowCon)}>
                <div className={css(styles.sellPrice)}>
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
    sellOrderRowCon: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right',
        color: '',
        position:'relative'
    },
        sellPrice: {
            flexGrow: '1',
            textAlign: 'left', 
            marginLeft: '6px',
            color: 'rgb(255, 0, 122)'
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