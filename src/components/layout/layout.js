// import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContainer = ({ children, className, ...props }) => {
    return (
        <div className={className} {...props}>
            {children}
        </div>
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
    border: ${({ border = 'none' }) => border};
    border-radius: ${({ radius = '0px' }) => radius};
`;