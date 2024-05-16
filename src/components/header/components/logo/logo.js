import { Icon } from "../../../../components";
import styled from "styled-components";

const LogoText = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "PacificoRegular";
    line-height: 48px;
    margin: 5px 25px 0 10px;
    color: #F34970;
`;

const LogoContainer = ({ className }) => (
    <div className={className}>
        <Icon id="fa-birthday-cake" size="36px" color="#F34970" margin="7px 0 0 20px" />
        <div>
            <LogoText>Sweet-Time</LogoText>
        </div>
    </div>
);

export const Logo = styled(LogoContainer)`
    display: flex;
    /* margin-top: -14; */
`;