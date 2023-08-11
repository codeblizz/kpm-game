import { Match } from '@/types/matches.type';
import { Slots } from '@/types/slots.type';
import { MainRepositoryInterface } from '@/types/mainRepository.type';

export interface HomeInterface extends MainRepositoryInterface {
  getAllMatches: () => Promise<Match>;
  getAllSlots: () => Promise<Slots>;
}
