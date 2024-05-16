import { Link } from 'react-router-dom'
import styled from "styled-components";
// import { Icon } from "../../../icon/icon";

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledLink = styled(Link)`
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: ${({ size = '10px' }) => size};
    font-weight: 600;
    font-family: Roboto Slab;
    color: #F34970;
    width: ${({ width = '100px' }) => width};
    height: ${({ height = '30px' }) => height};
    border: 1px solid #F34970;
    border-radius: ${({ radius = '12px' }) => radius};
    margin: ${({ margin = '10px 10px' }) => margin};
    background-color: #fff;
    &:hover{
        cursor: pointer;
    }
`;


const ControlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAligned>
                <StyledLink to="/">Главная</StyledLink>
                <StyledLink to="/category/:category_id">Категории</StyledLink>
                <StyledLink to="/basket">Корзина</StyledLink>
                <StyledLink to="/orders">Заказы</StyledLink>
                <StyledLink to="/confection">Новое изделие</StyledLink>
                <StyledLink to="/category">Новая категория</StyledLink>
                <StyledLink to="/users">Пользователи</StyledLink>
                <StyledLink size='18px' width='130px' height='40px' margin='4px 20px 0 60px' to="/login">Войти</StyledLink>
            </RightAligned>
        </div>
    )
}



export const ControlPanel = styled(ControlPanelContainer)`

`;
/* font-size: ${({ size = '10px' }) => size};
    font-weight: ${({ weight = '600' }) => weight};
    font-family: ${({ family = 'Roboto Slab' }) => family};
    color: ${({ color = '#F34970' }) => color};
    width: ${({ width = '100px' }) => width};
    height: ${({ height = '30px' }) => height};
    border: ${({ border = '1px solid #F34970' }) => border};
    border-radius: ${({ radius = '12px' }) => radius};
    margin: ${({ margin = '0' }) => margin};
    background-color: ${({ background = '0' }) => background} ;
`; */

// buttons
// const Button = styled.button`
//     font-size: 18px;
//     font-weight: 600;
//     font-family: Roboto Slab;
//     color: #F34970;
//     width: 130px;
//     height: 40px;
//     margin: 7px 0 0 25px;
//     border: 1px solid #F34970;
//     border-radius: 12px;
//     background-color: #fff;
// `;