"use client";

import { BASE_URL } from "@/lib/constants";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useState } from "react";
import ContentCard from "@/components/ContentCard";

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h1>categoryName: {params.category}</h1>
      CategoryRoute
    </div>
  );
};

export default CategoryRoute;
