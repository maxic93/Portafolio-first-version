import { BannerContent, BannerSection, Button, Buttons, Content, DivSocial, Tittle, Tittle2 } from "../../Styled-Components/Dasboard"
import './banner.css'
const Banner = () => {
  return (
    <BannerSection>
      <BannerContent>
        <Tittle>Maximiliano Cabral</Tittle>
        <Tittle2>React Front-end Developer</Tittle2>
        <Content>
        Soy programador web Front-end con enfoque en React y Next js. Especializado en la creación de experiencias digitales intuitivas y atractivas. Capaz de transformar conceptos de diseño en interfaces de usuario funcionales y responsivas. Comprometido con la calidad y la usabilidad del producto final.
        </Content>
        <Buttons>
            <Button>Descargar CV</Button>
        </Buttons>
        <DivSocial>
            <a className="social" target="_blank" href="https://github.com/maxic93"><i className="fa-brands fa-github iconsBanner"></i></a>
            <a className="social" target="_blank" href="https://www.linkedin.com/in/maximiliano-cabral-corrientes-argentina/"><i className="fa-brands fa-linkedin iconsBanner"></i></a>
            <a className="social" target="_blank" href="https://twitter.com/maxicabral36"><i className="fa-brands fa-x-twitter iconsBanner"></i></a>
            <a className="social" target="_blank" href="https://www.instagram.com/maxicabral.93"><i className="fa-brands fa-instagram iconsBanner"></i></a>
        </DivSocial>
      </BannerContent>
    </BannerSection>
  )
}

export default Banner