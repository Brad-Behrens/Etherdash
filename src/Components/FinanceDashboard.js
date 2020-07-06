import React from 'react'
import EtherPrice from './FinanceDashboard/EtherPrice'
import EtherMarketCap from './FinanceDashboard/EtherMarketcap'
import EtherChart from './FinanceDashboard/EtherChart'
import EtherVolume from './FinanceDashboard/EtherVolume'
import '../Finance-Dashboard.css'

function FinanceDashboard() {
    return (
        <div className="finance-dashboard-container">
            <div className="finance-dashboard-cards">
                <div className="card-marketcap">
                    <EtherMarketCap />
                </div>
                <div className="card-price">
                    <EtherPrice />
                </div>
                <div className="card-volume">
                    <EtherVolume />
                </div>
            </div>
            <div className="finance-dashboard-chart">
                <div className="ether-chart">
                    <EtherChart />
                </div>
            </div>
        </div>
    )
}

export default FinanceDashboard
