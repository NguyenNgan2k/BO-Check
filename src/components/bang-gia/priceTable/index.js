import React, { memo, useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from "react-redux";
import styled from "styled-components";

import Category from './layout/category'

function PriceTable(props) {

    return (
        <>
            <Category />
        </>
    );
};

const makeMapStateToProps = () => {

    const mapSateToProps = (state) => {
        return {

        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps, {

})(memo(PriceTable))