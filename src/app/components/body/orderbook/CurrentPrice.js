import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp, faSignal } from '@fortawesome/free-solid-svg-icons'

export class CurrentPrice extends React.Component {
    render () {
        return (
            <div className={css(styles.currentPrice)}>
                <div className={css(styles.price)}>
                        <div className={css(styles.inCrypto)}>
                            10000.93225
                            <span className={css(styles.priceMovementIcon)}>
                                <FontAwesomeIcon icon={faLongArrowAltDown} />
                            </span>
                        </div>
                        <div className={css(styles.inFiat)}>
                            $11,000
                        </div>
                        {/* <div className={css(styles.signalIcon)}> */}
                            <FontAwesomeIcon className={css(styles.signalIcon)} icon={faSignal} />
                        {/* </div> */}
                </div>
                
            </div>
        )
    }
}
const styles = StyleSheet.create({
    currentPrice: {
        display: 'flex',
        webkitBoxAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        border: '1px solid rgb(0, 0, 0)',
        padding: '2px 0',
    },
        price: {
            display: 'flex',
            flexDirection: 'row', 
        },
            inCrypto: {
                fontSize: '1.2em'
            },
            inFiat: {
                display: 'flex',
                paddingLeft: '5px',
                fontSize: '1em',
                alignSelf: 'flex-end'
            },
            priceMovementIcon: {
                marginLeft: '2px'
            },
            signalIcon: {
                alignSelf: 'center'
            }   
});