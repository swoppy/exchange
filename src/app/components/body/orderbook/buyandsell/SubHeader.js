import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class SubHeader extends React.Component {
    render(){
        return (
            <div className={css(styles.header)}>
                <div className={css(styles.tradeTypeCon)}>
                    <ul className={css(styles.ul)}>
                        <li className={css(styles.li, styles.liBorder)}>
                            Limit
                        </li>
                        <li className={css(styles.li, styles.liBorder, styles.liMargin)}>
                            Market
                        </li>
                        <li className={css(styles.li, styles.liBorder, styles.liMargin)}>
                            Stop-limit
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        color: 'rgb(212, 212, 212)',
        width: '100%'
    },
    // --- base ---- //
        ul: {
            listStyleType: 'none',
            display: 'flex',
            margin: '0',
            padding: '0',
            justifyContent: 'flex-start'
        },
        li: {
            lineHeight: '22px',
            border: '1px solid rgb(0, 0, 0)',
            borderBottom: '0',
            borderleft: '0',
            padding: '4px 12px',  
            cursor: 'pointer' 
        },
        tradeTypeCon: {
            display: 'flex',
            paddingLeft: '10px',
            paddingTop: '8px',
            paddingBottom: '10px',
            backgroundColor: 'rgb(32, 38, 43)',
            color: 'rgb(212, 212, 212)',
            width: '100%',
            borderBottom: '1px solid rgb(0, 0, 0)',
        },
    // --- additionals --- //
        liShade: {
            backgroundColor: 'rgb(32, 38, 43)',
        },
        liBorder: {
            borderRadius: '14px',
            border: '1px solid rgb(0, 0, 0)'
        },
        liMargin: {
            marginLeft: '6px'
        }
});