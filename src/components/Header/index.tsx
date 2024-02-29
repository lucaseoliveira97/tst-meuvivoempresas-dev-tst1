import { HeaderWrapper, MenuIcon, VivoLogo } from "./style"
import menuIcon from '../../assets/menu-icon.svg'
import vivoLogo from '../../assets/vivo-logo-1.png'
type HeaderProps = {
 
}
 
const Header =({  }: HeaderProps) =>{
    return (
        <HeaderWrapper>
            <MenuIcon src={menuIcon} alt="Menu icon" />
            <VivoLogo src={vivoLogo} alt="Vivo logotipo" />
        </HeaderWrapper>
    );
}
export default Header;