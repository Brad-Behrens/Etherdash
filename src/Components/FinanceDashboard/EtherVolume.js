import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

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
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>ETH Total Daily Volume</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.ethereumVolume}</Card.Subtitle>
                        <Card.Text>
                        The total daily volume of ETH traded on all exchanges.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EtherVolume
