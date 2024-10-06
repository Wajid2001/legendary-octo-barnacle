import { useGrid } from "@/store/useGrid";
import { Input } from "@nextui-org/react";

export const GridSizeEdit = () => {
  const nRows = useGrid((s) => s.nRows);
  const nCols = useGrid((s) => s.nCols);

  const setNRows = useGrid((s) => s.setNRows);
  const setNCols = useGrid((s) => s.setNCols);

  return (
    <div className="flex flex-row gap-2 max-w-sm">
      <Input
        value={`${nRows}`}
        type="number"
        label="Rows"
        onChange={(e) => setNRows(parseInt(e.target.value))}
        required
        size="sm"
      />
      <Input
        value={`${nCols}`}
        type="number"
        label="Columns"
        onChange={(e) => setNCols(parseInt(e.target.value))}
        required
        size="sm"
      />
    </div>
  );
};
