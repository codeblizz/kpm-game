import { cn } from '@/helpers/lib';
import React, { ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import Card from '@/components/atoms/card';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import NextLink from '@/components/atoms/link';
import IconEdit from '@/components/assets/icons/editIcon';
import IconCaution from '@/components/assets/icons/caution';
import IconClose from '@/components/assets/icons/closeIcon';

function BetSlipCard({
  href,
  isOpen,
  hasLink,
  setOpen,
  className,
  buttonText,
  modalTitle,
  isBetEmpty,
  extraProps,
  description,
  okButtonAction,
  cancelButtonAction,
}: any) {
  return (
    <Dialog
      as='div'
      open={isOpen}
      onClose={() => setOpen(false)}
      className={cn('relative', className)}
    >
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
      <div
        className={cn(
          'fixed inset-0 rounded-t-2xl bg-black/90 flex top-[10%] left-[32%] px-3 pb-3 text-center justify-center overflow-y-auto w-[45%] h-[40%] md:w-[40%] md:h-[75%]',
          extraProps.backgroundColor
          )}
      >
        <IconClose onClick={() => setOpen(false)} className='absolute cursor-pointer bg-white/20 text-neutral-400 h-5 w-5 top-[5%] right-[5%]' />
        <Dialog.Panel
          className={'flex flex-col w-full justify-center items-center'}
        >
          <Dialog.Title
            className={cn(
              'flex w-full space-x-2 justify-start items-center mt-5'
            )}
          >
            <span className='bg-kpm rounded-full w-3 h-3'></span>
            <span className='tracking-tight uppercase font-light text-2xl '>
              {modalTitle}
            </span>
          </Dialog.Title>
          {isBetEmpty ? (
            <Dialog.Description className={cn(
                'flex h-80 flex-col items-center justify-center w-full space-y-5 mt-5 my-1',
              )}>{'Your betslip is empty'}</Dialog.Description>
          ) : (
            <Dialog.Description
              className={cn(
                'flex h-80 flex-col space-y-5 mt-5 my-1',
                extraProps.descriptionColor
              )}
            >
              <span className='w-96 px-3 text-sm items-center flex justify-between h-10 text-gray-300 bg-neutral-800'>
                {'Single'}{' '}
                <Button className='underline underline-offset-4' loader={false}>
                  {'Remove All'}
                </Button>
              </span>
              <Card className='h-[80%] border-none shadow-none'>
                <span></span>
              </Card>
              <input
                type='text'
                name='bet'
                placeholder={`${description}`}
                className='bg-neutral-700 h-12 mt-5 px-3'
              />
            </Dialog.Description>
          )}
          {!isBetEmpty && <span className='w-96 px-3 text-sm items-center flex justify-between h-8 text-gray-300'>
            <span>{'Possible Win:'}</span>
            <span className='text-kpm'>{'$0'}</span>
          </span>}
          <span className='w-96 mt-2 px-3 items-center flex justify-evenly h-10 text-gray-300 bg-neutral-800'>
            <IconCaution className='text-kpm w-4 h-4 float-left' />
            <span className='text-sm w-auto'>
              {'To place your bet, Please Sign In or Register'}
            </span>
          </span>
          <span className='w-96 mt-2 items-center flex justify-between h-10 text-gray-300'>
            <span className='flex justify-center items-center w-full h-full'>
              {[5, 10, 20].map((val: number, idx: number) => (
                <span
                  key={idx}
                  className='border w-full border-black rounded-sm bg-neutral-800'
                >
                  {val}
                </span>
              ))}
            </span>
            <Button
              className='border w-auto py-1 px-2 border-black rounded-sm bg-neutral-800'
              loader={false}
              onClick={() => {}}
            >
              {<IconEdit className='h-4 w-5' />}
            </Button>
          </span>
          <div className='flex justify-center mt-5 items-end space-x-4 grow'>
            {buttonText?.map((text: string, idx: number) => (
              <div key={idx} className=''>
                {hasLink ? (
                  <NextLink
                    href={href}
                    className={cn(
                      'rounded-md uppercase py-2 tracking-wider w-96 bg-kpm font-bold text-black',
                      `${text === '' ? 'hidden' : ''}`
                    )}
                    onClick={
                      idx === 0
                        ? () => cancelButtonAction(idx)
                        : () => okButtonAction(idx)
                    }
                  >
                    {text}
                  </NextLink>
                ) : (
                  <Button
                    type={'submit'}
                    name={text}
                    loader={false}
                    autoFocus={false}
                    disabled={isBetEmpty ? true : false}
                    onClick={idx === 0 ? cancelButtonAction : okButtonAction}
                    className={cn(
                      'rounded-md uppercase tracking-wider  py-2 w-96 font-bold text-black',
                      `${isBetEmpty ? 'cursor-not-allowed bg-neutral-800' : 'cursor-pointer bg-kpm'}`
                    )}
                  >
                    {text}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default BetSlipCard;
