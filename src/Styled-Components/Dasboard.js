import styled from "styled-components";
import 'typeface-montserrat';

export const Nav = styled.nav`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-weight: 700;
 display: flex;
 height: 80px;
 width: 100%;
 background: transparent;
 @media (max-width: 880px) {
    font-size: 13px;
    height: 70px;
}
`
export const Logo = styled.div`
background-image: url("https://i.postimg.cc/6QRgmKn5/Logo-con-Iniciales-de-Nombre-Sencillo-Tipogr-fico-Circular-Blanco-y-Negro.png");
background-size: cover;
background-position: center;
width: 60px;
height: 60px;
border-radius: 50%;
margin: 10px;
@media (max-width: 880px) {
    width: 35px;
    height: 35px;
}
`
export const DivLinks = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 100%;
margin-right: 70px;
@media (max-width: 880px) {
    margin-right: 10px;
    justify-content: center;
    align-items: start;
}
`
export const Links = styled.a`
color: #26D059;
padding: 15px;
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`
export const BannerSection = styled.section`
width: 100%;
height: 100%;
padding: 50px;
padding-top: 100px;
@media (max-width: 880px) {
    padding: 3px;
    margin-top: -15px;
}
`

export const BannerContent = styled.div`
width: 800px;
height: 100%;
display: flex;
justify-content: center;
flex-direction: Column;
font-family: 'Montserrat', sans-serif;
margin-left: 150px;
@media (max-width: 1133px) {
    margin: 0px;
    padding: 10px;
}
@media (max-width: 880px) {
    width: 100%;
}
`

export const Tittle = styled.h1`
font-size: 62px;
color: #26D059;
@media (max-width: 880px) {
    font-size: 32px;
}
`
export const Tittle2 = styled.h2`
font-size: 56px;
color: #8DC49D;
@media (max-width: 880px) {
    font-size: 25px;
}
`
export const Content = styled.p`
color: #CCD7CF;
margin-top: 30px;
line-height: 2;
@media (max-width: 880px) {
    font-size: 13px;
    margin-top: 10px;
}

`
export const Buttons = styled.div`
display: flex;
margin-top: 20px;
@media (max-width: 880px) {
    margin-top: 5px;
}

`
export const Button = styled.button`
padding: 15px;
margin-right: 10px;
margin-top: 20px;
border: 2px solid #EAECEA;
background-color: transparent;
border-radius: 10px;
color: #CCD7CF; 
font-size: 15px;
font-family: 'Montserrat', sans-serif;
transition: .3s;
cursor: pointer;
&:hover {
    background: #111;
    border-radius: 10px;
}
@media (max-width: 880px) {
    font-size: 10px;
    margin-top: 10px;
    padding: 10px;
}
`
export const DivSocial = styled.div`
display: flex;
align-items: center;
margin-top: 35px;
@media (max-width: 880px) {
    margin-top: 17px; 
}
`

