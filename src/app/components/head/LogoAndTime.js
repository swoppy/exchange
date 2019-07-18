import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

export class LogoAndTime extends React.Component {
    render () {
        return (
            <div className={css(styles.logoAndTime)}>
                <div className={css(styles.logo)}>
                    <div className={css(styles.logoInCon)}>
                        <img src={require('../../assets/img/logo.svg')} style={img}/>
                    </div>
                </div>
                <div className={css(styles.time)}>
                    2019-06-15 19:05:09
                </div>
            </div>
        )
    }
}
const img = {
    width: '100%'
}
const styles = StyleSheet.create({
    logoAndTime: {   
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        fontWeight: '300',
        flex: '4'
    },
        logo: {
            display: 'flex',
            flexWrap: 'nowrap',
            margin: '0px 5px',
            verticalAlign: 'middle',
            lineHeight: '100%',
            flex: '1',
            
        },
            logoInCon: {
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                webkitBoxPack: 'center',
                justifyContent: 'center',
            },
        time: {
            webkitBoxAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'nowrap',
            padding: '0 1.5em 0 1.5em',
            // postion: 'relative',
            whiteSpace: 'nowrap',
            fontSize: '1.2vw',
            flex: '2'
        }
})