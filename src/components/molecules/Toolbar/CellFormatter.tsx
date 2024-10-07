import { useTableData } from "@/store/useTableData";
import { Button, ButtonGroup } from "@nextui-org/react";
import { GrTextAlignCenter, GrTextAlignLeft, GrTextAlignRight } from "react-icons/gr";

const TextAlignments = [
  {
    icon: <GrTextAlignLeft />,
    name: "left",
    className: "text-left",
  },
  {
    icon: <GrTextAlignCenter />,
    name: "center",
    className: "text-center",
  },
  {
    icon: <GrTextAlignRight />,
    name: "right",
    className: "text-right",
  },
];

export const CellFormatter = () => {
  const selectedCell = useTableData((s) => s.selectedCell);

  const setCellClassName = useTableData((s) => s.setCellClassName);

  return (
    <div className="px-2 items-center flex">
      <ButtonGroup isDisabled={!selectedCell} variant="ghost">
        {TextAlignments.map((alignment) => (
          <Button
            key={alignment.name}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            title="Text alignment"
            onClick={() => setCellClassName(selectedCell, alignment.className)}
          >
            {alignment.icon}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
