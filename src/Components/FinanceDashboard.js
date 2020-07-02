import React from 'react'
import EtherPrice from './FinanceDashboard/EtherPrice'
import EtherMarketcap from './FinanceDashboard/EtherMarketcap'
import EtherChart from './FinanceDashboard/EtherChart'
import EtherVolume from './FinanceDashboard/EtherVolume'

function FinanceDashboard() {
    return (
        <div>
            <EtherPrice />
            <EtherMarketcap />
            <EtherChart />
            <EtherVolume />
        </div>
    )
}

export default FinanceDashboard
