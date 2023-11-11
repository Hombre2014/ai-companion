'use client';

import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchInput = () => {
  return (
    <div className="relative">
      <Search className="w-4 h-4 absolute top-3 left-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;
