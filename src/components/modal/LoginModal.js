import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    padding: 16px;
`
const Span = styled.div`
background: #fff;
    width: 28px;
    height: 2px;
`

function LoginModal(props) {
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

export default connect(makeMapStateToProps)(LoginModal);