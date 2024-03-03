import { HeaderContainer, HeaderWrapper, MenuIconWrapper, VivoLogo } from "./style"
import vivoLogo from '../../assets/vivo-logo-1.png'
import useMenu from "../../hooks/useMenu"
import OpenCloseIcon from "../../assets/openCloseIcon"

const Header =() =>{
    const {open, setOpen} = useMenu();
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <MenuIconWrapper>
                    <OpenCloseIcon open={open} onClick={() => setOpen(prev=>!prev)} />
                </MenuIconWrapper>
                <VivoLogo src={vivoLogo} alt="Vivo logotipo" />
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;