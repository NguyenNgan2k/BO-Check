import React from "react";
import { connect } from "react-redux";
import IndexIndicator from "../../../components/bang-gia/indexIndicator";
import PriceTable from "../../../components/bang-gia/priceTable";
import { makeGetCategory } from '../../../lib/seletor';

function CKCoSo(props) {
    const { match: { params }, categoryId } = props;
    return (
        <>
            <IndexIndicator />
            <PriceTable categoryId={params.categoryId} />
        </>
    );
};

const makeMapStateToProps = () => {
    const getCategory = makeGetCategory();

    const mapStateToProps = (state, props) => {

        return {
            category: getCategory(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(CKCoSo);