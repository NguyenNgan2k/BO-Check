import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import styled from "styled-components";
import { cdktRequest } from "containers/stock-detail/actions";

const Container = styled.div`
    padding: 16px;
`

function FormSearchKeToan(props) {

    const dispatch = useDispatch();
    const { formPeriod, formUnit, _handleChange } = props;

    const handleSelect = () => {
        const paramsCDKT =
            'symbol=' +
            props.stockCode +
            '&type=CDKT&termtype=' +
            formPeriod +
            '&from=1&to=4';
        dispatch(cdktRequest(paramsCDKT));
    }

    useEffect(() => {
        if (formPeriod && formUnit) {
            handleSelect();
            _handleChange(formUnit)
        }
    }, [formPeriod, formUnit])

    return (
        <form style={{ margin: '24px 0' }}>
            <label className="text-white font-weight-bold fz-14">Kỳ báo cáo</label>
            <Field name="formPeriod" className="formControl" component="select">
                <option value="2">Theo quý</option>
                <option value="1">Theo năm</option>
            </Field>
            <label className="text-white font-weight-bold fz-14">Đơn vị tính</label>
            <Field name="formUnit" className="formControl" component="select">
                <option value="2">Triệu đồng</option>
                <option value="1">Tỷ đồng</option>
            </Field>
        </form>
    );
};

FormSearchKeToan = reduxForm({
    form: 'formSearchKeToan'
})(FormSearchKeToan)

const selector = formValueSelector('formSearchKeToan')

const makeMapStateToProps = () => {

    const mapStateToProps = (state, props) => {
        const {
            formPeriod,
            formUnit
        } = selector(
            state,
            'formPeriod',
            'formUnit',
        )
        return {
            formPeriod,
            formUnit,
            initialValues: {
                formPeriod: '2',
                formUnit: '2',
            },
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(FormSearchKeToan);