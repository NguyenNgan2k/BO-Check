import React from "react";

import styled from "styled-components";

const StyleRight = styled.div`
position: absolute;
background: #12211E;
right: 0;
top: 40px;
padding: 40px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px
`

function DefaultRight(props) {
    return (
        <>
            <StyleRight>
                right
            </StyleRight>
        </>
    );
};
export default DefaultRight;