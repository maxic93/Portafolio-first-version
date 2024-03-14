import styled from "styled-components";
import 'typeface-montserrat';


export const SectionAbout = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: Column;
`
export const Title = styled.h2`
font-size: 28px;
font-family: 'Montserrat', sans-serif;
color: #8DC49D;
padding: 10px;
text-align: center;
width: 100%;
@media (max-width: 880px) {
    font-size: 22px;
}
`
export const DivContent = styled.div`
font-family: 'Montserrat', sans-serif;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
`
export const ContentAbout = styled.div`
max-width: 1050px;
min-width: 300px;
font-size: 1.2em;
margin: 10px;
font-family: 'Montserrat', sans-serif;
color: #CCD7CF;
@media (max-width: 880px) {
    font-size: .9em;
    width: 100%;
}
`
export const Text = styled.p`
padding: 5px;
margin-bottom: 2px;
line-height: 2;
@media (max-width: 880px) {
    padding: 0px;
}
`
export const ContainerTecnologie = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
gap: 20px;
padding: 20px;
min-width: 300px;
`
export const IconsTecnologie = styled.img`
max-width: 110px;
  height: 100px;
`
