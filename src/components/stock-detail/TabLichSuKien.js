import React from "react";
import { connect } from "react-redux";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeGetStockEvents } from "lib/seletor";
import { Tab } from "react-bootstrap";
import TabTinNoiBo from "./TabTinNoiBo";

function TabLichSuKien(props) {
    const { stockEvents } = props;
    return (
        <PerfectScrollbar style={{ height: '500px', marginTop: '40px' }}>
            <table className="w-100">
                <tbody>
                    {
                        stockEvents && !!stockEvents.length &&
                        stockEvents.map((item, index) => {
                            return (
                                <tr key={index} style={{ borderBottom: '1px solid #253734' }}>
                                    <td>
                                        <a style={{ color: '#8DA5A1' }} href={item.FileUrl} target='_blank'>{item.Title}</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </PerfectScrollbar>
    );
};

const makeMapStateToProps = () => {
    const getStockEvents = makeGetStockEvents();
    const mapStateToProps = (state, props) => {

        return {
            stockEvents: getStockEvents(state)
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabLichSuKien);