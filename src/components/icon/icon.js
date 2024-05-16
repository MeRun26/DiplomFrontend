import styled from "styled-components";

const IconContainer = ({ className, id }) => {
    return (
        <div className={className}>
            <i className={`fa ${id}`} aria-hidden="true"></i>
        </div>
    );
};

export const Icon = styled(IconContainer)`
    font-size: ${({ size = '20px' }) => size};
    font-family: ${({ family }) => family};
    color: ${({ color = '#000' }) => color};
    margin: ${({ margin = '0' }) => margin};
`;