import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Direction from '../_common/Direction';
import NumberPlain from '../_common/NumberPlain';
import NumberColored from '../_common/NumberColored';
import WatchlistSparkline from './WatchlistSparkline';

export default class WatchlistRow extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		assetName: PropTypes.string.isRequired,
		diff: PropTypes.number.isRequired,
		history: PropTypes.array.isRequired,
		quote: PropTypes.number.isRequired,
	};

	render() {
		const { assetName, diff, history, quote } = this.props;

		return (
			<tr>
				<td className="row-id">{assetName}</td>
				<td><NumberPlain value={quote} /></td>
				<td><Direction diff={diff} /> <NumberColored value={diff} /></td>
				<td><WatchlistSparkline history={history} /></td>
			</tr>
		);
	}
}