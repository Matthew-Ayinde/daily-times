import React from "react";

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h1>categoryName: {params.category}</h1>
      CategoryRoute
    </div>
  );
};

export default CategoryRoute;
