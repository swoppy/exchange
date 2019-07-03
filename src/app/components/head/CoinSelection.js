import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export class CoinSelection extends React.Component {
    render () {
        return (
            <div className={css(styles.coinSelection)}>
                BTC / USD
                <div className={css(styles.iconDown)}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    coinSelection: {
        display: 'flex',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: '1.2em',
        webkitBoxPack: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        padding: '0px 0.4em 0px 1em',
        borderRight: '1px solid rgb(0, 0, 0)',
        flexWrap: 'nowrap',
        postion: 'relative',
        fontSize: '1vw',
        flex: 'auto 0 0',
    },
        iconDown: {
            padding: '0 5px 0 5px',
            color: 'rgb(223, 173, 39)'
        }
});