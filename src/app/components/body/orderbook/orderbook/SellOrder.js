import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { SellOrderRow } from './SellOrderRow'

export class SellOrder extends React.Component {
    render () {
        let dynamicStyles = StyleSheet.create({
            sellOrderBook: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: this.props.orderComponentHeight,
                overflow: 'hidden',
            },
        });
        return (
            <div className={css(dynamicStyles.sellOrderBook)}
                 onClick={this.handleClick}>
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
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
                <SellOrderRow />
            </div>
        </div>
        )
    }
}
const styles = StyleSheet.create({
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
           
        }
})