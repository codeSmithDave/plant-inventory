import Table from "@/components/Table";
import dynamic from "next/dynamic";
import Image from "next/image";
import DataTable from "react-data-table-component";

export default function Home() {
  const plants: Plant[] = [
    {
      id: 1,
      scientificName: "Rosa damascena",
      verbatimTaxonRanks: "species",
      taxonomicStatus: "accepted",
      taxonRemarks: "Damask rose, cultivated for its fine fragrance.",
      references: "https://en.wikipedia.org/wiki/Rosa_damascena"
    },
    {
      id: 2,
      scientificName: "Malus domestica2",
      verbatimTaxonRanks: "subspecies",
      taxonomicStatus: "unchecked",
      taxonRemarks: "Damask rose, cultivated for its fine fragrance",
      references: "https://en.wikipedia.org/wiki/Rosa_damascena"
    },
    {
      id: 3,
      scientificName: "Malus domestica3",
      verbatimTaxonRanks: "species",
      taxonomicStatus: "unchecked",
      taxonRemarks: "Damask rose, cultivated for its fine fragrance",
      references: "https://en.wikipedia.org/wiki/Rosa_damascena"
    },
    {
      id: 4,
      scientificName: "Malus domestica4",
      verbatimTaxonRanks: "subspecies",
      taxonomicStatus: "accepted",
      taxonRemarks: "Damask rose, cultivated for its fine fragrance",
      references: "https://en.wikipedia.org/wiki/Rosa_damascena"
    },
    {
      id: 5,
      scientificName: "Malus domestica5",
      verbatimTaxonRanks: "species",
      taxonomicStatus: "synonym",
      taxonRemarks: "Damask rose, cultivated for its fine fragrance",
      references: "https://en.wikipedia.org/wiki/Rosa_damascena"
    }
  ];

  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Table
          plants={plants}
        ></Table>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
