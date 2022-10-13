import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Info = styled.div`
    display:flex;
    border-bottom:1px solid #253734;
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
`

function TabChiSoPT(props) {
    return (
        <>
        </>
    );
};

const makeMapStateToProps = () => {

    const mapStateToProps = (state, props) => {

        return {
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabChiSoPT);