import React from "react";
import { Fragment } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import DatagridHeader from "./DatagridHeader";
import DatagridRowGroup from "./DatagridRowGroup";
import { setSymbolActive } from 'containers/client/actions'

function TblGroup({ partSnap }) {
    const dispatch = useDispatch;
    const handleOpenModal = (sym) => {
        dispatch(setSymbolActive(sym));
    }
    return (
        <Fragment>
            <div style={{ margin: '16px 170px 16px 0' }}>
                <table style={{ width: "100%" }}>
                    <colgroup>
                        {/* Mã */}
                        <col width="4.0%"></col>
                        {/* cell */}
                        <col width="3.4%"></col>
                        {/* tc */}
                        <col width="3.4%"></col>
                        {/* f */}
                        <col width="3.4%"></col>
                        {/* tong kl */}
                        <col width="4.2%"></col>
                        {/* g3 */}
                        <col width="3.4%"></col>
                        {/* v3 */}
                        <col width="3.4%"></col>
                        {/* g2 */}
                        <col width="3.4%"></col>
                        {/* v2 */}
                        <col width="3.4%"></col>
                        {/* g1 */}
                        <col width="3.4%"></col>
                        {/* g1 */}
                        <col width="3.4%"></col>

                        <col width="4.0%"></col>
                        <col width="4.0%"></col>
                        <col width="4.0%"></col>

                        {/* g1 */}
                        <col width="3.4%"></col>
                        {/* v1 */}
                        <col width="3.4%"></col>
                        {/* g2 */}
                        <col width="3.4%"></col>
                        {/* v2 */}
                        <col width="3.4%"></col>
                        {/* g3 */}
                        <col width="3.4%"></col>
                        {/* g3 */}
                        <col width="3.4%"></col>

                        <col width="4.0%"></col>
                        <col width="4.0%"></col>
                        <col width="4.0%"></col>

                        <col width="3.4%"></col>
                        <col width="3.4%"></col>
                    </colgroup>
                    <thead>
                        <DatagridHeader

                        />
                    </thead>
                    <tbody>
                        {

                            partSnap && partSnap.map((item, index) => (
                                <DatagridRowGroup
                                    record={item}
                                    index={index}
                                    key={`${item.sym}-${index}`}

                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default memo(TblGroup);