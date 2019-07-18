import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

export class Buy extends React.Component {
    render(){
        return (
            <div className={css(styles.buy)}>
                <form>
                    <div className={css(styles.head)}>
                        Buy BTC
                        <div className={css(styles.wallet)}>
                            <FontAwesomeIcon icon={faWallet} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    buy: {
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 22px',
        flex: '1 1 0',
        borderRight: '1px solid rgb(64, 75, 85)',
            
    },
        head: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
                //border: '1px solid white'
        },
            wallet: {
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginLeft: 'auto'
            }
});