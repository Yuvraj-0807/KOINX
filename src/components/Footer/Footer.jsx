import React from 'react';
import { useMarketPerformance } from '../../hooks';
import { Loader } from '../Loader';
import TradingViewWidget from '../TradingViewWidget/TradingViewWidget';

export const Footer = () => {
  const { data, isLoadingPerformance } = useMarketPerformance(true);

  const trending = data?.data;

  return (
    <div className="pt-[68px] pb-[97.89px]">
      <div className="wrapper">
        <div>
          <h1 className="font-medium text-2xl leading-9 text-[#202020]">
            You May Also Like
          </h1>
          <TradingViewWidget />

          {isLoadingPerformance && trending === undefined ? (
            <div className="grid place-items-center">
              <Loader />
            </div>
          ) : null}

          {!isLoadingPerformance && (
            <div className="flex overflow-x-auto gap-[10px]">
              {trending?.map((coin) => {
                return (
                  <div
                    key={coin?.id}
                    className="rounded-[10px] border border-[#E3E3E3] p-[17px] max-w-[252px] w-full flex flex-col flex-shrink-0 gap-3"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src={coin?.image}
                        alt=""
                        className="w-[26px] h-[26px]"
                      />
                      <div className="flex items-center">
                        <p className="text-base text-[#202020] leading-[19.36px]">
                          {coin?.symbol}
                        </p>
                        <div className="p-[2.75px] bg-[var(--green)] text-[#32BE88] text-xs leading-[14.52px]">
                          {coin?.market_cap_change_percentage_24h.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                    <h1 className="font-medium text-xl text-[#171717]">
                      {coin?.market_cap_change_percentage_24h}
                    </h1>
                    <img src="" alt="" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
