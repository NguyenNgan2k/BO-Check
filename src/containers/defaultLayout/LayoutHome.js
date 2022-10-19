import React, { useEffect, useContext } from "react";
import DefaultHeader from "./DefaultHeader";

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";
import Home from "components/home";
import DefaultFooter from "./DefaultFooter";
import { WebSocketContext } from "../../containers/socket/webSocket";
import { components } from "react-select";

const StyledContainer = styled.div`
position: relative;
background: var(--bg);
padding: 40px 0px 60px 40px;
`
function LayoutHome(props) {
    // const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);
    useEffect(() => {
        console.log('layoutHome mouse')
        ws.init();
    }, [])

    return (
        <>
            <StyledContainer>
                <DefaultHeader />
                <DefaultRight />
                <div>
                    <main className="text-white"  >
                        <Home />
                    </main>
                </div>
            </StyledContainer>
            <DefaultFooter />
        </>
    );
};
export default LayoutHome;