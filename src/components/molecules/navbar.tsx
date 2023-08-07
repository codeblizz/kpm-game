import { cn } from '@/helpers/lib';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '@/components/atoms/nav';
import { signOut, useSession } from 'next-auth/react';
import CountryList from '@/data/country.json';
import NextLink from '@/components/atoms/link';
import { Country } from '@/types/dropdown.type';
import { Dropdown } from '@/components/atoms/dropdown';
import IconAddUser from '@/components/assets/icons/userIcon';
import Button from '@/components/atoms/button';
import useAuthRedirect from '@/hooks/useAuthRedrect';

function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [country, setCountry] = useState<Country>({
    flag: '🇦🇪',
    shortName: 'UAE',
  });

  const logOut = async () => {
    localStorage.removeItem('accessToken');
    return await signOut({ callbackUrl: '/login', redirect: true });
  }

  // useAuthRedirect(router.route, false);

  return (
    <Nav className='bg-kpm sticky z-50 flex items-center justify-between text-sm w-[100%] py-2 px-16 h-14'>
      <NextLink className='text-xl font-semibold' href='/'>{'Logo'}</NextLink>
      <div className='flex space-x-2'>
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
