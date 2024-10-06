import { create } from "zustand";

interface UseTableData {
  tableData: Record<string, string>;
  setTableData: (data: Record<string, string>) => void;
  setCell: (key: string, value: string) => void;
}

export const useTableData = create<UseTableData>((set) => ({
  tableData: {},

  setTableData: (data) => set({ tableData: data }),
  setCell: (key: string, value: string) => {
    set((state) => {
      const tableData = { ...state.tableData };
      tableData[key] = value;
      return { tableData };
    });
  },
}));