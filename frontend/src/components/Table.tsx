'use client';

import { Plant } from "@/types/Plant";
import DataTable from "react-data-table-component";
import { ExpanderComponentProps } from "react-data-table-component";

type Props = {
    // your props here
    plants: Plant[]
}

export default function Table(props: Props){
    // const data = props.plants;
    // const ExpandedComponent = ({ data }: ExpanderComponentProps<Plant>) => (
    //     <pre>{JSON.stringify(data, null, 2)}</pre>
    //   );
    
    const tableColumns = [
        {
          name: 'Scientific Title',
          selector: (row: Plant) => row.scientificName,
          sortable: true,
        },
        {
          name: 'Verbatim Taxonomy Ranks',
          selector: (row: Plant) => row.verbatimTaxonRanks,
          sortable: true,
        },
        {
          name: 'Taxonomic Status',
          selector: (row: Plant) => row.taxonomicStatus,
          sortable: true,
        },
        {
          name: 'Taxononomy Remarks',
          selector: (row: Plant) => row.taxonRemarks,
        },
        {
          name: 'References',
          selector: (row: Plant) => row.references,
        },
      ];

    return(
        <DataTable
			columns={tableColumns}
			data={props.plants}
            selectableRows
            // pagination -> causes hydration errors + no longer needed; will create custom pagination to deal with larga dataset
            // expandableRows
            // expandableRowsComponent={ExpandedComponent}
		/>
    );
}