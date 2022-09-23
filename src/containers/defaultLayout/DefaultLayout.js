import DefaultHeader from "./DefaultHeader";
import NavBar from "./NavBar";
import CKCoSo from '../../containers/bang-gia/chung-khoan-co-so';
import Bond from '../../containers/bang-gia/bond';

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";
import * as router from 'react-router-dom';
import { useContext, useEffect } from "react";
import { WebSocketContext } from "../../containers/socket/webSocket";
import { getCategory } from "../../lib/storages";
import { connect } from "react-redux";

const StyledContainer = styled.div`
position: relative;
background: var(--bg);
height: 1080px;
padding: 40px 0 0 40px;
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
    console.log(props)
    //khởi tạo socket
    const ws = useContext(WebSocketContext);
    useEffect(() => {
        ws.init();

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
                                path="/bang-gia/chung-khoan-co-so"
                                component={CKCoSo}
                                dispatch={props}
                            />
                            <PrivateRoute
                                path="/bang-gia/bond"
                                component={Bond}
                                dispatch={props}
                            />
                            <router.Redirect from="/bang-gia" to="/bang-gia/chung-khoan-co-so" />
                        </router.Switch>
                    </main>
                </div>
            </StyledContainer>
        </>
    );
};
export default connect()(DefaultLayout);