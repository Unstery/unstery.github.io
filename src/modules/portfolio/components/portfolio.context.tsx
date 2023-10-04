import { createContext } from 'react';

import type { RefetchType } from '../models';
import type { PortfolioRoot } from '../../../api/models';
import type { PortfolioTree } from '../models/portfolio-tree.model';

const defaultValue: PortfolioTree = {
  portfolioRoot: {} as PortfolioRoot,
  isLoading: false,
  refetch: (() => {}) as RefetchType,
};

export const PortfolioContext = createContext<PortfolioTree>(defaultValue);
