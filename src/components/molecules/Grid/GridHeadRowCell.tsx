import { VirtualItem } from "@tanstack/react-virtual";

export const GridHeadRowCell = ({ virtualRow }: { virtualRow: VirtualItem }) => {
  return (
    <div
      style={{
        height: `${virtualRow.size}px`,
        top: `${virtualRow.start + 24}px`,
      }}
      className="absolute w-6 bg-gray-50 shadow z-10 border justify-center items-center flex truncate overflow-hidden"
      title={`${virtualRow.index + 1}`}
    >
      {virtualRow.index + 1}
    </div>
  );
};
