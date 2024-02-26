import NewsComponent from '@/components/NewsComponent';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const News = () => {
  return (
    <div>
      <NewsComponent />

      <Pagination className="flex justify-center">
        <PaginationContent className="flex flex-wrap gap-2">
          <PaginationItem className="w-auto">
            <PaginationPrevious href="previous" className="text-red-700 font-bold"> previous </PaginationPrevious>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">11</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#" className='active-pagination'>
              12
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">13</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">14</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">15</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationLink href="#">26</PaginationLink>
          </PaginationItem>
          <PaginationItem className="w-auto">
            <PaginationNext href="next" className='text-red-700 font-bold'>Next</PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default News;
