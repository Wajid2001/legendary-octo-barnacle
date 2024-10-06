import { create } from "zustand";

interface UseGrid {
  nRows: number;
  nCols: number;

  setNRows: (nRows: number) => void;
  setNCols: (nCols: number) => void;
}

export const useGrid = create<UseGrid>((set) => ({
  nRows: 1000,
  nCols: 1000,

  setNRows: (nRows: number) => set({ nRows }),
  setNCols: (nCols: number) => set({ nCols }),
}));
