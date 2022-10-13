import React from "react";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { numberFormat } from 'utils';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    stockManagementRequest,
    companyInfoRequest,
    associateRequest,
} from 'containers/stock-detail/actions'
import {
    makeGetCompanyInfo,
    makeGetAssociate,
    makeGetStockManage,
} from 'lib/seletor';

import ChartCoDong from "components/charts/pie-co-dong";

function TabHoSoDN(props) {

    const { stockCode, stockManage, companyInfo, associate } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        if (stockCode)
            getInfoHoSo();
    }, [stockCode]);

    function getInfoHoSo() {
        dispatch(stockManagementRequest(stockCode));
        dispatch(companyInfoRequest(stockCode));
        dispatch(associateRequest(stockCode));
    }

    return (
        <>
            <div style={{ padding: '16px', borderBottom: '1px solid #253734' }} className='d-flex justify-content-between align-items-center'>
                {
                    companyInfo && companyInfo.Image &&
                    <img
                        style={{
                            height: 'auto',
                            width: 'auto',
                            maxWidth: '330px',
                            maxHeight: '86px',
                        }}
                        src={`data:image/png;base64, ${companyInfo.Image}`}
                        alt={companyInfo.FullName}
                        className="mr-3"
                    />
                }
                <div>
                    <p style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>Giới thiệu</p>
                    <p style={{ fontSize: '14px', color: '#43605B' }}>CTCP Tập đoàn Hòa Phát là doanh nghiệp sản xuất công nghiệp hàng đầu Việt Nam, khởi đầu với lĩnh vực buôn bán các loại máy xây dựng và mở rộng sang các lĩnh vực nội thất, ống thép, thép xây dựng, điện lạnh, bất động sản và nông nghiệp. Trong đó, sản xuất thép là lĩnh vực cốt lõi chiếm tỷ trọng trên 80% doanh thu và lợi nhuận của Tập đoàn, nổi bật là các sản phẩm thép xây dựng và ống thép với thị phần lần lượt là 32.5...</p>
                </div>
            </div>
            <div className="row w-100 m-0">
                <div className="col" style={{ padding: '24px', borderBottom: '1px solid #253734', borderRight: '1px solid #253734' }}>
                    <table style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold', width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Giới thiệu</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ngày giao dịch đầu tiên</td>
                                <td className="text-right">{companyInfo?.PostUpDate &&
                                    companyInfo?.PostUpDate.split('T')[0]
                                        .split('-')
                                        .reverse()
                                        .join('/')}</td>
                            </tr>
                            <tr>
                                <td>Giá ngày GD đầu tiên</td>
                                <td className="text-right">{numberFormat(companyInfo?.FirstTradingSessionPrice)}</td>
                            </tr>
                            <tr>
                                <td>KL niêm yết lần đầu</td>
                                <td className="text-right">-</td>
                            </tr>
                            <tr>
                                <td>KL niêm yết hiện tại</td>
                                <td className="text-right">{numberFormat(companyInfo?.Capital / 10000)}</td>
                            </tr>
                            <tr>
                                <td>KL Cổ phiếu đang lưu hành</td>
                                <td className="text-right">{numberFormat(companyInfo?.Capital / 10000)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col" style={{ padding: '24px', borderBottom: '1px solid #253734' }}>
                    <div style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold', width: '100%' }}>Giới thiệu</div>
                    <div style={{ height: '174px' }}><ChartCoDong ownership={stockManage?.data ? stockManage?.data.ownership : []} /></div>
                </div>
            </div>
            <div style={{ padding: '16px', borderBottom: '1px solid rgb(37, 55, 52' }}>
                <div className="d-flex justify-content-between">
                    <div style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>Ban lãnh đạo</div>
                    <a style={{ fontSize: '12px', color: '#33D49D' }}>Xem thêm</a>
                </div>
                <PerfectScrollbar style={{ maxHeight: '350px' }}>
                    <table className="w-100">
                        <colgroup>
                            <col width="5%"></col>
                            <col width="35%"></col>
                            <col width="25%"></col>
                            <col width="10%"></col>
                            <col width="10%"></col>
                            <col width="15%"></col>
                        </colgroup>
                        <thead style={{ color: '#D1E0DE', fontWeight: 'bold', fontSize: '12px' }}>
                            <tr>
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Cổ phần nắm giữ</th>
                                <th>Tỷ lệ</th>
                                <th>Tuổi</th>
                                <th>Năm bắt đầu</th>
                            </tr>
                        </thead>

                        <tbody style={{ color: '#EFF5F4', fontSize: '12px' }}>
                            {
                                stockManage.data &&
                                stockManage.data.leadership &&
                                stockManage.data.leadership.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <img src={item.img} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                                    <div>
                                                        <div>{item.name}</div>
                                                        <div style={{ color: '#65817B', fontSize: '10px' }}>{item.main_position}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td>{item.age}</td>
                                            <td>{item.positions.length > 0 && item.positions[0]?.time}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                </PerfectScrollbar>
            </div>
            <div className="d-flex justify-content-between" style={{ borderBottom: '1px solid rgb(37, 55, 52)' }}>
                <div style={{ padding: '24px', borderRight: '1px solid rgb(37, 55, 52)' }}>
                    <div className="d-flex justify-content-between mb-2">
                        <div style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>Thông tin thành lập</div>
                        <a style={{ fontSize: '12px', color: '#33D49D' }}>Xem thêm</a>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div style={{ fontSize: '14px', color: '#EFF5F4', marginRight: '25px' }}>
                            <div className="mb-1">Tên pháp định</div>
                            <div className="mb-1">Tên quốc tế</div>
                            <div className="mb-1">Viết tắt</div>
                            <div className="mb-1">Trụ sở chính</div>
                            <div className="mb-1">Điện thoại</div>
                            <div className="mb-1">Fax</div>
                            <div className="mb-1">Website</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>
                            <div className="mb-1">{companyInfo?.FullName}</div>
                            <div className="mb-1">{companyInfo?.FullNameEn}</div>
                            <div className="mb-1">{companyInfo?.Name}</div>
                            <div className="mb-1">{companyInfo?.Address}</div>
                            <div className="mb-1">{companyInfo?.Phone}</div>
                            <div className="mb-1">{companyInfo?.Fax}</div>
                            <div className="mb-1">{companyInfo?.URL}</div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '24px' }}>
                    <div className="d-flex justify-content-between mb-2">
                        <div style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>Công ty con</div>
                        <a style={{ fontSize: '12px', color: '#33D49D' }}>Xem thêm</a>
                    </div>
                    <table style={{ fontSize: '14px', color: '#EFF5F4', fontWeight: 'bold' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '7px' }}>#</th>
                                <th style={{ padding: '7px' }}>Tên công ty</th>
                                <th style={{ padding: '7px' }}>Vốn điều lệ</th>
                                <th style={{ padding: '7px' }}>%sở hữu</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div >
        </>
    );
};

const makeMapStateToProps = () => {
    const getStockManage = makeGetStockManage();
    const getCompanyInfo = makeGetCompanyInfo();
    const getAssociate = makeGetAssociate();
    const mapStateToProps = (state) => {
        return {
            stockManage: getStockManage(state),
            companyInfo: getCompanyInfo(state),
            associate: getAssociate(state),
        };
    };
    return mapStateToProps;
};

export default connect(makeMapStateToProps)(TabHoSoDN);