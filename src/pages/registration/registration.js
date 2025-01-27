// import { useState } from 'react'; ГПТ
// import { Navigate } from 'react-router-dom'; ГПТ

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { AuthFormError, Button, H2, Input } from "../../components";
import { useResetForm } from "../../hooks";
import { setUser } from "../../actions";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import styled from "styled-components";

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required("Заполните логин")
		.matches(
			/^\w+$/,
			"Неверно заполнен логин, допускаются только буквы и цифры",
		)
		.min(3, "Неверно заполнен логин. Минимум 3 символа")
		.max(10, "Неверно заполнен логин. Максимум 10 символов"),
	password: yup
		.string()
		.required("Заполните пароль")
		.matches(
			/^[\w#%]+$/,
			"Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %",
		)
		.min(6, "Неверно заполнен пароль. Минимум 6 символов")
		.max(20, "Неверно заполнен пароль. Максимум 20 символов"),
	passcheck: yup
		.string()
		.required("Повторите пароль")
		.oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

const RegistrationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: "",
			password: "",
			passcheck: "",
		},
		resolver: yupResolver(regFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const navigate = useNavigate(); // ГПТ

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	//     const onSubmit = ({ login, password }) => {
	//         server.register(login, password).then(({ error, res }) => {
	//             if (error) {
	//                 setServerError(`Ошибка запроса: ${error}`);
	//                 return;
	//             }

	//             dispatch(setUser(res));
	//             // sessionStorage.setItem('userData', JSON.stringify(res));
	//         });
	//     };                                                       ГПТ
	const onSubmit = async ({ login, password }) => {
		try {
			const { error, res } = await server.register(login, password);
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
		} catch (error) {
			setServerError(`Ошибка запроса: ${error.message}`);
		}
	};

	useEffect(() => {
		if (roleId !== ROLE.GUEST) {
			navigate("/");
		}
	}, [roleId, navigate]);
	//     if (roleId !== ROLE.GUEST) {
	//         return <Navigate to="/"></Navigate>;
	//     }

	const formError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register("login", {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register("password", {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Проверка пароля..."
					{...register("passcheck", {
						onChange: () => setServerError(null),
					})}
				/>
				<Button
					type="submit"
					to="/register"
					disabled={!!formError}
					size="18px"
					height="40px"
					width="270px"
					margin="auto"
				>
					Зарегистрироваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	text-align: center;

	& > form {
		display: flex;
		flex-direction: column;
		width: 250px;
		margin: 0 auto;
	}
`;
