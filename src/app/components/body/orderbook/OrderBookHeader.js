import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class OrderBookHeader extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookHeader)}>
                <ul className={css(styles.ul)}>
                    <li>
                        <input type='image'
                                src={require('../../../assets/img/b&s.svg')}
                                className={css(styles.buySellLogo)}
                        />
                    </li>
                    <li>
                        <input type='image'
                                src={require('../../../assets/img/buy.svg')}
                                className={css(styles.buySellLogo)}
                        />
                    </li>
                    <li>
                    <input type='image'
                                src={require('../../../assets/img/sell.svg')}
                                className={css(styles.buySellLogo)}
                        />
                    </li>
                </ul>
                <div className={css(styles.decimalsCon)}>
                    <label>groups</label>
                    <select className={css(styles.select)}>
                        <option>2 decimals</option>
                        <option>4 decimals</option>
                        <option>5 decimals</option>
                        <option>7 decimals</option>
                    </select>
                </div>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    orderBookHeader: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
        flex: '0 0 auto',
        padding: '4px'
    },
        ul: {
            listStyleType: 'none',
            display: 'flex',
            margin: '0',
            padding: '0'
        },
            buySellLogo: {
                width: '30px',
                height: '22px',
                //backgroundColor: 'rgb(47, 56, 63)',
                //color: 'rgb(245, 188, 0)',
                cursor: 'pointer',
                lineHeight: '100%',
                fontSize: '12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImage: 'initial',
                outline: '0px',
                margin: '0px !important',
                padding: '0.1em !important',
                ':active': {
                    borderColor: 'rgb(240, 185, 11)'
                }
            },
        select: {
            backgroundColor: 'rgb(47, 56, 63)',
            cursor: 'pointer',
            lineHeight: '100%',
            fontSize: '1em',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'rgb(0, 0, 0)',
            borderImage: 'initial',
            margin: '0px 2px',
            outline: '0px',
            padding: '2px 3px !important',
            color: '#999999'
        },
});