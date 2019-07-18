import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { Header } from './Header'
import { SubHeader } from './SubHeader'

export class BuyAndSell extends React.Component {
    render(){
        return (
            <div className={css(styles.buyAndSellCon)}>
                <Header/>
                <SubHeader />
                <div className={css(styles.context)}>
                    <div className={css(styles.buy)}>
                        <form>
                            <div className={css(styles.head)}>
                                Buy BTC
                            </div>
                        </form>
                    </div>
                    <div className={css(styles.sell)}>
                        <form>
                            <div className={css(styles.head)}>
                                Sell BTC
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    buyAndSellCon: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgb(0, 0, 0)',
        height: '36vh'
    },
    context: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        color: 'rgb(212, 212, 212)',
    },
        buy: {
            display: 'flex',
            flexDirection: 'column',
            padding: '12px 22px',
            flex: '1 1 0',
            borderRight: '1px solid rgb(64, 75, 85)',
        },
            head: {
                //border: '1px solid white'
            },
        sell: {
            display: 'flex',
            flex: '1 1 0',
            flexDirection: 'column',
            padding: '12px 22px',
        }
});