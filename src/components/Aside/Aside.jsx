import React from 'react';
import { ladyVirtualImage } from '../../assets/images/images';
import { BaseButton } from '../Button';
import { ArrowRight, Triangle } from '../../assets/icons/icons';
import { useTrending } from '../../hooks';
import { Loader } from '../Loader';

export const Aside = () => {
  const { coins, isPending } = useTrending();

  return (
    <section className="max-w-[426px] w-full flex flex-col gap-5">
      {/* Get started for free */}
      <div className="flex flex-col gap-[19px] justify-center items-center rounded-2xl pt-[31px] pb-[49.5px] bg-[var(--blue)]">
        <div className="flex flex-col gap-[14px] text-white text-center max-w-[327px] w-full">
          <h1 className="font-bold text-2xl leading-10 max-w-[268px] w-full mx-auto">
            Get Started with KoinX for FREE
          </h1>
          <p className="text-sm leading-6 text-center font-medium text-[var(--white-100)]">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <img
          src={ladyVirtualImage}
          alt=""
          className="w-[178.66px] h-[166.22px] mx-auto"
        />
        <BaseButton
          variant="secondary"
          className="max-w-[237px] w-full flex gap-[6px]"
        >
          Get Started for FREE
          <img src={ArrowRight} alt="" className="w-5 h-5" />
        </BaseButton>
      </div>
      {/* Trendong Coins */}
      <div className="flex flex-col bg-white gap-6 p-6 rounded-lg">
        <h2 className="text-[var(--black)] text-2xl font-semibold leading-[28.8px]">
          Trending Coins (24h)
        </h2>
        {isPending && (
          <div className="grid place-items-center">
            <Loader />
          </div>
        )}
        {!isPending && (
          <>
            {coins?.slice(0, 3).map((coin) => {
              return (
                <div className="flex flex-col gap-5" key={coin?.item?.coin_id}>
                  <div className="flex justify-between">
                    <div className="flex gap-[6px]">
                      <img src={coin?.item?.small} alt="" className="w-6 h-6" />
                      <p className="tex-base leading-6 font-medium text-[var(--black)]">
                        {coin?.item?.name} ({coin?.item?.symbol})
                      </p>
                    </div>
                    <div className=" py-[4.5px] px-[10px] bg-[var(--green)] flex items-center justify-between gap-[5.5px]">
                      <img src={Triangle} alt="" />
                      <p className="text-[var(--green-50)] text-base leading-[19.36px]">
                        {coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(
                          2,
                        )}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};
