import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class SellOrder extends React.Component {
    render () {
        return (
            <div className={css(styles.sellOrderBook)}>
            <div className={css(styles.sellOrderHeader)}>
                <div className={css(styles.priceHeader)}>
                    Price
                </div>
                <div className={css(styles.amountHeader)}>
                    Amount
                </div>
                <div className={css(styles.totalHeader)}>
                    Total
                </div>
            </div>
            <div className={css(styles.mainSellOrderCon)}>
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
            </div>
        </div>
        )
    }
}
const styles = StyleSheet.create({
    sellOrderBook: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '27vh',
        overflow: 'hidden',
        
    },
    sellOrderHeader: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        color: '#999999',
        fontSize: '1em',
        
    },
        priceHeader: {
            flexGrow: '1',
            
        },
        amountHeader: {
            flexGrow: '1',
        },
        totalHeader: {
            flexGrow: '1',
        },
        mainSellOrderCon: {
           
        },
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
})