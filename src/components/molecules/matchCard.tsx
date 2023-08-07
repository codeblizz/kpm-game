import React from 'react';
import Tr from '@/components/atoms/Table/Tr';
import Td from '@/components/atoms/Table/Td';
import IconFootball from '@/components/assets/icons/soccer';
import Button from '@/components/atoms/button';

function MatchCard({ matchList, setShowSlip }: any) {
  return (
    <div className='w-full'>
      {matchList.map((match: any, idx: number) => (
        <Tr
          key={idx}
          className='flex justify-between flex-1 gap-5 items-center bg-[#F5F5F5] w-full px-4 my-2 h-20 rounded-xl'
        >
          <Td className='grow-0 basis-1'>
            <IconFootball />
          </Td>
          <Td className='basis-3/12'>
            <label
              className='text-[12px] whitespace-nowrap overflow-ellipsis'
              htmlFor={`match_${idx}`}
            >
              {match.league}
            </label>
          </Td>
          <Td className='flex basis-5/12 flex-1 justify-start items-center'>
            {match.teams?.map((team: any, id: number) => (
              <Tr key={id} className='flex flex-1 items-center justify-between'>
                <Td key={id} className='flex items-center justify-start'>
                  <label
                    className='text-[12px] whitespace-nowrap'
                    htmlFor={`match_${id}`}
                  >
                    {id === 0 && team}
                  </label>
                </Td>
                <Td className='flex basis-4/5 justify-start items-center'>
                  {id === 0 ||
                    (id === 1 && (
                      <label className='bg-kpm text-black text-[10px] uppercase px-1'>
                        vs
                      </label>
                    ))}
                </Td>
                <Td className='flex items-center justify-start'>
                  <label
                    htmlFor={`match_${id}`}
                    className='text-[12px] whitespace-nowrap'
                  >
                    {id === 1 && team}
                  </label>
                </Td>
              </Tr>
            ))}
          </Td>
          <Tr className='flex space-x-2 basis-auto justify-start items-center'>
            <Td className='bg-kpm px-5 w-14 py-3 text-center font-semibold rounded-xl text-[10px]'>
              {match.odds['home_team']}
            </Td>
            <Td className='bg-black w-14 py-3 text-white px-5 text-center font-semibold rounded-xl text-[10px]'>
              {match.odds['draw']}
            </Td>
            <Td className='bg-black w-14 py-3 text-white px-5 text-center font-semibold rounded-xl text-[10px]'>
              {match.odds['away_team']}
            </Td>
            <Td className='bg-black flex flex-col w-14 py-3 text-white px-5 text-center font-semibold rounded-xl text-[10px]'>
              <Button className='flex justify-center items-center' onClick={() => setShowSlip(true)} loader={false}>
                +
              </Button>
            </Td>
          </Tr>
        </Tr>
      ))}
    </div>
  );
}

export default MatchCard;
