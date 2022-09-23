import React, { memo, useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from "react-redux";
import styled from "styled-components";

import CardChart from './layout/CardChart';

import {
    indexRequest
} from '../../../containers/bang-gia/actions';

import {
    makeGetIndexList,
} from '../../../lib/seletor';



const StyleChart = styled.div`
    margin: 20px 30px 0 0;
    background: #12211E;
    width: 252px;
    height: 150px;
    border-radius: 10px;
`

function IndexIndicator(props) {
    useEffect(() => {
        fetchIndexList();
    }, []);

    const fetchIndexList = () => {
        const { indexRequest } = props;
        const data = '10,11,02,03';
        return indexRequest(data);
    };

    const { indexList } = props;
    return (
        <PerfectScrollbar style={{ overflow: 'hidden' }}>
            <div className="d-flex">
                {
                    indexList &&
                    !!indexList.length &&
                    indexList.map((idata, i) => {
                        return (
                            <CardChart
                                key={idata.mc + i}
                                idata={idata}
                            />
                        );
                    })
                }
            </div>
        </PerfectScrollbar>
    );
};

const makeMapStateToProps = () => {
    const getIndexList = makeGetIndexList();

    const mapSateToProps = (state) => {
        return {
            indexList: getIndexList(state),
        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps, {
    indexRequest,
})(memo(IndexIndicator))