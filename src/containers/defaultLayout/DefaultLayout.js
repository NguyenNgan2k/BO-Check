import { Suspense } from "react";

import DefaultHeader from "./DefaultHeader";

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";

const StyledContainer = styled.div`
position: relative;
background: linear-gradient(192.04deg, #0E3C34 0.01%, #010703 100%);
height: 1080px;
padding: 40px 0 0 40px;
`

function DefaultLayout(props) {
    return (
        <>
            <StyledContainer>
                <Suspense>
                    <DefaultHeader />
                </Suspense>
                <DefaultRight />
            </StyledContainer>
        </>
    );
};
export default DefaultLayout;