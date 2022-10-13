import React from "react";
import { connect } from "react-redux";
import FormSearchKeToan from "./formSearchKeToan";
import { makeGetStockCDKT } from "lib/seletor";
import { numberFormat } from 'utils';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { use } from "echarts";
import { useState } from "react";

function TabKeToan(props) {
    const [isDv, setIsDv] = useState();
    const { cdkt } = props;
    const _handleChange = (value) => {
        setIsDv(value);
    }

    return (
        <>
            <FormSearchKeToan
                stockCode={props.stockCode}
                _handleChange={_handleChange}
            />
            <div className="d-flex fz-14 justify-content-end font-weight-bold" style={{ color: '#33D49D', borderTop: '1px solid #8DA5A1', borderBottom: '1px solid #8DA5A1' }}>
                {cdkt &&
                    cdkt?.Head &&
                    cdkt?.Head.reverse().map((item, index) => (
                        <div
                            key={index}
                            style={{
                                paddingLeft: '90px',
                                margin: '24px 0',
                            }}
                        >{item.YearPeriod}</div>
                    ))}
            </div>
            <PerfectScrollbar style={{ height: '500px' }}>
                <table style={{ color: '#D1E0DE', width: '100%', marginTop: '24px' }}>
                    <colgroup>
                        <col width="50%"></col>
                        <col width="12.5%"></col>
                        <col width="12.5%"></col>
                        <col width="12.5%"></col>
                        <col width="12.5%"></col>
                    </colgroup>
                    <tbody>
                        {
                            cdkt &&
                            cdkt?.Content &&
                            cdkt?.Content.map((item, index) => {
                                if (item?.Levels === 0) return null;
                                return (
                                    <tr className={'level' + item.Levels} key={index}>
                                        <td
                                            className={
                                                item.Levels === 2 ? 'pl-3' :
                                                    item.Levels === 3 ? 'pl-4' : ''
                                            }
                                        >{item.Name}</td>
                                        <td className="text-right"> {isDv === "1" ? numberFormat(item.Value1 / 1000) : numberFormat(item.Value1)}</td>
                                        <td className="text-right"> {isDv === "1" ? numberFormat(item.Value2 / 1000) : numberFormat(item.Value2)}</td>
                                        <td className="text-right"> {isDv === "1" ? numberFormat(item.Value3 / 1000) : numberFormat(item.Value3)}</td>
                                        <td className="text-right"> {isDv === "1" ? numberFormat(item.Value4 / 1000) : numberFormat(item.Value4)}</td>


                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </PerfectScrollbar>
        </>
    );
};

const makeMapStateToProps = () => {
    const getStockCDKT = makeGetStockCDKT();
    const mapStateToProps = (state, props) => {

        return {
            cdkt: getStockCDKT(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabKeToan);