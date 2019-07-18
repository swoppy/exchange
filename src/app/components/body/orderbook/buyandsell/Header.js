import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class Header extends React.Component {
    render(){
        return (
            <div className={css(styles.header)}>
                <ul className={css(styles.ul)}>
                    <li className={css(styles.li, styles.liShade)}>
                        Exchange
                    </li>
                    <li className={css(styles.li)}>
                        Margin
                    </li>
                </ul>
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
    // --- additionals --- //
        liShade: {
            backgroundColor: 'rgb(32, 38, 43)',
        }
});