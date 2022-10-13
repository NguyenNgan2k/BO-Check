import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import TabKeToan from "./TabKeToan";
import TabKinhDoanh from "./TabKinhDoanh";

const Container = styled.div`
    padding: 16px;
`
const Span = styled.div`
background: #fff;
    width: 28px;
    height: 2px;
`

function TabBCTC(props) {
    const [isTab, setIsTab] = useState('ke-toan')
    return (
        <Container >
            <ul className="tab2 p-0 m-0 d-flex">
                <li>
                    <a
                        className={
                            (isTab === 'ke-toan') ? 'active' : ''
                        }
                        onClick={() => setIsTab('ke-toan')}>
                        Bảng cân đối kế toán
                    </a>
                    {(isTab === 'ke-toan') && <Span />}
                </li>
                <li>
                    <a
                        className={
                            (isTab === 'kinh-doanh') ? 'active' : ''
                        }
                        onClick={() => setIsTab('kinh-doanh')} >
                        Báo cáo kết quả kinh doanh
                    </a>
                    {(isTab === 'kinh-doanh') && <Span />}
                </li>
            </ul>
            {
                (isTab === 'ke-toan') && <TabKeToan stockCode={props.stockCode} />

            }
            {
                (isTab === 'kinh-doanh') && <TabKinhDoanh stockCode={props.stockCode} />
            }

        </Container >
    );
};

const makeMapStateToProps = () => {

    const mapStateToProps = (state, props) => {

        return {
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabBCTC);