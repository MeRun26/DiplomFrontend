// import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = ({ children, className, ...props }) => {
    return (
        <layout className={className} {...props}>
            {children}
        </layout>
    );
};

export const Layout = styled(LayoutContainer)`
	text-align: center;
    color: ${({ color = '#000' }) => color};
    font-size: ${({ size = '15px' }) => size};
    font-family: ${({ family = 'PacificoRegular' }) => family};
    width: ${({ width = '100%' }) => width};
    height: ${({ height = '100%' }) => height};
    margin: ${({ margin = 'auto' }) => margin};
`;