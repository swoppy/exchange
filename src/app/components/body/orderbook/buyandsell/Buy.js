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
                    <div className={css(styles.price)}>
                        <label className={css(styles.label)}>Price :</label>
                        <div className={css(styles.inputCon)}>
                            <input className={css(styles.input)} type="number"/>
                            <span className={css(styles.span)}>USD</span>
                        </div>
                    </div>
                    <div className={css(styles.price)}>
                        <label className={css(styles.label)}>Amount:</label>
                        <div className={css(styles.inputCon)}>
                            <input className={css(styles.input)} type="number"/>
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
            alignItems: 'center',
            paddingBottom: '10px'
                //border: '1px solid white'
        },
            wallet: {
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginLeft: 'auto'
            },
        price: {
            display: 'flex',
            flexDirection: 'row',
           // paddingTop: '10px',
            flex: '0 1 35px',
            margin: '0px 0px 5px',
            flexWrap: 'nowrap',
        },
            label: {
                display: 'flex',
                flexBasis: '25%',
                height: '100%',
                color: 'rgb(175, 175, 175)',
                alignItems: 'center'
            },
            inputCon: {
                display: 'flex',
                width: '100%',
                height: '100%',
                flexBasis: '75%',
                position: 'relative',
                flexWrap: 'nowrap',
                background: 'rgb(47, 56, 63)',
                border: '1px solid rgb(64, 75, 85)',
                

            },
                input: {
                    color: 'rgb(212, 212, 212)',
                    background: 'rgb(47, 56, 63)',
                    border: '0',
                    borderImage: 'initial',
                    padding: '4px 0px 4px 10px',
                    outline: 'none',
                    //height: '200%',
                    flex: '1 1 auto',
                    ':focus': {
                        borderColor: 'rgb(240, 185, 11)'
                    }
                },
                span: {
                    color: 'rgb(102, 102, 102)',
                    fontSize: '12px',
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }
});