import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class EtherPrice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ethereumPrice: 0
        }
    }

    async componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(data => this.setState({
                ethereumPrice: data.ethereum.usd
            }))
    }
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>ETH Price</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.ethereumPrice}</Card.Subtitle>
                        <Card.Text>
                        The current price of ETH.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EtherPrice
