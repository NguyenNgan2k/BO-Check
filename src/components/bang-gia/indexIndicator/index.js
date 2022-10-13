import React, { memo, useEffect } from "react";
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
    margin-right: 30px;
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
        <>
            <div className="d-flex mt-3 mb-3">
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
        </>
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