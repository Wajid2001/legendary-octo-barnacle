import { useTableData } from "@/store/useTableData";
import { VirtualItem } from "@tanstack/react-virtual";
import { useMemo } from "react";

export function GridCell({ virtualColumn, virtualRow }: { virtualColumn: VirtualItem; virtualRow: VirtualItem }) {
  const tableData = useTableData((s) => s.tableData);
  const setCell = useTableData((s) => s.setCell);

  const dataKey = useMemo(() => virtualRow.index + "," + virtualColumn.index, [virtualColumn.index, virtualRow.index]);

  return (
    <div
      style={{
        width: `${virtualColumn.size}px`,
        height: `${virtualRow.size}px`,
        transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
      }}
      className="border border-collapse absolute top-0 left-0 "
    >
      <input
        type="text"
        className="w-full h-full p-2 outline-emerald-500 rounded-none transition-all "
        value={tableData?.[dataKey] || ""}
        onChange={(e) => setCell(dataKey, e.target.value)}
      />
    </div>
  );
}
