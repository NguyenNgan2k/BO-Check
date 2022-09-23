import React, { memo, useEffect } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from "react-redux";
import styled from "styled-components";
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { makeGetCategory } from '../../../../lib/seletor';
import * as _ from "lodash"

function Category(props) {
    const { category } = props;
    const categoryGroup = _.filter(category, (o) => o.type === 'group');
    console.log(categoryGroup)
    return (
        <>
            <Navbar>
                <Nav className="me-auto" >
                    <Link href="/bang-gia/chung-khoan-co-so/tong-quan">Tổng quan</Link>

                    <div className="dropdown">
                        <button type="button" class="dropdown-toggle nav-link">
                            Bảng giá (HOSE)
                        </button>
                        <div className="dropdown-menu">
                            {
                                categoryGroup &&
                                !!categoryGroup.length &&
                                categoryGroup.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className="dropdown-item"
                                            style={{
                                                color: '#8DA5A1 !important'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Nav>
            </Navbar>
        </>
    );
};

const makeMapStateToProps = () => {
    const getCategory = makeGetCategory();

    const mapSateToProps = (state) => {
        return {
            category: getCategory(state),
        };
    };
    return mapSateToProps;
};

export default connect(makeMapStateToProps, {

})(memo(Category))