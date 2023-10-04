import type { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

import type { PortfolioRoot } from '../../../api/models';

export type RefetchType = (
  options?: RefetchOptions | undefined
) => Promise<QueryObserverResult<PortfolioRoot, unknown>>;

export interface PortfolioTree {
  portfolioRoot: PortfolioRoot;
  isLoading: boolean;
  refetch: RefetchType
}
