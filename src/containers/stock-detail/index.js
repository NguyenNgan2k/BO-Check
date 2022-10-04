import React from "react";
import { connect } from "react-redux";

function StockDetail(props) {
    const { match: { params }, categoryId } = props;
    return (
        <>
            he detaoil
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

export default connect(makeMapStateToProps)(StockDetail);