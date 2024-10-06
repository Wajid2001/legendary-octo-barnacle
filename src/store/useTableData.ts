import { create } from "zustand";

export const useTableData = create<{
  tableData: Record<string, string>[],
  setTableData: (data: Record<string, string>[]) => void
}>((set)=>({
  tableData: [],

  setTableData: (data) => set({ tableData: data }),
}))