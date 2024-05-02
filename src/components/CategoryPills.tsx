import { Button } from './Button';

type CategoryPillsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'dark' : 'default'}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            onClick={() => onSelect(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
    </div>
  );
};
