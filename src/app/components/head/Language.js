import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'

export class Language extends React.Component {
    render () {
        return (
            <div className={css(styles.lang)}>
                <span>
                    <FontAwesomeIcon className={css(styles.globe)} icon={faGlobeAsia} />
                    English
                </span>
            </div>
        )
    }
}

const styles = StyleSheet.create({
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
        }
})