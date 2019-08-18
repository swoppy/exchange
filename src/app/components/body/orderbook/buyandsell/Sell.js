
import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { FormFields } from './formFields/formFields'

export class Sell extends React.Component {
    render(){
        return (
            <div className={css(styles.sell)}>
                <FormFields 
                    action="Sell"
                    coin="BTC"
                    className={css(styles.buttonColor)}
                    style={{ background:  'rgb(255, 0, 122)',
                             borderColor: 'rgb(255, 0, 122)' 
                    }}
                />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    sell: {
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 22px',
        flex: '1 1 0',
        borderRight: '1px solid rgb(64, 75, 85)',
        marginTop: '20px',
        marginBottom: '20px'
    },

});