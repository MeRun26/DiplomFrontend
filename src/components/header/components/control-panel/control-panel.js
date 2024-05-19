import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { Button, Icon } from '../../../../components';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors';
import { ROLE } from '../../../../constants';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`;

// const StyledIcon = styled.div`
//     &:hover{
//         cursor: pointer;
//     }
// `;

const ControlPanelContainer = ({ className }) => {
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);
    console.log(logout, 'logout')
    return (
        <div className={className}>
            <RightAligned>

                <Link to="/" ><Button>Главная</Button></Link>
                <Link to="/category/:category_id" ><Button>Категории</Button></Link>
                <Link to="/basket" ><Button>Корзина</Button></Link>
                <Link to="/orders"><Button>Заказы</Button></Link>
                <Link to="/confection" ><Button>Новое изделие</Button></Link>
                <Link to="/category" ><Button>Новая категория</Button></Link>
                <Link to="/users" ><Button>Пользователи</Button></Link>
                {roleId === ROLE.GUEST ?
                    (
                        <Link to="/login"><Button size='18px' width='130px' height='40px' margin='4px 20px 0 60px' >Войти</Button></Link>
                    ) : (

                        <Button onClick={() => dispatch(logout(session))}
                            size='18px' width='150px' height='40px' margin='4px 20px 0 50px' >{login}
                            <Icon id="fa-sign-out" size="25px" color="#F34970" margin="3px 0 0 10px" />
                        </Button>

                    )}
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