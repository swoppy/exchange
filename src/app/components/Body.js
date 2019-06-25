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
                            <div className={css(styles.currentPrice)}>
                                10000.93225
                            </div>
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
        flexDirection: 'row',
        position: 'relative',
        fontFace: 'Roboto',
        fontSize: '1em',
    },
    chartAndHistoryCon: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        width: '58vw',
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
        height: '25vh'
    },
    orderBookCon: {
        display: 'flex',
        flexDirection: 'column',
        //border: '1px solid rgb(0, 0, 0)',
        position: 'relative',
        width: '42vw',
        backgroundColor: 'rgb(38, 45, 51)',
        position: 'relative',
        fontWeight: '300'
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
    orderBookHeader: {
        width: '100%',
        //border: '1px solid rgb(0, 0, 0)',
    },
    sellOrderBook: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '27vh',
    },
    sellOrderHeader: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center'
    },
    priceHeader: {
        flexGrow: '1'
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
        color: ''
    },
    buyOrderRowCon: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right'
    },
    sellPrice: {
        flexGrow: '1',
        textAlign: 'left', 
        marginLeft: '6px',
        color: 'rgb(255, 0, 122)'
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
        height: '36vh'
    }
    
});