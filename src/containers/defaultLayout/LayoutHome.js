import DefaultHeader from "./DefaultHeader";

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";
import Home from "components/home";
import DefaultFooter from "./DefaultFooter";

const StyledContainer = styled.div`
position: relative;
background: var(--bg);
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
                <DefaultFooter />
            </StyledContainer>

        </>
    );
};
export default LayoutHome;