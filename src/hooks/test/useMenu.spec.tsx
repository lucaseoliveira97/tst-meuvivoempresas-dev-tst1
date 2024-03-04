// useCounter.test.tsx
import { act, renderHook } from "@testing-library/react";
import useCarousel from "../useCarousel";
import MenuProvider, { MenuProviderProps } from "../../context/menuContext";
import { ReactNode } from "react";
import useMenu from "../useMenu";

describe("useMenu",  () => {
  test("Iniciando menu aberto", async () => {
    const wrapper = ({ children } :MenuProviderProps) => <MenuProvider initial={true}>{children}</MenuProvider>;
    const { result } = renderHook(() => useMenu(), {wrapper});
    expect(result.current.open).toBe(true);
  });

  test("Iniciando menu fechado", async () => {
    const wrapper = ({ children } :MenuProviderProps) => <MenuProvider >{children}</MenuProvider>;
    const { result } = renderHook(() => useMenu(), {wrapper});
    expect(result.current.open).toBe(false);
  });

  test("Abrindo menu", async () => {
    const wrapper = ({ children } :MenuProviderProps) => <MenuProvider initial={true}>{children}</MenuProvider>;
    const { result } = renderHook(() => useMenu(), {wrapper});

     act( () => {
         result.current.setOpen(false);
      });
      expect(result.current.open).toBe(false);
  });

  test("Fechando menu", async () => {
    const wrapper = ({ children } :MenuProviderProps) => <MenuProvider initial={false}>{children}</MenuProvider>;
    const { result } = renderHook(() => useMenu(), {wrapper});

     act( () => {
         result.current.setOpen(true);
      });
      expect(result.current.open).toBe(true);
  });
})