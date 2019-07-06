import React from "react"
import { StyleSheet, css } from 'aphrodite/no-important'

import { Row } from './row'

export class OrderBookHistory extends React.Component {
    render () {
        return (
            <div className={css(styles.orderBookHistory)}>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
         </div>
        )
    }
}

const styles = StyleSheet.create({
    orderBookHistory: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #111',
        width: '100%',
        overflow: 'hidden auto',
        position: 'relative',
        willChange: 'transform'
    }
});