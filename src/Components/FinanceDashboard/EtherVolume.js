import React, { Component } from 'react'

class EtherVolume extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ethereumVolume: 0
        }
    }

    async componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-06-2020&localization=false')
            .then(response => response.json())
            .then(data => this.setState({
                ethereumVolume: data.market_data.total_volume.eth
            }))
    }
    
    render() {
        return (
            <div>
                {this.state.ethereumVolume}
            </div>
        )
    }
}

export default EtherVolume
