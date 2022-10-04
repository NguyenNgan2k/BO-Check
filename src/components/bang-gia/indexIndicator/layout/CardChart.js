import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { usePrevious } from "../../../../lib/useHook"

import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

import { _processMapDataIndex, formatVolume10 } from "../../../../utils";
import { makeGetReceive1101 } from "../../../../lib/seletor";
import * as _ from 'lodash';

import ChartIndex from "./ChartIndex"

const StyleChart = styled.div`
    margin: 20px 30px 0 0;
    background: #12211E;
    width: 252px;
    height: 130px;
    border-radius: 10px;
    box-shadow: 1px 5px 32px rgba(188, 197, 204, 0.18);
`

const StyleBox = styled.div`
    background: #253734;
    width: 90px;
    height: 24px;
    border-radius:5px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #32cfa8;
`

function CardChart(props) {
    const [idata, setIdata] = useState(null);
    const prevReceive1101 = usePrevious();

    useEffect(() => {
        const { idata } = props;
        setIdata(idata);
    }, [])

    useEffect(() => {
        if (props.receive1101 && !_.isEqual(props.receive1101, prevReceive1101)) {
            if (props.receive1101.mc === props.idata.mc) {
                const _receive1101 = _processMapDataIndex(props.receive1101);
                setIdata(_receive1101);
            }
        }

    }, [props.receive1101, props.idata])

    if (!idata) return null;
    return (
        <>
            <div>
                <StyleChart>
                    <div className="p-3">
                        <div className="d-flex justify-content-between">
                            <div className="fz-18 text-white">{idata.name}</div>
                            <StyleBox>
                                Khớp lệnh liên tục
                            </StyleBox>
                        </div>
                        <div className="d-flex justify-content-between mt-1 mb-2" >
                            <div className="fz-14 text-white pt-4">{idata.cIndex}</div>
                            <div style={{ height: '45px' }}>
                                <ChartIndex idata={idata} />
                            </div>

                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{ fontSize: "12px" }}>
                                {
                                    idata.cl === 'd'
                                        ? (
                                            <AiOutlineFall color="#FE5050" />
                                        )
                                        : idata.cl === 'r'
                                            ? (
                                                <BsCircleFill color="#F0B90B" />
                                            )
                                            : (
                                                <AiOutlineRise color="#33D49D" />
                                            )
                                }
                                <span className={idata.cl}> {idata.change} &nbsp;{idata.changePc}</span>
                            </div>
                            <div style={{ color: "#65817B", fontSize: "12px" }}>KL: {formatVolume10(idata.vol)} Cp</div>
                        </div>
                    </div>
                </StyleChart>
            </div>
        </>
    );
};

const makeMapStateToProps = () => {
    const getReceive1101 = makeGetReceive1101();
    const mapSateToProps = (state) => {
        return {
            receive1101: getReceive1101(state),
        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps)(memo(CardChart));