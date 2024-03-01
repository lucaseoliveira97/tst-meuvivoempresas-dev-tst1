import { HeaderContainer, HeaderWrapper, MenuIcon, VivoLogo } from "./style"
import menuIcon from '../../assets/menu-icon.svg'
import vivoLogo from '../../assets/vivo-logo-1.png'
import useMenu from "../../hooks/useMenu"
type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    const {open, setOpen} = useMenu();
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MenuIcon src={menuIcon} alt="Menu icon" onClick={() => setOpen(prev=>!prev)}/>
                <VivoLogo src={vivoLogo} alt="Vivo logotipo" />
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;