import { VirtualItem } from "@tanstack/react-virtual";

export function GridHeadColCell({ virtualColumn }: { virtualColumn: VirtualItem }): React.JSX.Element {
  return (
    <div
      style={{
        width: `${virtualColumn.size}px`,
        left: `${virtualColumn.start + 24}px`,
      }}
      className="absolute top-0 h-6 bg-gray-50 shadow z-10 border text-center items-center flex truncate overflow-hidden justify-center"
      title={`${virtualColumn.index + 1}`}
    >
      {virtualColumn.index + 1}
    </div>
  );
}
