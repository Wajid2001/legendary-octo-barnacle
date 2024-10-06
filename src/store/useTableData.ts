import { twMerge } from "tailwind-merge";
import { create } from "zustand";

interface CellData {
  value?: string;
  className?: string;
}

interface UseTableData {
  tableData: Record<string, CellData>;
  selectedCell: string;

  setSelectedCell: (cell: string) => void;
  setTableData: (data: Record<string, CellData>) => void;
  setCell: (key: string, value: string) => void;
  setCellClassName: (key: string, className: string) => void;
}

export const useTableData = create<UseTableData>((set) => ({
  tableData: {},
  selectedCell: "",

  setSelectedCell: (cell: string) => set({ selectedCell: cell }),
  setTableData: (data) => set({ tableData: data }),
  setCell: (key: string, value: string) => {
    set((state) => {
      const tableData = { ...state.tableData };
      tableData[key] = {
        ...(tableData?.[key] || {}),
        value,
      };
      return { tableData };
    });
  },
  setCellClassName: (key: string, className: string) => {
    set((state) => {
      const tableData = { ...state.tableData };
      tableData[key] = {
        ...(tableData?.[key] || {}),
        className: twMerge(tableData?.[key]?.className || "", className),
      };
      return { tableData };
    });
  },
}));
