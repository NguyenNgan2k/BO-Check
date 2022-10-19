import DefaultHeader from "./DefaultHeader";
import DefaultRight from "./DefaultRight";
import DefaultFooter from "./DefaultFooter";
import NavBar from "./NavBar";
import CKCoSo from '../../containers/bang-gia/chung-khoan-co-so';

import styled from 'styled-components';
import * as router from 'react-router-dom';
import { useContext, useEffect } from "react";
import { WebSocketContext } from "../../containers/socket/webSocket";
import { getCategory } from "../../lib/storages";
import { connect } from "react-redux";
import { allStockRequest } from "../bang-gia/actions";
import { useDispatch } from "react-redux";

const StyledContainer = styled.div`
position: relative;
background: var(--bg);
height: auto;
padding: 40px 0 60px 60px;
`
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <router.Route
            {...rest}
            render={(props) => {
                //checkDefaultAuthorization(rest.dispatch.store);
                return <Component {...props} />;
            }}
        />
    );
};

function DefaultLayout(props) {
    const dispatch = useDispatch();
    //khởi tạo socket
    const ws = useContext(WebSocketContext);
    useEffect(() => {
        ws.init();
        dispatch(allStockRequest());
        getCategory(props);
    }, [])

    return (
        <>
            <StyledContainer>
                <DefaultHeader />
                <DefaultRight />
                <NavBar />
                <div>
                    <main>
                        <router.Switch>
                            <PrivateRoute
                                path="/bang-gia/chung-khoan-co-so/:categoryId"
                                component={CKCoSo}
                                dispatch={props}
                            />
                            {/* <PrivateRoute
                                path="/bang-gia/bond"
                                component={Bond}
                                dispatch={props}
                            /> */}
                            <router.Redirect from="/bang-gia" to="/bang-gia/chung-khoan-co-so/hose" />
                        </router.Switch>
                    </main>
                </div>
            </StyledContainer>
            <DefaultFooter />
        </>
    );
};
export default connect()(DefaultLayout);