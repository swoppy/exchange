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
    }
});