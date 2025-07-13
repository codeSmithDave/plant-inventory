'use client'

import { Plant } from "@/types/Plant";
import Table from "./Table";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { PaginationFilterResults } from "@/types/PaginationFilterResults";
import { getPlants } from "@/services/plantService";
import { PaginateConfig } from "@/types/PaginateConfig";

type Props = {
    // plants: Plant[]
    // plants: PaginationFilterResults<Plant>
    initialPage: number,
    pageSize: number,
};

export default function TableContainer(props: Props) {
    // const [currentPage, setCurrentPage] = useState(1);
    const [plantsDto, setPlantsDto] = useState<PaginationFilterResults<Plant>>();
    const [paginateConfig, setPaginateConfig] = useState<PaginateConfig>({
        currentPage: props.initialPage,
        pageSize: props.pageSize,
    });

    // update the current page based on user (click event) inputs on the pagination controls
    function setNewPage(page: number){
        // setCurrentPage(page);
        setPaginateConfig(prev => ({
            ...prev,
            currentPage: page
        }));
    }

    useEffect( () => {
        // request new records from API when the user selects a new page from pagination form
        async function fetchPlants(){
            const plantsApiDto: PaginationFilterResults<Plant> = await getPlants(props.initialPage, props.pageSize);
            setPlantsDto( plantsApiDto );
        }
        fetchPlants();
    }, [paginateConfig.currentPage]);
    
    return (
        <div>
            <Table
                // plants={props.plants}
                plants={plantsDto?.data}
            />
            <Pagination
                paginateConfig={paginateConfig}
                activePage={paginateConfig.currentPage}
                totalPages={plantsDto?.totalPages}
                onPageChange={setNewPage}
            />
        </div>
    );
}