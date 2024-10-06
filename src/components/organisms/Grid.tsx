import { useGrid } from "@/store/useGrid";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useRef } from "react";
import { GridCell } from "../molecules/Grid/GridCell";
import { GridHeadColCell } from "../molecules/Grid/GridHeadColCell";
import { GridHeadRowCell } from "../molecules/Grid/GridHeadRowCell";

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
    <div className="w-[calc(100%-1rem)] h-full overflow-hidden rounded-xl m-2 border shadow-md">
      <div ref={parentRef} className="overflow-auto w-full h-full mt-auto ">
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: `${columnVirtualizer.getTotalSize()}px`,
          }}
          className="relative"
        >
          {/* Render header  */}

          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <React.Fragment key={virtualRow.key}>
              {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
                <GridCell virtualColumn={virtualColumn} virtualRow={virtualRow} key={virtualColumn.key} />
              ))}
            </React.Fragment>
          ))}

          <div className="sticky top-0" style={{ zIndex: 1 }}>
            {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
              <GridHeadColCell virtualColumn={virtualColumn} key={virtualColumn.key} />
            ))}
          </div>

          <div className="sticky left-0" style={{ zIndex: 1 }}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => (
              <GridHeadRowCell virtualRow={virtualRow} key={virtualRow.key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}