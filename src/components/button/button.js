import styled from "styled-components";

const ButtonContainer = ({ children, className, size, weight, family, color, width, border, radius, margin, background, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export const Button = styled(ButtonContainer)`
    font-size: ${({ size = '10px' }) => size};
    font-weight: ${({ weight = '600' }) => weight};
    font-family: ${({ family = 'Roboto Slab' }) => family};
    color: ${({ color = '#F34970' }) => color};
    width: ${({ width = '100px' }) => width};
    height: ${({ height = '30px' }) => height};
    border: ${({ border = '1px solid #F34970' }) => border};
    border-radius: ${({ radius = '12px' }) => radius};
    margin: ${({ margin = '0' }) => margin};
    background-color: ${({ background = '0' }) => background} ;
`;

// const Button = styled.button`
//     font-size: 10px;
//     font-weight: 600;
//     font-family: Roboto Slab;
//     color: #F34970;
//     width: 100px;
//     height: 30px;
//     border: 1px solid #F34970;
//     border-radius: 12px;
//     margin-top: 15px;
//     background-color: #fff;
// `;