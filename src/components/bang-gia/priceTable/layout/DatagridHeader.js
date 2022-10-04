import React from "react";
import { Fragment } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
function DatagridHeader() {
    return (
        <Fragment>
            <tr style={{ color: '#8DA5A1', fontSize: '12px', textAlign: 'right' }}>
                <th className="arrow" style={{ textAlign: 'left' }}>Mã CP<div><RiArrowDropUpLine size="15px" className="up" /><RiArrowDropDownLine size="15px" className="down" /></div></th>
                <th>Trần</th>
                <th>TC</th>
                <th>Sàn</th>
                <th>Tổng KL</th>
                <th>Giá 3</th>
                <th>KL 3</th>
                <th>Giá 2</th>
                <th>KL 2</th>
                <th>Giá 1</th>
                <th>KL 1</th>
                <th>Giá</th>
                <th>KL</th>
                <th>+/-</th>
                <th>Giá 1</th>
                <th>KL 1</th>
                <th>Giá 2</th>
                <th>KL 2</th>
                <th>Giá 3</th>
                <th>KL 3</th>
                <th>Cao</th>
                <th>TB</th>
                <th>Thấp</th>
                <th>Mua</th>
                <th>Bán</th>
            </tr>
        </Fragment>
    );
}

export default DatagridHeader;