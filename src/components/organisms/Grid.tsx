import { useGrid } from "@/store/useGrid";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useRef } from "react";
import { GridCell } from "../molecules/GridCell";

export function Grid() {
  const parentRef = useRef(null);

  const nRows = useGrid((s) => s.nRows);
  const nCols = useGrid((s) => s.nCols);

  const rowVirtualizer = useVirtualizer({
    count: nRows,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: nCols,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="overflow-auto w-screen h-[80vh] border border-collapse mt-auto">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: `${columnVirtualizer.getTotalSize()}px`,
        }}
        className="relative"
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <React.Fragment key={virtualRow.key}>
            {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
              <GridCell virtualColumn={virtualColumn} virtualRow={virtualRow} key={virtualColumn.key} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
