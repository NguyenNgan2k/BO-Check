import React, { useState } from "react";
import { connect } from "react-redux";
import FormSearchKinhDoanh from "./formSearchKinhDoanh";
import { numberFormat } from "utils";
import { makeGetStockKQKD } from "lib/seletor";
import PerfectScrollbar from 'react-perfect-scrollbar';

function TabKinhDoanh(props) {
    const [isDv, setIsDv] = useState();
    const { kqkd } = props;
    const _handleChange = (value) => {
        setIsDv(value);
    }
    return (
        <>

            <FormSearchKinhDoanh
                stockCode={props.stockCode}
                _handleChange={_handleChange}
            />
            <div className="d-flex fz-14 justify-content-end font-weight-bold" style={{ color: '#33D49D', borderTop: '1px solid #8DA5A1', borderBottom: '1px solid #8DA5A1' }}>
                {kqkd &&
                    kqkd?.Head &&
                    kqkd?.Head.reverse().map((item, index) => (
                        <div
                            key={index}
                            style={{
                                paddingLeft: '90px',
                                margin: '24px 0'
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
                            kqkd &&
                            kqkd?.Content &&
                            kqkd?.Content.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.Name}</td>
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
    const getStockKQKD = makeGetStockKQKD();
    const mapStateToProps = (state, props) => {

        return {
            kqkd: getStockKQKD(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabKinhDoanh);