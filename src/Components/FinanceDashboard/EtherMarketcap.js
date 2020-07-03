import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class EtherMarketcap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ethereumMarketcap: 0
        }
    }

    async componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false')
            .then(response => response.json())
            .then(data => this.setState({
                ethereumMarketcap: data.ethereum.usd_market_cap
            }))
    }
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>ETH Market capitalisation</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.ethereumMarketcap}</Card.Subtitle>
                        <Card.Text>
                        The total value of all ETH.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EtherMarketcap
