import { ContentAbout, DivContent, SectionAbout, Title, Text, ContainerTecnologie, IconsTecnologie } from "../../Styled-Components/aboutMe"
import { images } from "../../Data/data" 

const AboutMe = () => {
  return (  
    <SectionAbout>
        <Title>SOBRE MI</Title>
        <DivContent>
            <ContentAbout>
              <Text>Mi enfoque principal es proporcionar soluciones personalizadas y de alta calidad que satisfagan las necesidades específicas de mis clientes.</Text>
              <Text>Me enorgullece mi habilidad para trabajar de manera autónoma y mi enfoque proactivo para resolver problemas. Estoy constantemente actualizando mis habilidades y conocimientos para mantenerme al día con las últimas tendencias y tecnologías en el campo del desarrollo web.</Text>
              <Text>Mi objetivo es colaborar estrechamente con mis clientes para convertir sus ideas en realidad, brindando soluciones digitales que no solo sean visualmente atractivas, sino también altamente funcionales y fáciles de usar. Si buscas un profesional confiable y comprometido para tu próximo proyecto, estoy aquí para ayudarte a alcanzar tus objetivos y superar tus expectativas.</Text>
            </ContentAbout>
            <ContainerTecnologie>
              {images.map(img =>{
                return <IconsTecnologie src={img} alt={img} key={img}/>
              })}
            </ContainerTecnologie>
        </DivContent>
    </SectionAbout>
  )
}

export default AboutMe