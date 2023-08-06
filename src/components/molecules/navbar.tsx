import { cn } from '@/helpers/lib';
import React, { useState } from 'react';
import Nav from '@/components/atoms/nav';
import Button from '@/components/atoms/button';
import { Country } from '@/types/dropdown.type';
import CountryList from '@/data/country.json';
import { Dropdown } from '@/components/atoms/dropdown';
import IconAddUser from '@/components/assets/icons/userIcon';

function NavBar() {
  const [country, setCountry] = useState<Country>({
    flag: '🇦🇪',
    shortName: 'UAE',
  });

  return (
    <Nav className='bg-kpm flex space-x-4 items-center justify-end text-sm w-[100%] py-2 px-16 h-14'>
      <Dropdown
        panelClass={''}
        className=''
        listItems={country}
        setListItems={setCountry}
        dropdownList={CountryList?.map(
          (c: { flag: string; shortName: string }) => ({
            label: c?.flag,
            value: c?.shortName,
          })
        )}
      />
      {['Login', 'Register'].map((btn: string, idx: number) => (
        <Button
          key={idx}
          className={cn(
            'flex items-center justify-between p-2 rounded-md',
            idx === 1 ? 'text-white bg-black w-24' : 'bg-white text-black'
          )}
        >
          {idx === 1 && <IconAddUser className='mr-1' />}
          {btn}
        </Button>
      ))}
    </Nav>
  );
}

export default NavBar;
