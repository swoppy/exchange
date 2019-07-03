import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { LogoAndTime } from './LogoAndTime'
import { TradeStats } from './TradeStats'
import { CoinSelection } from './CoinSelection'
import { Auth } from './Auth'
import { Language } from './Language'

export class Header extends React.Component {
    render () {
        return (
            <div className={css(styles.container)}>
                <LogoAndTime />
                <TradeStats />
                <CoinSelection />
                <Auth />
                <Language />
            </div>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(38, 45, 51)',
        height: 'auto',
        color: 'white',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }
});