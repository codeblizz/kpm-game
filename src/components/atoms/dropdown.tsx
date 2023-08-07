import { cn } from '@/helpers/lib';
import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import IconChevronDown from '@/components/assets/icons/arrowDown';
import { Country, DropdownList, ItemType } from '@/types/dropdown.type';
import Card from '@/components/atoms/card';

export function Dropdown({
  dropdownList,
  listItems,
  className,
  panelClass,
  setListItems,
}: DropdownList) {
  const [show, setShow] = useState(false);

  return (
    <Popover className={cn('relative z-50 w-24 flex justify-center items-center', className)}>
      <div className='flex w-full justify-center items-center space-x-2'>
        <span>{listItems.flag}</span>
        <span>{listItems.shortName}</span>
        <Popover.Button onClick={() => setShow(!show)}>
          <IconChevronDown className='w-4 h-4' />
        </Popover.Button>
      </div>
      {show && (
        <Card className={cn('absolute bg-white top-10', panelClass)}>
          {dropdownList?.map((item: ItemType, idx: number) => (
            <Popover.Panel
              key={idx}
              onClick={() =>
                setListItems({ shortName: item.value, flag: item.label })
              }
              className='grid grid-cols-2 cursor-pointer justify-start items-center w-full p-1 px-2 border text-black'
            >
              <span className='w-full'>{item.label}</span>
              <span className='w-full'>{item.value}</span>
            </Popover.Panel>
          ))}
        </Card>
      )}
    </Popover>
  );
}
