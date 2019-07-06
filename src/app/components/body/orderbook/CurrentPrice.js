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
                            10000.93225
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
        border: '1px solid rgb(0, 0, 0)',
        padding: '2px 5px',
    },
        price: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            justifyContent: 'center'
        },
            inCrypto: {
                display: 'flex',
                fontSize: '1.2em',
            },
            inFiat: {
                display: 'flex',
                paddingLeft: '5px',
                fontSize: '1em',
                alignSelf: 'center'
            },
            priceMovementIcon: {
                marginLeft: '2px',
                alignSelf: 'flex-end'
            },
        signalIcon: {
            alignSelf: 'center',
        }   
});