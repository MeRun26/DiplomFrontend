// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchByNameContainer = ({ className }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const SearchByName = styled(SearchByNameContainer)`

`;