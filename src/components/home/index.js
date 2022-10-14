import React from "react";
import styled from "styled-components";
import banner from "asset/image/banner/banner.png"

const StyledContainer = styled.div`
    margin-right: 170px;
`
const Banner = styled.div`
    background: linear-gradient(180deg, #2AC48D 0%, rgba(9, 43, 31, 0) 100%);
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    background-image: url(${banner});
    height: 500px;
`


function Home(props) {
    return (
        <StyledContainer>
            <Banner className="banner">
                home
            </Banner>
        </StyledContainer >
    );
}
export default Home;