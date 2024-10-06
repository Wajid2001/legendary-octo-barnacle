import { GridSizeEdit } from "../molecules/Grid/GridSizeEdit";
import { CellFormatter } from "../molecules/Toolbar/CellFormatter";

export const Toolbar = () => {
  return (
    <div className="p-2">
      <div className="py-2 bg-white shadow-md rounded-xl border flex flex-row divide-x-2 justify-center overflow-auto">
        <GridSizeEdit />

        <CellFormatter />
      </div>
    </div>
  );
};
