import React, { Component } from 'react'

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
                {this.state.ethereumPrice}
            </div>
        )
    }
}

export default EtherPrice
