import { useState } from 'react';
import { useTone } from '../../theme/tones';
import { cn } from '../../utils/cn';
import Button from './Button';

export default function SearchBar({ defaultValue = '', placeholder = 'Card name, set or number', onSubmit, className }) {
  const tone = useTone();
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value.trim());
  };

  return (
    <form role="search" onSubmit={handleSubmit} className={cn('flex items-center gap-3 border-b-2 pb-3', tone.field, className)}>
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn('min-w-0 flex-1 bg-transparent text-lg outline-none md:text-xl', tone.field)}
      />
      <Button type="submit" variant={tone.button}>Search</Button>
    </form>
  );
}
