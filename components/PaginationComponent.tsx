"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { IPagination } from "@/types";
import { Button } from "./ui/button";

interface PaginationProps {
  paginationData: IPagination;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  isPlaceholderData: boolean;
}

const PaginationComponent = ({
  paginationData,
  pageNum,
  setPageNum,
  isPlaceholderData,
}: PaginationProps) => {
  const { pageCount } = paginationData;

  const handlePreviousClick = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNum < pageCount) {
      setPageNum(pageNum + 1);
    }
  };

  const generatePaginationLinks = () => {
    const links = [];
    const boundaryCount = 2; // Number of buttons to display at the beginning and end
    const maxDisplay = 3; // Maximum number of buttons to display in the middle

    // If the page count is less than or equal to 5, display all page numbers
    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        links.push(
          <PaginationItem
            key={i}
            onClick={() => {
              setPageNum(i);
            }}
            className={`${
              i === pageNum
                ? "bg-custom-red text-white"
                : "bg-white text-custom-gray"
            } rounded cursor-pointer h-8 w-8 flex-center text-sm`}
          >
            {i}
          </PaginationItem>
        );
      }
    } else {
      // Determine the range of buttons to display based on pageNum
      let start = Math.max(1, pageNum - boundaryCount);
      let end = Math.min(pageCount, pageNum + boundaryCount);

      // Ensure that there are no more than 5 buttons displayed
      if (end - start + 1 < maxDisplay) {
        if (pageNum <= Math.ceil(maxDisplay / 2) + 1) {
          end = Math.min(start + maxDisplay - 1, pageCount);
        } else {
          start = Math.max(end - maxDisplay + 1, 1);
        }
      }

      // Add the first two counts before the ellipsis
      for (let i = 1; i <= Math.min(2, start - 1); i++) {
        links.push(
          <PaginationItem
            key={i}
            onClick={() => {
              setPageNum(i);
            }}
            className={`${
              i === pageNum
                ? "bg-custom-red text-white"
                : "bg-white text-custom-gray"
            } rounded cursor-pointer h-8 w-8 flex-center text-sm`}
          >
            {i}
          </PaginationItem>
        );
      }

      // Add ellipsis at the beginning if needed
      if (start > 1) {
        links.push(<PaginationEllipsis key="start-ellipsis" />);
      }

      // Generate the buttons within the determined range
      for (let i = start; i <= end; i++) {
        links.push(
          <PaginationItem
            key={i}
            onClick={() => {
              setPageNum(i);
            }}
            className={`${
              i === pageNum
                ? "bg-custom-red text-white"
                : "bg-white text-custom-gray"
            }  rounded cursor-pointer h-8 w-8 flex-center text-sm`}
          >
            {i}
          </PaginationItem>
        );
      }

      // Add ellipsis at the end if needed
      if (end < pageCount) {
        links.push(<PaginationEllipsis key="end-ellipsis" />);
      }

      // Add the last two counts after the ellipsis
      for (let i = Math.max(pageCount - 1, end + 1); i <= pageCount; i++) {
        links.push(
          <PaginationItem
            key={i}
            onClick={() => {
              setPageNum(i);
            }}
            className={`${
              i === pageNum
                ? "bg-custom-red text-white"
                : "bg-white text-custom-gray"
            } rounded cursor-pointer h-8 w-8 flex-center text-sm`}
          >
            {i}
          </PaginationItem>
        );
      }
    }

    return links;
  };

  return (
    <div className="flex">
      <Pagination className="">
        <PaginationContent className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <PaginationItem className="w-auto">
            <Button
              className={`w-auto text-custom-red font-bold cursor-pointer text-sm bg-white shadow-none hover:bg-white ${
                pageNum === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePreviousClick}
              disabled={isPlaceholderData || pageNum === 1}
            >
              Previous
            </Button>
          </PaginationItem>

          <div className="flex-center gap-2">{generatePaginationLinks()}</div>

          <PaginationItem className="w-auto">
            <Button
              className={`w-auto text-custom-red font-bold cursor-pointer text-sm bg-white shadow-none hover:bg-white ${
                pageNum === pageCount ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNextClick}
              disabled={isPlaceholderData || pageNum === pageCount}
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
