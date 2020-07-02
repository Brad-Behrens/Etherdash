import React from 'react'
import TradingViewWidget from 'react-tradingview-widget'

function EtherChart() {
    return (
        <div>
            <TradingViewWidget symbol="ETHUSD" />
        </div>
    )
}

export default EtherChart
