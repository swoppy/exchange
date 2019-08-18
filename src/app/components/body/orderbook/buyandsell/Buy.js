import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { FormFields } from './formFields/formFields'

export class Buy extends React.Component {
    render(){
        return (
            <div className={css(styles.buy)}>
                <FormFields 
                    action="Buy"
                    coin="BTC"
                    className={css(styles.buttonColor)}
                    style={{ background:  'rgb(112, 168, 0)',
                             borderColor: 'rgb(112, 168, 0)' 
                    }}
                />
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
        marginTop: '20px',
        marginBottom: '20px'
            
    },
    buttonColor: {
        background:'rgb(112, 168, 0)',
        borderColor: 'rgb(112, 168, 0)',
    }
});