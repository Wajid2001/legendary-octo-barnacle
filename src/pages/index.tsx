import { Toolbar } from "@/components/molecules/Toolbar";
import { Grid } from "@/components/organisms/Grid";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col ">
      <Toolbar />
      <Grid />
    </div>
  );
}
