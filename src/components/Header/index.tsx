import { HeaderContainer, HeaderWrapper, MenuIcon, MenuIconWrapper, VivoLogo } from "./style"
import menuIcon from '../../assets/menu-icon.svg'
import closeMenuIcon from '../../assets/close-icon.svg'
import vivoLogo from '../../assets/vivo-logo-1.png'
import useMenu from "../../hooks/useMenu"

const Header =() =>{
    const {open, setOpen} = useMenu();
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MenuIconWrapper><MenuIcon src={open ? menuIcon:closeMenuIcon} alt="Menu icon" onClick={() => setOpen(prev=>!prev)}/></MenuIconWrapper>
                <VivoLogo src={vivoLogo} alt="Vivo logotipo" />
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;