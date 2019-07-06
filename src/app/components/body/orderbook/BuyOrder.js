import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'


export class BuyOrder extends React.Component {
    render () {
        return (
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
        )
    }
}

const styles = StyleSheet.create({
    buyOrderBook: {
        height: '27vh',
        
        overflow: 'hidden'
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
});