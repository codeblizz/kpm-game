import { cn } from '@/helpers/lib';
import { useRouter } from 'next/router';
import Nav from '@/components/atoms/nav';
import CountryList from '@/data/country.json';
import Button from '@/components/atoms/button';
import NextLink from '@/components/atoms/link';
import { ItemType, Country } from '@/types/dropdown.type';
import React, { useState, useMemo, useCallback } from 'react';
// import useCountryList from '@/hooks/useCountryList';
import { signOut, useSession } from 'next-auth/react';
import { Dropdown } from '@/components/atoms/dropdown';
import IconAddUser from '@/components/assets/icons/userIcon';

function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const defaultValue = { value: '🇦🇪', label: 'UAE' } as ItemType;
  const logOut = async () => {
    localStorage.removeItem('accessToken');
    return await signOut({ callbackUrl: '/login', redirect: true });
  };

  const countryList = useMemo(() => {
    return CountryList?.map((c: Country) => ({
      label: c?.flag,
      value: c?.shortName
    }))
  }, []);

  return (
    <Nav className='bg-kpm fixed z-50 flex items-center justify-between text-sm w-[100%] py-2 px-16 h-14'>
      <NextLink className='text-xl font-semibold' href='/'>
        {'Logo'}
      </NextLink>
      <div className='flex space-x-2'>
        <Dropdown 
          className='' 
          panelClass={''} 
          defaultValue={defaultValue}
          dropdownList={countryList} 
        />
        {status === 'authenticated' ? (
          <Button
            loader={false}
            onClick={logOut}
            className={cn(
              'flex items-center justify-between p-2 rounded-md',
              'bg-red-600 text-white'
            )}
          >
            {'Logout'}
          </Button>
        ) : router.pathname === '/login' ? (
          <NextLink
            href={'/register'}
            className={cn(
              'flex items-center justify-between p-2 rounded-md',
              'text-white bg-black w-24'
            )}
          >
            {<IconAddUser className='mr-1' />}
            {'Register'}
          </NextLink>
        ) : (
          <NextLink
            href={'/login'}
            className={cn(
              'flex items-center justify-between p-2 rounded-md',
              'bg-white text-black'
            )}
          >
            {'Login'}
          </NextLink>
        )}
      </div>
    </Nav>
  );
}

export default NavBar;
