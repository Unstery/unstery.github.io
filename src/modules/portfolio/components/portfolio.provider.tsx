import { useMemo, type PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { portfolioService } from '../../../api/services/portfolio.service';
import { PortfolioContext } from './portfolio.context';
import type { PortfolioTree } from '../models/portfolio-tree.model';

export const PortfolioProvider = ({ children, }: PropsWithChildren) => {
  const { i18n } = useTranslation();

  const {
    data: portfolioRoot,
    isSuccess,
    isLoading,
    refetch
  } = useQuery(
    ['product-tree', i18n.language],
    () => portfolioService.fetchPortfolio(),
    { cacheTime: 0 }
  );

  const value = useMemo(() => ({
    portfolioRoot,
    isLoading,
    refetch
  }), [portfolioRoot, isLoading, refetch]);

  return (
    <PortfolioContext.Provider value={value as PortfolioTree}>
      {isSuccess ? children : <div />}
    </PortfolioContext.Provider>
  );
};
