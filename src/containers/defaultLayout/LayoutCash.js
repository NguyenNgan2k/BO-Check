import DefaultHeader from "./DefaultHeader";
import NavBar from "./NavBar";

import styled from 'styled-components';
import DefaultRight from "./DefaultRight";
import * as router from 'react-router-dom';

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

function LayoutCash(props) {
    // const dispatch = useDispatch();
    return (
        <>
            <StyledContainer>
                <DefaultHeader />
                <DefaultRight />
                <div>
                    <main className="text-white">
                        index tiền mặt
                    </main>
                </div>
            </StyledContainer>
        </>
    );
};
export default LayoutCash;