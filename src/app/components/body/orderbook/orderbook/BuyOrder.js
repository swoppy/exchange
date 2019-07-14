import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { BuyOrderRow } from './BuyOrderRow'

export class BuyOrder extends React.Component {
    render () {
        let styles = StyleSheet.create({
            buyOrderBook: {
                height: this.props.orderComponentHeight,
                overflow: 'hidden',
            },
        
        });
        return (
            <div className={css(styles.buyOrderBook)}>
                <div className={css(styles.mainBuyOrderCon)}>
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                    <BuyOrderRow />
                </div>
            </div>
        )
    }
}
