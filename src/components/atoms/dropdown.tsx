import { useState } from 'react';
import { cn } from '@/helpers/lib';
import Card from '@/components/atoms/card';
import { useClickOutside } from '@/hooks/useClickOutside';
import { DropdownList, ItemType } from '@/types/dropdown.type';
import IconChevronDown from '@/components/assets/icons/arrowDown';

export function Dropdown({
  dropdownList,
  className,
  panelClass,
  defaultValue
}: DropdownList) {

  const [show, setShow] = useState(false);
  const [listItems, setListItems] = useState<ItemType>({
    value: defaultValue.value,
    label: defaultValue.label,
  });

  let domNode = useClickOutside(() => {
    setShow(false);
  })

  return (
    <div
      className={cn(
        'relative z-50 w-24 flex justify-center items-center',
        className
      )}
      ref={domNode}
    >
      <div className='flex w-20 rounded-md h-full px-1 justify-between items-center'>
        <span className='w-7 h-[50%] text-center'>{listItems.value}</span>
        <span className='w-7 h-[50%] text-center'>{listItems.label}</span>
        <IconChevronDown
          onClick={() => setShow(!show)}
          className='w-[20px] p-[0.5px] h-[20px] cursor-pointer'
        />
      </div>
      {show ? (
        <Card className={cn('absolute w-20 bg-white top-12', panelClass)}>
          {dropdownList?.map((list: ItemType, idx: number) => (
            <div
              key={idx}
              onClick={() =>
                setListItems({ value: list.value, label: list.label })
              }
              className='grid grid-cols-2 cursor-pointer justify-start items-center w-full p-1 px-2 border text-black'
            >
              <span className='w-full'>{list.label}</span>
              <span className='w-full'>{list.value}</span>
            </div>
          ))}
        </Card>
      ) : null}
    </div>
  );
}
