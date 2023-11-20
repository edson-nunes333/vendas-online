import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right; 
    
 `;

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img` `;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    padding: 22px;
    /* position: absolute;
    top: 0;
    right: 0;
    z-index: 2; */
`;

export const LimitedContainer = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 498px;
    
`;

