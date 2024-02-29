"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { IPagination } from "@/types";

interface PaginationProps {
  paginationData: IPagination;
  //   onPageChange: (page: number) => void;
}

const PaginationComponent = ({
  paginationData,
}: // onPageChange,
PaginationProps) => {
  const { page, pageCount } = paginationData;
  const [pageNum, setPageNum] = useState(1);

  const generatePaginationLinks = () => {
    const links = [];

    for (let i = 1; i <= pageCount; i++) {
      links.push(
        <PaginationItem
          key={i}
          //   onClick={() => onPageChange(i)}
          onClick={() => setPageNum(i)}
          className={`${
            i === pageNum
              ? "bg-custom-red text-white"
              : "bg-white text-gray-700"
          } mx-1 rounded cursor-pointer p-3`}
        >
          {i}
        </PaginationItem>
      );
    }

    return links;
  };

  return (
    <div>
      <Pagination className="">
        <PaginationContent className="flex flex-wrap gap-2">
          <PaginationItem className="w-auto text-custom-red font-bold">
            previous
          </PaginationItem>

          {generatePaginationLinks()}

          {/* <PaginationEllipsis /> */}

          <PaginationItem className="w-auto text-custom-red font-bold">
            Next
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
