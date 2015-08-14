import React from 'react';

export default class StatementRow {

    render() {

        const { contract, onViewDetails } = this.props;

        return (
            <tr>
                <td>{contract.purchase_time}</td>            
                <td>{contract.fmb_id}</td>
                <td>{contract.longcode}</td>
                <td>{contract.currency}&nbsp;{contract.buy_price}</td>
                <td>{contract.currency}&nbsp;{contract.bid_price}</td>
                <td><button onClick={onViewDetails.bind(this, contract)}>View</button></td>
            </tr>
        );
    }
}
