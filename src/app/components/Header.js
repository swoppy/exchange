import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

//import { blogo } from "../../assets/img/binance.svg"

export class Header extends React.Component {
    render () {
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.logoAndTime)}>
                    <div className={css(styles.logo)}>
                        <div className={css(styles.logoInCon)}>
                            <img src={require('../assets/img/logo.svg')} style={img}/>
                        </div>
                    </div>
                    <div className={css(styles.time)}>
                        2019-06-15 19:05:09
                    </div>
                </div>
                <div className={css(styles.tradeStats)}>
                    <div className={css(styles.lastPriceCon)}>
                        <div className={css(styles.lastPrice)}>
                            Last Price
                        </div>
                        <div className={css(styles.priceInSat)}>
                            <span>
                                0.000003253 &nbsp;
                            </span>
                            <span>
                                $0.523
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.lastPriceCon)}>
                        <div className={css(styles.lastPrice)}>
                            24h change
                        </div>
                        <div className={css(styles.priceInSat)}>
                            <span>
                                0.000003253 &nbsp;
                            </span>
                            <span>
                                $0.523
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.lastPriceCon)}>
                        <div className={css(styles.lastPrice)}>
                            24h High
                        </div>
                        <div className={css(styles.priceInSat)}>
                            <span>
                                0.000003253
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.lastPriceCon)}>
                        <div className={css(styles.lastPrice)}>
                            24h Low
                        </div>
                        <div className={css(styles.priceInSat)}>
                            <span>
                                0.000003253
                            </span>
                        </div>
                    </div>
                    <div className={css(styles.lastPriceCon)}>
                        <div className={css(styles.lastPrice)}>
                            24h Volume
                        </div>
                        <div className={css(styles.priceInSat)}>
                            <span>
                                33 BTC
                            </span>
                        </div>
                    </div>
                </div>
                <div className={css(styles.coinSelection)}>
                    BTC / USD
                    <div className={css(styles.iconDown)}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <div className={css(styles.authConParent)}>
                    <div className={css(styles.authCon)}>
                        Log in
                        <div className={css(styles.inDelimeter)}>
                            |
                        </div>
                        Register
                    </div>
                </div>
                <div className={css(styles.lang)}>
                    <span>
                        <FontAwesomeIcon className={css(styles.globe)} icon={faGlobeAsia} />
                        English
                    </span>
                </div>
            </div>
        )
    }
}
const img = {
    width: '100%'
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(38, 45, 51)',
        height: 'auto',
        color: 'white',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        //fontFace: font,
        padding: '0 0 0.2em 0'
    },
        logoAndTime: {   
            display: 'flex',
            flexWrap: 'nowrap',
            fontWeight: '300',
            flex: '4'
        },
            logo: {
                display: 'flex',
                flexWrap: 'nowrap',
                margin: '0px 5px',
                //verticalAlign: 'middle',
                lineHeight: '100%',
                flex: '1',
                
            },
                logoInCon: {
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    // webkitBoxPack: 'center',
                    // justifyContent: 'center',
                },
            time: {
                webkitBoxAlign: 'center',
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'nowrap',
                padding: '0 1.5em 0 1.5em',
                postion: 'relative',
                whiteSpace: 'nowrap',
                fontSize: '1.4vw',
                flex: '2'
            },
        tradeStats: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            borderRight: '1px solid rgb(0, 0, 0)',
            fontWeight: '300',
            fontSize: '.85vw',
            //flex: 'auto 0 0',
        },
            lastPriceCon: {
                webkitBoxPack: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                paddingRight: '2em',
            },
            lastPrice: {
                display: 'flex',
                flexWrap: 'wrap',
                fontSize: '0.8em',
            },
            priceInSat: {
                whiteSpace: 'nowrap',
                display: 'flex',
                flexDirection: 'row',
                fontSize: '1.2em',
            },
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
            flex: 'auto 0 0'
        },
            iconDown: {
                padding: '0 5px 0 5px',
                color: 'rgb(223, 173, 39)'
            },
        authConParent: {
            display: 'flex',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            fontSize: '1.2em',
            webkitBoxPack: 'center',
            justifyContent: 'center',
            position: 'relative',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            padding: '0px 1em 0px 1em',
            borderRight: '1px solid rgb(0, 0, 0)',
            flexWrap: 'nowrap',
            postion: 'relative',
            flex: 'auto 0 0'
        },
            authCon: {
                display: 'flex',
                flexDirection: 'row',
                fontSize: '1vw'
            },
            inDelimeter: {
                padding: '0px 0.5em 0px 0.5em'
            },
        lang: {
            display: 'flex',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            fontSize: '1vw',
            webkitBoxPack: 'center',
            justifyContent: 'center',
            position: 'relative',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            flexWrap: 'nowrap',
            postion: 'relative',
            padding: '0px 1em 0px 1em',
            flex: 'auto 0 0'
        },
            globe: {
                padding: '0 0.5em 0 0',
                fontSize: '1.09em',
                fontWeight: 'bold'
            },
    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});