
import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

export class Sell extends React.Component {
    render(){
        return (
            <div className={css(styles.sell)}>
                <form>
                    <div className={css(styles.head)}>
                        Sell BTC
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
    sell: {
        display: 'flex',
        flex: '1 1 0',
        flexDirection: 'column',
        padding: '12px 22px',
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