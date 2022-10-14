import DefaultHeader from "./DefaultHeader";

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";
import Home from "components/home";

const StyledContainer = styled.div`
position: relative;
background: var(--bg);
height: 1080px;
padding: 40px 0 0 40px;
`
function LayoutHome(props) {
    // const dispatch = useDispatch();
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
        </>
    );
};
export default LayoutHome;