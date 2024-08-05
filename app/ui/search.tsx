'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
<<<<<<< HEAD
  function handleSearch(term: string) {
    console.log('search', term);
=======
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
>>>>>>> 23483943df099408e5239dfcf880d4af810dbf08
  }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
<<<<<<< HEAD
        onChange={(e) =>{
          handleSearch(e.target.value);
        }}
=======
        onChange={(a) => {
          handleSearch(a.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
>>>>>>> 23483943df099408e5239dfcf880d4af810dbf08
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
