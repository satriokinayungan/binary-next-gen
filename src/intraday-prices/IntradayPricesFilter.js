import React, { PropTypes } from 'react';

export default class IntradayPricesFilter extends React.Component {

	static propTypes = {
        minAvailableDuration: PropTypes.number,
		onCalculate: PropTypes.func,
    };

	constructor(props) {
		super(props);

		this.state = {
			underlying: 'LOreal',
			date: Date.now(),
		};
	}

	render() {
		return (
			<div>
				<select name="underlying" defaultValue="FPOR">
					<option value="WLDAUD">AUD Index</option><option value="frxAUDCAD">AUD/CAD</option><option value="frxAUDCHF">AUD/CHF</option><option value="frxAUDJPY">AUD/JPY</option><option value="frxAUDNZD">AUD/NZD</option><option value="frxAUDPLN">AUD/PLN</option><option value="frxAUDUSD">AUD/USD</option><option value="WLDEUR">EUR Index</option><option value="frxEURAUD">EUR/AUD</option><option value="frxEURCAD">EUR/CAD</option><option value="frxEURGBP">EUR/GBP</option><option value="frxEURJPY">EUR/JPY</option><option value="frxEURNZD">EUR/NZD</option><option value="frxEURUSD">EUR/USD</option><option value="WLDGBP">GBP Index</option><option value="frxGBPAUD">GBP/AUD</option><option value="frxGBPCAD">GBP/CAD</option><option value="frxGBPJPY">GBP/JPY</option><option value="frxGBPNOK">GBP/NOK</option><option value="frxGBPNZD">GBP/NZD</option><option value="frxGBPPLN">GBP/PLN</option><option value="frxGBPUSD">GBP/USD</option><option value="frxNZDJPY">NZD/JPY</option><option value="frxNZDUSD">NZD/USD</option><option value="WLDUSD">USD Index</option><option value="frxUSDCAD">USD/CAD</option><option value="frxUSDJPY">USD/JPY</option><option value="frxUSDMXN">USD/MXN</option><option value="frxUSDNOK">USD/NOK</option><option value="frxUSDPLN">USD/PLN</option><option value="frxUSDSEK">USD/SEK</option><option value="AS51">Australian Index</option><option value="BFX">Belgian Index</option><option value="BSESENSEX30">Bombay Index</option><option value="IBOV">Brazilian Index</option><option value="SPTSX60">Canadian Index</option><option value="AEX">Dutch Index</option><option value="SYNAEX">Dutch Smart Index</option><option value="SX5E">Euro 50 Index</option><option value="SYNSX5E">Euro 50 Smart Index</option><option value="FCHI">French Index</option><option value="SYNFCHI">French Smart Index</option><option value="GDAXI">German Index</option><option value="SYNGDAXI">German Smart Index</option><option value="HSI">Hong Kong Index</option><option value="ISEQ">Irish Index</option><option value="N225">Japanese Index</option><option value="KOSPI2">Korean Index</option><option value="OBX">Norwegian Index</option><option value="SSECOMP">Shanghai Index</option><option value="SZSECOMP">Shenzhen Index</option><option value="STI">Singapore Index</option><option value="TOP40">South African Index</option><option value="IBEX35" disabled="disabled">Spanish Index</option><option value="SSMI">Swiss Index</option><option value="FTSE" disabled="disabled">UK Index</option><option value="SYNFTSE">UK Smart Index</option><option value="SPC">US Index</option><option value="SYNSPC">US Smart Index</option><option value="DJI">Wall Street Index</option><option value="SYNDJI">Wall Street Smart Index</option><option value="BBABI">AB Inbev</option><option value="DEADS" disabled="disabled">ADIDAS AG</option><option value="NAASML">ASML Holding</option><option value="FPCS">AXA</option><option value="FPAI">Air Liquide</option><option value="FPAIR">Airbus Group</option><option value="UKAZN" disabled="disabled">AstraZeneca plc</option><option value="FPBNP">BNP Paribas</option><option value="UKBP" disabled="disabled">BP plc</option><option value="BBBELG">Belgacom</option><option value="UKBATS" disabled="disabled">British American Tobacco</option><option value="FPCA">Carrefour</option><option value="FPSGO">Cie de Saint-Gobain</option><option value="FPACA">Credit Agricole</option><option value="FPBN">Danone</option><option value="DEDBK" disabled="disabled">Deutsche Bank AG</option><option value="DELHA" disabled="disabled">Deutsche Lufthansa</option><option value="FPEDF">Electricite de France</option><option value="FPEI">Essilor International</option><option value="FPGSZ">GDF Suez</option><option value="BBGBLB">Groupe Bruxelles Lambert</option><option value="UKHSBA" disabled="disabled">HSBC Holdings plc</option><option value="NAHEIA">Heineken</option><option value="NAINGA">ING</option><option value="BBKBC">KBC Groep</option><option value="FPKER">Kering</option><option value="FPOR">L'Oreal</option><option value="FPLG">Lafarge</option><option value="FPMC">Moet Hennessy Louis Vuitton</option><option value="FPORA">Orange</option><option value="FPRI">Pernod Ricard</option><option value="FPRNO">Renault</option><option value="NARDSA">Royal Dutch Shell</option><option value="FPSAN">SANOFI</option><option value="FPSAF">Safran</option><option value="FPSU">Schneider Electric</option><option value="FPGLE">Societe Generale</option><option value="FPFP">TOTAL</option><option value="UKTSCO" disabled="disabled">Tesco plc</option><option value="BBUCB">UCB</option><option value="NAUNA">Unilever</option><option value="FPDG">Vinci</option><option value="FPVIV">Vivendi</option><option value="frxXAUUSD">Gold/USD</option><option value="frxBROUSD">Oil/USD</option><option value="frxXPDUSD">Palladium/USD</option><option value="frxXPTUSD">Platinum/USD</option><option value="frxXAGUSD">Silver/USD</option><option value="R_100">Random 100 Index</option><option value="R_25">Random 25 Index</option><option value="R_50">Random 50 Index</option><option value="R_75">Random 75 Index</option><option value="RDBEAR">Random Bear</option><option value="RDBULL">Random Bull</option><option value="RDMARS">Random Mars</option><option value="RDMOON">Random Moon</option><option value="RDSUN">Random Sun</option><option value="RDVENUS">Random Venus</option><option value="RDYANG">Random Yang</option><option value="RDYIN">Random Yin</option>
				</select>
				<select name="date" value="2015-07-27">
					<option value="2015-07-27">2015-07-27</option><option value="2015-07-24">2015-07-24</option><option value="2015-07-23">2015-07-23</option><option value="2015-07-22">2015-07-22</option><option value="2015-07-21">2015-07-21</option><option value="2015-07-20">2015-07-20</option><option value="2015-07-17">2015-07-17</option><option value="2015-07-16">2015-07-16</option><option value="2015-07-15">2015-07-15</option><option value="2015-07-14">2015-07-14</option><option value="2015-07-13">2015-07-13</option><option value="2015-07-10">2015-07-10</option><option value="2015-07-09">2015-07-09</option><option value="2015-07-08">2015-07-08</option><option value="2015-07-07">2015-07-07</option><option value="2015-07-06">2015-07-06</option><option value="2015-07-03">2015-07-03</option><option value="2015-07-02">2015-07-02</option><option value="2015-07-01">2015-07-01</option><option value="2015-06-30">2015-06-30</option><option value="2015-06-29">2015-06-29</option><option value="2015-06-26">2015-06-26</option><option value="2015-06-25">2015-06-25</option><option value="2015-06-24">2015-06-24</option><option value="2015-06-23">2015-06-23</option><option value="2015-06-22">2015-06-22</option><option value="2015-06-19">2015-06-19</option><option value="2015-06-18">2015-06-18</option><option value="2015-06-17">2015-06-17</option><option value="2015-06-16">2015-06-16</option><option value="2015-06-15">2015-06-15</option><option value="2015-06-12">2015-06-12</option><option value="2015-06-11">2015-06-11</option><option value="2015-06-10">2015-06-10</option><option value="2015-06-09">2015-06-09</option><option value="2015-06-08">2015-06-08</option><option value="2015-06-05">2015-06-05</option><option value="2015-06-04">2015-06-04</option><option value="2015-06-03">2015-06-03</option><option value="2015-06-02">2015-06-02</option><option value="2015-06-01">2015-06-01</option><option value="2015-05-29">2015-05-29</option><option value="2015-05-28">2015-05-28</option>
				</select>
				<button>View</button>
			</div>
		);
	}
}