import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeGetTopMatch } from "lib/seletor";
import { formatVolume10, formatDateTime } from "utils";
import PerfectScrollBar from 'react-perfect-scrollbar';

const Container = styled.div`
    margin-top: 40px;
    padding-right:170px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 40px;
    height: auto;s
`

function TongQuan(props) {

    return (
        <Container>
            <div style={{ gridColumn: '1/3', padding: '32px', borderRadius: '2rem', background: '#12211e' }}>
                <iframe
                    // ref={frameRef}
                    title="chart"
                    src={
                        'https://info.sbsi.vn/chartTHMS/?resolution=D&language=vi&theme=dark&symbol=VNINDEX'
                    }
                    scrolling="no"
                    width={'100%'}
                    height={'100% !important'}
                    frameBorder="no"
                ></iframe>
            </div>
            <div style={{ background: '#12211e', borderRadius: '2rem', padding: '32px' }}>
                <div className="d-flex justify-content-between">
                    <div style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 'bold' }}>Top cổ phiếu</div>
                    <select style={{ background: '#253734', border: '0', fontSize: '16px', color: '#EFF5F4', padding: '10px', fontWeight: 'bold', borderRadius: '12px' }}>
                        <option value='i'>Tăng giá</option>
                        <option value='d'>Giảm giá</option>
                    </select>
                </div>

            </div>
        </Container>
    );
};

const makeMapStateToProps = () => {
    const getTopMatch = makeGetTopMatch();

    const mapStateToProps = (state, props) => {
        return {

        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TongQuan);