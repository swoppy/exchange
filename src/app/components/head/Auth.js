import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class Auth extends React.Component {
    render () {
        return (
            <div className={css(styles.authConParent)}>
                <div className={css(styles.authCon)}>
                    Log in
                    <div className={css(styles.inDelimeter)}>
                        |
                    </div>
                    Register
                </div>
            </div>
        )
    }
}
const styles = StyleSheet.create({
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
        }
})