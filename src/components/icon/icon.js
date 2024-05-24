import styled from "styled-components";

const IconContainer = ({ className, id, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <i className={`fa ${id}`} aria-hidden="true"></i>
        </div>
    );
};

export const Icon = styled(IconContainer)`
    font-size: ${({ size = '20px' }) => size};
    margin: ${({ margin = '0' }) => margin};
    color: ${({ color = '#000' }) => color};	

    &:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}
`;
