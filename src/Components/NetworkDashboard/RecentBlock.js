import React, { Component } from 'react'

class RecentBlock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentHeight: 0,
            currentBlockHash: '',
            timestamp: ''
        }
    }

    componentDidMount() {
        fetch('https://api.blockcypher.com/v1/eth/main')
            .then(response => response.json())
            .then(data => this.setState({
                currentHeight: data.height,
                currentBlockHash: data.hash,
                timestamp: data.time
            }))
    }


    render() {
        return (
            <div>
                {this.state.currentHeight}
                {this.state.currentBlockHash}
                {this.state.timestamp}
            </div>
        )
    }
}

export default RecentBlock
