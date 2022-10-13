
import React from "react";
import styled from "styled-components";
import { numberFormat, formatVolume10 } from 'utils';
import span1 from 'assets/image/icon/span_1.png';
import span2 from 'assets/image/icon/span_2.png';
import span3 from 'assets/image/icon/span_3.png';
import { ProgressBar } from "react-bootstrap";
import { StringToInt } from "utils";
import { memo } from "react";


const Container = styled.div`
    padding: 16px;
    border-bottom: 1px solid #253734;
`

function StockTrade(props) {

	const { stockDetail } = props;
	const totalBV =
		stockDetail &&
		StringToInt(stockDetail?.bV1) +
		StringToInt(stockDetail?.bV2) +
		StringToInt(stockDetail?.bV3);

	const totalOV =
		stockDetail &&
		StringToInt(stockDetail?.oV1) +
		StringToInt(stockDetail?.oV2) +
		StringToInt(stockDetail?.oV3);

	const perBV1 =
		stockDetail && ~~((StringToInt(stockDetail?.bV1) * 100) / totalBV);
	const perBV2 =
		stockDetail && ~~((StringToInt(stockDetail?.bV2) * 100) / totalBV);
	const perBV3 =
		stockDetail && ~~((StringToInt(stockDetail?.bV3) * 100) / totalBV);

	const perOV1 =
		stockDetail && ~~((StringToInt(stockDetail?.oV1) * 100) / totalOV);
	const perOV2 =
		stockDetail && ~~((StringToInt(stockDetail?.oV2) * 100) / totalOV);
	const perOV3 =
		stockDetail && ~~((StringToInt(stockDetail?.oV3) * 100) / totalOV);

	return (
		<Container>
			<div>
				<a><img className="mr-3" src={span1} style={{ background: "#253734", borderRadius: '0.5rem', padding: '12px' }} /></a>
				<a><img className="mr-3 p-2" src={span2} /></a>
				<a><img className="mr-3 p-2" src={span3} /></a>
			</div>
			<table className="w-100">
				<thead>
					<tr style={{ color: "#8DA5A1" }} className="d-flex justify-content-between">
						<th>Giá khớp (VNĐ)</th>
						<th>Khối lượng</th>
						<th >Tổng</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.oCl3}>{stockDetail?.oP3}</div>
							<div className="lot">{formatVolume10(stockDetail?.oV3)}</div>
							<div className="lot">
								{stockDetail && numberFormat(
									(stockDetail?.oP3 * stockDetail?.oV3) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '188px' }} >
						<td colSpan={3}>
							<ProgressBar variant="danger" now={perOV3} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>

					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.oCl2}>{stockDetail?.oP2}</div>
							<div className="lot">{formatVolume10(stockDetail?.oV2)}</div>
							<div className="lot">
								{stockDetail && numberFormat(
									(stockDetail?.oP2 * stockDetail?.oV2) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '224px' }} >
						<td colSpan={3}>
							<ProgressBar variant="danger" now={perOV2} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>

					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.oCl1}>{stockDetail?.oP1}</div>
							<div className="lot">{formatVolume10(stockDetail?.oV1)}</div>
							<div className="lot">
								{stockDetail && numberFormat(
									(stockDetail?.oP1 * stockDetail?.oV1) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '260px' }} >
						<td colSpan={3}>
							<ProgressBar variant="danger" now={perOV1} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>
				</tbody>
			</table>

			<table className="w-100">
				<thead>
					<tr style={{ color: "#8DA5A1" }} className="d-flex justify-content-between">
						<th>Giá khớp (VNĐ)</th>
						<th>Khối lượng</th>
						<th >Tổng</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.bCl1}>{stockDetail?.bP1}</div>
							<div className="lot">{formatVolume10(stockDetail?.bV1)}</div>
							<div className="lot">
								{numberFormat(
									(stockDetail?.bP1 * stockDetail?.bV1) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '324px' }} >
						<td colSpan={3}>
							<ProgressBar variant="success" now={perBV1} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>

					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.bCl2}>{stockDetail?.bP2}</div>
							<div className="lot">{formatVolume10(stockDetail?.bV2)}</div>
							<div className="lot">
								{numberFormat(
									(stockDetail?.bP2 * stockDetail?.bV2) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '360px' }} >
						<td colSpan={3}>
							<ProgressBar variant="success" now={perBV2} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>
					<tr style={{ zIndex: '1', position: 'relative' }} >
						<td className="d-flex justify-content-between">
							<div className={stockDetail?.bCl3}>{stockDetail?.bP3}</div>
							<div className="lot">{formatVolume10(stockDetail?.bV3)}</div>
							<div className="lot">
								{numberFormat(
									(stockDetail?.bP3 * stockDetail?.bV3) / 1000000,
									2,
									'0'
								)}
								B
							</div>

						</td>
					</tr>
					<tr style={{ position: 'absolute', top: '396px' }} >
						<td colSpan={3}>
							<ProgressBar variant="success" now={perBV3} style={{ borderRadius: '0', height: '28px', width: "302.203px", justifyContent: 'end', background: '#0b2f28' }} />
						</td>
					</tr>

				</tbody>
			</table>
		</Container>
	);
};

export default memo(StockTrade);