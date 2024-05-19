// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	
    font-size: ${({ size = '12px' }) => size};
    color: #F34970;
    width: ${({ width = '100px' }) => width};
    height: ${({ height = '35px' }) => height};
    border: 1px solid #F34970;
    border-radius: ${({ radius = '12px' }) => radius};
    margin: ${({ margin = '8px 10px' }) => margin};

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

// Button.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	width: PropTypes.string,
// };

// export const Button = styled(ButtonContainer)`
//     font-size: ${({ size = '10px' }) => size};
//     font-weight: ${({ weight = '600' }) => weight};
//     font-family: ${({ family = 'Roboto Slab' }) => family};
//     color: ${({ color = '#F34970' }) => color};
//     width: ${({ width = '100px' }) => width};
//     height: ${({ height = '30px' }) => height};
//     border: ${({ border = '1px solid #F34970' }) => border};
//     border-radius: ${({ radius = '12px' }) => radius};
//     margin: ${({ margin = '0' }) => margin};
//     background-color: ${({ background = '#fff' }) => background} ;
// `;