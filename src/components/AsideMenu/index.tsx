import React from 'react'
import { MenuNav, MenuWrapper } from './style'
import useMenu from '../../hooks/useMenu';

export default function AsideMenu() {
  const {open, setOpen} = useMenu();
  return (
    <MenuWrapper openMenu={open}>
        <MenuNav >
            menu
        </MenuNav>
    </MenuWrapper>

  )
}
