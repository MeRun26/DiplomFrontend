import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Icon } from "../../../../components";
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from "../../../../selectors";
import { ROLE } from "../../../../constants";
import { logout } from "../../../../actions";
import styled from "styled-components";

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const ControlPanelContainer = ({ className }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	// const onLogout = () => {
	// 	dispatch(logout(session));
	// 	sessionStorage.removeItem('userData');
	// };

	const getRoleIcon = (roleId) => {
		switch (roleId) {
			case ROLE.ADMIN:
				return (
					<Icon
						id="fa-user-secret"
						size="20px"
						color="#F34970"
						margin="14px 0 0 230px"
					/>
				);
			case ROLE.MODER:
				return (
					<Icon
						id="fa-user-circle"
						size="20px"
						color="#F34970"
						margin="14px 0 0 230px"
					/>
				);
			case ROLE.CLIENT:
				return (
					<Icon
						id="fa-user"
						size="20px"
						color="#F34970"
						margin="14px 0 0 230px"
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className={className}>
			<RightAligned>
				<Link to="/">
					<Button>Главная</Button>
				</Link>
				<Link to="/category/:categoryId">
					<Button>Категории</Button>
				</Link>
				<Link to="/cart/:cartId">
					<Button>Корзина</Button>
				</Link>
				<Link to="/confection">
					<Button>Новое изделие</Button>
				</Link>
				<Link to="/category">
					<Button>Новая категория</Button>
				</Link>
				<Link to="/users">
					<Button>Пользователи</Button>
				</Link>
				{roleId === ROLE.GUEST ? (
					<>
						<Icon
							id="fa-user-o"
							size="20px"
							color="#F34970"
							margin="15px 0 0 230px"
						/>
						<Link to="/login">
							<Button
								size="18px"
								width="150px"
								height="40px"
								margin="4px 50px 0 10px"
							>
								Войти
							</Button>
						</Link>
					</>
				) : (
					<>
						{getRoleIcon(roleId)}

						<Button
							onClick={() => dispatch(logout(session))}
							size="18px"
							width="150px"
							height="40px"
							margin="4px 50px 0 10px"
						>
							{login}
							<Icon
								id="fa-sign-out"
								size="25px"
								color="#F34970"
								margin="3px 0 0 10px"
							/>
						</Button>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;

/* 
buttons
    font-size: ${({ size = '10px' }) => size};
    font-weight: ${({ weight = '600' }) => weight};
    font-family: ${({ family = 'Roboto Slab' }) => family};
    color: ${({ color = '#F34970' }) => color};
    width: ${({ width = '100px' }) => width};
    height: ${({ height = '30px' }) => height};
    border: ${({ border = '1px solid #F34970' }) => border};
    border-radius: ${({ radius = '12px' }) => radius};
    margin: ${({ margin = '0' }) => margin};
    background-color: ${({ background = '0' }) => background};
`; 

const Button = styled.button`
    font-size: 18px;
    font-weight: 600;
    font-family: Roboto Slab;
    color: #F34970;
    width: 130px;
    height: 40px;
    margin: 7px 0 0 25px;
    border: 1px solid #F34970;
    border-radius: 12px;
    background-color: #fff;
`;*/
