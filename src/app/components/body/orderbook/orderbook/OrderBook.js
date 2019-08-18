import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { OrderBookHeader } from './OrderBookHeader'
import { SellOrder } from './SellOrder'
import { CurrentPrice } from './CurrentPrice'
import { BuyOrder } from './BuyOrder'
import { OrderBookHistory } from '../orderbookhistory/orderBookHistory'
import { BuyAndSell } from  '../buyandsell/BuyAndSell'

export class OrderBook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentOrderType: 'BS',
            orderComponentHeight: '27vh',
            currentPriceMarginPos: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.setSizeBasedOnState = this.setSizeBasedOnState.bind(this);
    }
    handleClick = e => {
        this.setState({
            currentOrderType: e.target.value,
        }, this.setSizeBasedOnState); 
        
    }
    setSizeBasedOnState() {
        let bs, cp;
        switch(this.state.currentOrderType){
            case 'B':
                bs = 'auto';
                cp = ''
            break; 
            case 'S':
                cp = 'auto';
            break;
            case 'BS':
                bs = '27vh';
                cp = '';
            break;
        }
        return this.setState({
            orderComponentHeight: bs,
            currentPriceMarginPos: cp
        });
    }
    render () {
        //console.log(this.state.orderComponentHeight);
        return (
            <div className={css(styles.orderBookCon)}>
                <div className={css(styles.orderBookWrapper)}>
                    <div className={css(styles.orderBook)}>
                        <OrderBookHeader handleClick={this.handleClick}/>
                        { this.state.currentOrderType == "B" 
                            ? '' 
                            : <SellOrder orderComponentHeight={this.state.orderComponentHeight} /> 
                        }

                        <CurrentPrice currentPriceMarginPos={this.state.currentPriceMarginPos} />

                        { this.state.currentOrderType == "S" 
                            ? '' 
                            : <BuyOrder orderComponentHeight={this.state.orderComponentHeight} /> 
                        }
                    </div>
                    <OrderBookHistory />
                 </div>
                <BuyAndSell />
            </div>
        )
    }
    
}

const styles = StyleSheet.create({
    orderBookCon: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: 'auto',
        backgroundColor: 'rgb(38, 45, 51)',
        position: 'relative',
        height: 'auto',
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
        width: '30vw',
        position: 'relative'
    }
});