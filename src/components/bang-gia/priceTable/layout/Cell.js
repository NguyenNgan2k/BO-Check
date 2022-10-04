import React, { useState, useEffect } from "react";
import { memo } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { formatVolume10, numberFormat, colorFix } from 'utils';

function Cell({ data, sym, type, className }) {
    const [txtCl, setTxtCl] = useState('');
    const [val, setVal] = useState('');

    useEffect(() => {
        let txtCl, val, valOriginal;
        switch (type) {
            case 'lastPrice':
                txtCl =
                    data.cl || colorFix(data.lastPrice, data.r, data.c, data.f, data.r);
                val = numberFormat(data.lastPrice, 2);
                valOriginal = data.lastPrice + '';
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'lastVolume':
                txtCl =
                    data.cl || colorFix(data.lastPrice, data.r, data.c, data.f, data.r);
                val = formatVolume10(data.lastVolume);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bP1':
                txtCl = data.bVC1;
                val = numberFormat(data.bP1, 2);
                valOriginal = data.bP1;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bV1':
                txtCl = data.bVC1;
                val = formatVolume10(data.bV1);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bP2':
                txtCl = data.bVC2;
                val = numberFormat(data.bP2, 2);
                valOriginal = data.bP2;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bV2':
                txtCl = data.bVC2;
                val = formatVolume10(data.bV2);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bP3':
                txtCl = data.bVC3;
                val = numberFormat(data.bP3, 2);
                valOriginal = data.bP3;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'bV3':
                txtCl = data.bVC3;
                val = formatVolume10(data.bV3);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oP1':
                txtCl = data.oVC1;
                val = numberFormat(data.oP1, 2);
                valOriginal = data.oP1;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oV1':
                txtCl = data.oVC1;
                val = formatVolume10(data.oV1);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oP2':
                txtCl = data.oVC2;
                val = numberFormat(data.oP2, 2);
                valOriginal = data.oP2;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oV2':
                txtCl = data.oVC2;
                val = formatVolume10(data.oV2);
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oP3':
                txtCl = data.oVC3;
                val = numberFormat(data.oP3, 2);
                valOriginal = data.oP3;
                setTxtCl(txtCl);
                setVal(val);
                break;
            case 'oV3':
                txtCl = data.oVC3;
                val = formatVolume10(data.oV3);
                setTxtCl(txtCl);
                setVal(val);
                break;
            default: {
                break;
            }
        }
    }, [type]);
    return (
        <td
            className={className + ' ' + txtCl}
            id={sym + type}
        >
            {['bP3', 'bP2', 'bP1', 'lastPrice', 'oP1', 'oP2', 'oP3'].indexOf(type) < 0
                ? (
                    <span data-for={(type === 'lastPrice' ? 'pri' : type) + '_' + sym}>
                        {val}
                    </span>
                )
                : (
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-top`}>Click đúp để đặt lệnh</Tooltip>}
                    >
                        <span data-for={(type === 'lastPrice' ? 'pri' : type) + '_' + sym}>
                            {val}
                        </span>
                    </OverlayTrigger>
                )
            }
        </td>
    );
}
export default memo(Cell);