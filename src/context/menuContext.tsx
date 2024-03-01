import React, { createContext, useState, ReactNode } from 'react';

export type MenuContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

type MenuProviderProps = {
    children: ReactNode;
}

function MenuProvider({ children }: MenuProviderProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;