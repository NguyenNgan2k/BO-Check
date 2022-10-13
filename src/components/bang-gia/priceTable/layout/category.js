import React, { memo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Nav, Navbar } from 'react-bootstrap';
import { makeGetCategory, makeGetAllStock } from 'lib/seletor';
import * as _ from "lodash";
import { RiArrowDropDownLine } from "react-icons/ri"
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import StockSuggest from "components/select/StockSuggest";
import { setSymbolScroll } from 'containers/client/actions'

function Category(props) {
    const dispatch = useDispatch();
    const { categoryId, category, allStock } = props;
    console.log(categoryId)
    const categoryGroup = _.filter(category, (o) => o.type === 'group');
    function _handleAddStock(stock) {
        if (!stock) return;
        const categoryGroup = _.find(
            category,
            (o) => o.type === 'group' && o.path.endsWith('/bang-gia/chung-khoan-co-so/' + categoryId)
        );
        if (categoryGroup) {
            dispatch(setSymbolScroll(stock));
        }
    }
    return (
        <>
            <Navbar className="p-0">
                <Nav className="me-auto category" >
                    <div className="d-flex align-items-center">
                        <StockSuggest
                            dataSuggest={allStock}
                            classname={'form-add form-control fz-14'}
                            placeholder="Tìm mã cổ phiếu ..."
                            addStock={_handleAddStock}
                        />
                        <FiSearch className="search" color="#65817B" size={20} />
                    </div>
                    <NavLink to="/bang-gia/chung-khoan-co-so/tong-quan"
                        style={
                            isActive => ({
                                color: isActive ? "#31DB9F" : "#8DA5A1",
                            })
                        }
                    >
                        Tổng quan
                    </NavLink>
                    <div>
                        <div className="dropdown-select">
                            <div
                                style={{
                                    color: (categoryId === 'hose' || categoryId === 'hnx' || categoryId === 'upcom') ? "#31DB9F" : "#8DA5A1",
                                }}
                            >
                                Bảng giá
                                {
                                    categoryId === 'hose'
                                        ? ' (HOSE)'
                                        : categoryId === 'hnx'
                                            ? ' (HNX)'
                                            : categoryId === 'upcom'
                                                ? ' (UPCOM)'
                                                : ''
                                }
                                <span><RiArrowDropDownLine size="30px" /></span>
                            </div>
                            <ul className="menu">
                                {
                                    categoryGroup &&
                                    !!categoryGroup.length &&
                                    categoryGroup.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink
                                                    to={item.path}
                                                    className="fz-12"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                    <NavLink to="/bang-gia/chung-khoan-co-so/ds-co-phieu"
                        style={
                            isActive => ({
                                color: isActive ? "#31DB9F" : "#8DA5A1",
                            })
                        }
                    >
                        Danh sách cổ phiếu
                    </NavLink>
                </Nav>
            </Navbar>
        </>
    );
};

const makeMapStateToProps = () => {
    const getCategory = makeGetCategory();
    const getAllStock = makeGetAllStock();

    const mapSateToProps = (state) => {
        return {
            category: getCategory(state),
            allStock: getAllStock(state),
        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps, {

})(memo(Category))