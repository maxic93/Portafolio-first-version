import { DivLinks, Links, Logo, Nav } from "../../Styled-Components/Dasboard"

const Navbar = () => {
  return (
    <Nav>
        <Logo/>
        <DivLinks>
            <Links href="#">Sobre mi</Links>
            <Links href="#">Proyectos</Links>
            <Links href="#">Contacto</Links>
        </DivLinks>
    </Nav>
  )
}

export default Navbar