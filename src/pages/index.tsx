import { Grid } from "@/components/organisms/Grid";
import { Toolbar } from "@/components/organisms/Toolbar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col bg-gray-100 ">
      <Toolbar />

      <Grid />
    </div>
  );
}
