'use client';

import { Category } from '@prisma/client';

interface CategoriesProps {
  data: Category[];
}

export const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
};
