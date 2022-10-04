import DefaultHeader from "./DefaultHeader";
import DefaultRight from "./DefaultRight";
import DefaultFooter from "./DefaultFooter";
import StockDetail from "containers/stock-detail";

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
padding: 40px 0 0 60px;
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
                <div>
                    <main>
                        <router.Switch>
                            <PrivateRoute
                                path="/symbol/detail/:sym"
                                component={StockDetail}
                                dispatch={props}
                            />
                        </router.Switch>
                    </main>
                </div>
                <DefaultFooter />
            </StyledContainer>
        </>
    );
};
export default connect()(DefaultLayout);