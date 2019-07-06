import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp, faSignal, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

export class CurrentPrice extends React.Component {
    render () {
        return (
            <div className={css(styles.currentPrice)}>
                <div className={css(styles.price)}>
                        <span className={css(styles.inCrypto)}>
                            10187.93225
                        </span>
                        <span className={css(styles.priceMovementIcon)}>
                            <FontAwesomeIcon icon={faLongArrowAltDown} />
                        </span>
                        <span className={css(styles.inFiat)}>
                            $11,000
                        </span>      
                </div>
                <span className={css(styles.signalIcon)}>
                    <FontAwesomeIcon icon={faSignal} />
                </span>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    currentPrice: {
        display: 'flex',
        flexDirection: 'row',
        width: '1w',
        height: 'auto',
        padding: '2px 5px',
        backgroundColor: 'rgb(32, 38, 43)'
    },
        price: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            justifyContent: 'center'
        },
            inCrypto: {
                display: 'flex',
                fontSize: '1.5em',
                color: 'rgb(255, 0, 122)'
            },
            inFiat: {
                display: 'flex',
                paddingLeft: '5px',
                fontSize: '1em',
                alignSelf: 'center',
                color: 'rgb(245, 188, 0)'
            },
            priceMovementIcon: {
                marginLeft: '2px',
                alignSelf: 'flex-end',
                color: 'rgb(255, 0, 122)',
                fontSize: '1.5em',
            },
        signalIcon: {
            alignSelf: 'center',
        }   
});