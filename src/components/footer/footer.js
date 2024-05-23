import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Bishkek&units=metric&lang=ru&appid=acd4f346c669d7400f4dbbeb7f1350e0',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<Layout>
				<div>Sweet_Time@mail.ru</div>
				<div>Бесплатный звонок+996 (312) 13 26 01</div>
			</Layout>
			<Layout size='20px' color='#F34970' height=''>Волшебство в каждом вкусе!</Layout>
			<Layout>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</Layout>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1270px;
	height: 50px;
	padding: 20px 40px;
	font-weight: bold;
	background-color: #fff;
	box-shadow: 0px -1px 10px #F34970;
`;
