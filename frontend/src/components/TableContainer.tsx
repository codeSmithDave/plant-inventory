'use client'

import { Plant } from "@/types/Plant";
import Table from "./Table";
import Pagination from "./Pagination";
import { useState } from "react";

type Props = {
    plants: Plant[]
};

export default function TableContainer(props: Props) {
    const [activePage, setActivePage] = useState(1);

    function setNewPage(page: number){
        setActivePage(page);
    }
    
    return (
        <div>
            <Table
                plants={props.plants}
            />
            <Pagination
                activePage={activePage}
                totalPages={props.plants.length / 2}
                onPageChange={setNewPage}
            />
        </div>
    );
}