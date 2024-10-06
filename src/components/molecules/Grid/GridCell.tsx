import { useTableData } from "@/store/useTableData";
import { VirtualItem } from "@tanstack/react-virtual";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

export function GridCell({ virtualColumn, virtualRow }: { virtualColumn: VirtualItem; virtualRow: VirtualItem }) {
  const tableData = useTableData((s) => s.tableData);
  const selectedCell = useTableData((s) => s.selectedCell);

  const setCell = useTableData((s) => s.setCell);
  const setSelectedCell = useTableData((s) => s.setSelectedCell);

  const dataKey = useMemo(() => virtualRow.index + "," + virtualColumn.index, [virtualColumn.index, virtualRow.index]);

  const isSelected = useMemo(() => dataKey === selectedCell, [dataKey, selectedCell]);

  const cellData = useMemo(() => tableData?.[dataKey], [dataKey, tableData]);

  return (
    <div
      style={{
        width: `${virtualColumn.size}px`,
        height: `${virtualRow.size}px`,
        transform: `translateX(${virtualColumn.start + 24}px) translateY(${virtualRow.start + 24}px)`,
      }}
      className="border border-collapse absolute top-0 left-0 "
      onClick={() => setSelectedCell(dataKey)}
    >
      <input
        type="text"
        className={twMerge(
          "w-full h-full p-2 outline-emerald-500 rounded-none ",
          isSelected ? "bg-emerald-100 " : "",
          cellData?.className || ""
        )}
        value={cellData?.value || ""}
        onChange={(e) => setCell(dataKey, e.target.value)}
      />
    </div>
  );
}
