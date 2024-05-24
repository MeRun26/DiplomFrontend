import styled from "styled-components";
import logo from '../../../../logo/logo.png';

const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
`;

const LogoText = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "PacificoRegular";
    line-height: 48px;
    margin: 2px 25px 0 10px;
    color: #F34970;
`;

const LogoContainer = ({ className }) => (
    <div className={className}>
        <LogoImage src={logo} alt="Logo" />
        <div>
            <LogoText>Sweet-Time</LogoText>
        </div>
    </div>
);

export const Logo = styled(LogoContainer)`
    display: flex;
    /* margin-top: -14; */
`;
