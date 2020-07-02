import React, { Component } from 'react'


class SearchBlock extends Component {k
    constuctor() {

        this.state = {
            height: 0,
            hash: '',
            timestamp: '',
            previousHash: '',
            merkleRoot: ''
        }

        this.searchBlock = this.searchBlock.bind(this)
    }

    searchBlock = (hash) => {
        fetch(`https://api.blockcypher.com/v1/eth/main/blocks/${hash}`)
            .then(response => response.json())
            .then(data => this.setState({
                height: data.height,
                hash: data.hash,
                timestamp: data.time,
                previousHash: data.prev_block,
                merkleRoot: data.mrkl_root
            }))
    }



    render() {
        return (
            <div>
                <input>Enter Block Hash</ input>
                <button onClick={this.searchBlock}>Search Block</button>

                {this.state.height}
                {this.state.hash}
                {this.state.timestamp}
                {this.state.previousHash}
                {this.state.merkleRoot}
            </div>
        )
    }
}

export default SearchBlock
