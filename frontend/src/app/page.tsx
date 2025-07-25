import Table from "@/components/Table";
import TableContainer from "@/components/TableContainer";
import { getPlantById } from "@/services/plantService";
import { Plant } from "@/types/Plant";

export default async function Home() {
  const initialPage = 1;
  const pageSize = 30;
  // get plant by ID from the api;
  const plant: Plant = await getPlantById(6);
  // normalize the plant result for predictable outputs
  const soloPlant:Plant[] = plant ? [plant] : [];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <h2>Multi-record table</h2>
          <TableContainer
            initialPage = {initialPage}
            pageSize = {pageSize}
          />
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
