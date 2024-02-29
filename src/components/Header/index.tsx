import { HeaderContainer, HeaderWrapper, MenuIcon, VivoLogo } from "./style"
import menuIcon from '../../assets/menu-icon.svg'
import vivoLogo from '../../assets/vivo-logo-1.png'
type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MenuIcon src={menuIcon} alt="Menu icon" />
                <VivoLogo src={vivoLogo} alt="Vivo logotipo" />
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;