import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class TradeStats extends React.Component {
    render () {
        return (
            <div className={css(styles.tradeStats)}>
                <div className={css(styles.lastPriceCon)}>
                    <div className={css(styles.lastPrice)}>
                        Last Price
                    </div>
                    <div className={css(styles.priceInSat)}>
                        <span>
                            0.000003253 &nbsp;
                        </span>
                        <span>
                            $0.523
                        </span>
                    </div>
                </div>
                <div className={css(styles.lastPriceCon)}>
                    <div className={css(styles.lastPrice)}>
                        24h change
                    </div>
                    <div className={css(styles.priceInSat)}>
                        <span>
                            0.000003253 &nbsp;
                        </span>
                        <span>
                            $0.523
                        </span>
                    </div>
                </div>
                <div className={css(styles.lastPriceCon)}>
                    <div className={css(styles.lastPrice)}>
                        24h High
                    </div>
                    <div className={css(styles.priceInSat)}>
                        <span>
                            0.000003253
                        </span>
                    </div>
                </div>
                <div className={css(styles.lastPriceCon)}>
                    <div className={css(styles.lastPrice)}>
                        24h Low
                    </div>
                    <div className={css(styles.priceInSat)}>
                        <span>
                            0.000003253
                        </span>
                    </div>
                </div>
                <div className={css(styles.lastPriceCon)}>
                    <div className={css(styles.lastPrice)}>
                        24h Volume
                    </div>
                    <div className={css(styles.priceInSat)}>
                        <span>
                            33 BTC
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    tradeStats: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderRight: '1px solid rgb(0, 0, 0)',
        fontWeight: '300',
        fontSize: '.85vw',
        //flex: 'auto 0 0',
    },
        lastPriceCon: {
            webkitBoxPack: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            paddingRight: '2em',
        },
        lastPrice: {
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: '0.95em',
            color: '#999999'
        },
        priceInSat: {
            whiteSpace: 'nowrap',
            display: 'flex',
            flexDirection: 'row',
            fontSize: '1.2em',
        }
})