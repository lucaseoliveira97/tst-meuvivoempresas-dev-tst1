// useCounter.test.tsx
import { act, renderHook } from "@testing-library/react";
import useCarousel from "../useCarousel";

describe("useCarousel",  () => {
  test("Deve obter o valor inicial do carrossel", async () => {
    const { result } = renderHook(() => useCarousel(3,0));
    expect(result.current[0]).toBe(0);
  });

  test("Deve tentar ir para o anterior e não conseguir por estar no limite", async () => {
    const { result } = renderHook(() => useCarousel(3,0));
    expect(result.current[0]).toBe(0);

     act(  () => {
         result.current[1]();
      });
      expect(result.current[0]).toBe(0);
  });
  test("Deve ir para o proximo item do carrossel", async () => {
    const { result } = renderHook(() => useCarousel(3,0));
    expect(result.current[0]).toBe(0);

     act(  () => {
         result.current[2]();
      });
      expect(result.current[0]).toBe(1);
  });

  test("Quando estiver no ultimo item e tentar ir para o proximo nao deve ser possivel", async () => {
    const { result } = renderHook(() => useCarousel(3,0));
    expect(result.current[0]).toBe(0);

     act(() => {
         result.current[2]();
      });
      act(() => {
        result.current[2]();
     });
     act(() => {
        result.current[2]();
     });
      expect(result.current[0]).toBe(2);
  });

  test("Deve tentar ir um para frente e depois retornar", async () => {
    const { result } = renderHook(() => useCarousel(3,0));
    expect(result.current[0]).toBe(0);

     act(() => {
         result.current[2]();
      });
      act(() => {
        result.current[1]();
     });
      expect(result.current[0]).toBe(0);
  });
  
})