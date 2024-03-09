import React from 'react';
import { Infographic } from '../../assets/icons/icons';
import Carousel from '../Carousel/Carousel';
import { ColoredBar } from '../ColoredBar/ColoredBar';

export const Sentiments = () => {
  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-[33px]">
      <section className="flex flex-col gap-[17px]">
        <a
          href="/#sentiments"
          className="text-[var(--black)] text-2xl leading-[28.8px]"
        >
          Sentiments
        </a>
        <div className="flex gap-[6px] font-semibold text-lg leading-5">
          <h2 className="text-[var(--gray)]">Key Events</h2>
          <img src={Infographic} alt="" className="w-5 h-5" />
        </div>
        <Carousel />
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex gap-[6px] font-semibold text-lg leading-5">
          <h2 className="text-[var(--gray)]">Analyst Estimates</h2>
          <img src={Infographic} alt="" className="w-5 h-5" />
        </div>
        <div className="flex gap-10 items-center">
          <div className="bg-[var(--green)] w-[116.98px] h-[120px] rounded-full flex justify-center items-center">
            <p className="font-medium  leading-[44.06px] text-[var(--green-100)] flex">
              <span className="text-[36.41px]">76</span>
              <span className="w-[14px] h-[22px]">%</span>
            </p>
          </div>
          <div>
            <ColoredBar
              label="Buy"
              percentage="76%"
              background="#00B386"
              width="349.14px"
            />
            <ColoredBar
              label="Hold"
              percentage="8%"
              background="#C7C8CE"
              width="33px"
            />
            <ColoredBar
              label="Sell"
              percentage="16%"
              background="#F7324C"
              width="66.5px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
