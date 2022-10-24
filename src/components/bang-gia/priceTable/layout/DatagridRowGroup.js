import React, { useEffect, useState, memo } from "react";
import { colorFix, numberFormat, formatVolume10 } from 'utils';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Cell from './Cell';
import { Link } from 'react-router-dom';

function DatagridRowGroup({ record, index }) {
    const [cl, setCl] = useState(null);
    const [clHigh, setClHigh] = useState(null);
    const [clLow, setClLow] = useState(null);
    const [clAve, setClAve] = useState(null);

    useEffect(() => {
        const _cl = colorFix(
            record.lastPrice,
            record.r,
            record.c,
            record.f,
            record.r
        );
        const _clHigh = colorFix(
            record.highPrice,
            record.r,
            record.c,
            record.f,
            record.r
        );
        const _clLow = colorFix(
            record.lowPrice,
            record.r,
            record.c,
            record.f,
            record.r
        );
        const _clAve = colorFix(
            record.avePrice,
            record.r,
            record.c,
            record.f,
            record.r
        );
        setCl(_cl);
        setClHigh(_clHigh);
        setClLow(_clLow);
        setClAve(_clAve);
    }, [record])

    return (
        <tr id={record.sym + 'row'}>
            {/* Mã ck */}
            <td className={'text-center custom-cursor' + ' ' + cl} id={record.sym + 'sym'}>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-c`}>Click đúp xem chi tiết</Tooltip>}
                >
                    <Link
                        className={"custom-cursor " + cl}
                        to={'/symbol/detail/' + record.sym}
                    >
                        {record.sym}
                    </Link>
                </OverlayTrigger>
            </td>
            {/* Trần */}
            <td className="text-right custom-cursor c" id={record.sym + 'cell'}>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-c`}>Click đúp để đặt lệnh</Tooltip>}
                >
                    <span>{numberFormat(record.c, 2)}</span>
                </OverlayTrigger>
            </td>
            {/* TC */}
            <td className="text-right custom-cursor r" id={record.sym + 'ref'}>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-c`}>Click đúp để đặt lệnh</Tooltip>}
                >
                    <span>{numberFormat(record.r, 2)}</span>
                </OverlayTrigger>
            </td>
            {/* Sàn */}
            <td className="text-right custom-cursor f" id={record.sym + 'floor'}>
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-c`}>Click đúp để đặt lệnh</Tooltip>}
                >
                    <span>{numberFormat(record.f, 2)}</span>
                </OverlayTrigger>
            </td>
            {/* Tổng kl */}
            <td className="text-right lot" id={record.sym + 'lot'}>
                {formatVolume10(record.lot)}
            </td>
            {/* Mua 3 */}
            <Cell
                data={{ bP3: record.bP3, bVC3: record.bVC3 }}
                sym={record.sym}
                type='bP3'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ bV3: record.bV3, bVC3: record.bVC3 }}
                sym={record.sym}
                type='bV3'
                className="text-right"
            />
            {/* Mua 2 */}
            <Cell
                data={{ bP2: record.bP2, bVC2: record.bVC2 }}
                sym={record.sym}
                type='bP2'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ bV2: record.bV2, bVC2: record.bVC2 }}
                sym={record.sym}
                type='bV2'
                className="text-right"
            />
            {/* Mua 1 */}
            <Cell
                data={{ bP1: record.bP1, bVC1: record.bVC1 }}
                sym={record.sym}
                type='bP1'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ bV1: record.bV1, bVC1: record.bVC1 }}
                sym={record.sym}
                type='bV1'
                className="text-right"
            />

            {/* Giá */}
            <Cell
                data={{
                    lastPrice: record.lastPrice,
                    r: record.r,
                    c: record.c,
                    f: record.f,
                    cl: record.cl,
                }}
                sym={record.sym}
                type="lastPrice"
                className="text-right custom-cursor"
            />
            {/* Khối lương */}
            <Cell
                data={{
                    lastVolume: record.lastVolume,
                    lastPrice: record.lastPrice,
                    r: record.r,
                    c: record.c,
                    f: record.f,
                    cl: record.cl,
                }}
                sym={record.sym}
                type="lastVolume"
                className="text-right"
            />
            {/* +/- */}
            <td className={"text-right" + " " + (record.cl || cl)}>
                <span
                    id={record.sym + 'change'}
                >
                    {record.lastPrice == 0 ? '' : numberFormat(record.change, 2)}
                </span>
            </td>
            {/* Bán 1 */}
            <Cell
                data={{ oP1: record.oP1, oVC1: record.oCl1 }}
                sym={record.sym}
                type='oP1'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ oV1: record.oV1, oVC1: record.oCl1 }}
                sym={record.sym}
                type='oV1'
                className="text-right"
            />
            {/* Bán 2 */}
            <Cell
                data={{ oP2: record.oP2, oVC2: record.oCl2 }}
                sym={record.sym}
                type='oP2'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ oV2: record.oV2, oVC2: record.oCl2 }}
                sym={record.sym}
                type='oV2'
                className="text-right"
            />
            {/* Bán 3 */}
            <Cell
                data={{ oP3: record.oP3, oVC3: record.oCl3 }}
                sym={record.sym}
                type='oP3'
                className="text-right custom-cursor"
            />
            <Cell
                data={{ oV3: record.oV3, oVC3: record.oCl3 }}
                sym={record.sym}
                type='oV3'
                className="text-right"
            />
            {/* Cao */}
            <td className={'text-right ' + clHigh} id={record.sym + 'highP'}>
                {numberFormat(record.highPrice, 2)}
            </td>
            {/* TB */}
            <td className={'text-right ' + clAve} id={record.sym + 'aveP'}>
                {numberFormat(record.avePrice, 2)}
            </td>
            {/* Thấp */}
            <td className={'text-right ' + clLow} id={record.sym + 'lowP'}>
                {numberFormat(record.lowPrice, 2)}
            </td>
            {/* Mua */}
            <td className="text-right lot" id={record.sym + 'fBVol'}>
                {formatVolume10(record.fBVol)}
            </td>
            {/* Bán */}
            <td className="text-right lot" id={record.sym + 'fSVol'}>
                {formatVolume10(record.fSVolume)}
            </td>

        </tr>
    );
}

export default memo(DatagridRowGroup);