import {createContext, useContext} from 'react';

export interface IGapContainerValue {
  direction: 'row' | 'column';
  gap: number;
}
const GapContainerContext = createContext<IGapContainerValue>({
  direction: 'row',
  gap: 0,
});

export const GapContainerProvider = GapContainerContext.Provider;

export const useGapContainer = () => {
  return useContext(GapContainerContext);
};
