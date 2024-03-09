import React from 'react';

export const About = () => {
  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-[33px]">
      <section className="flex flex-col gap-[17px]">
        <a
          href="/#news_insight"
          className="text-[var(--black)] text-2xl leading-[28.8px]"
        >
          About Bitcoin
        </a>
        <div className="flex flex-col gap-[10px] leading-[21.6px]">
          <h2 className="text-[#0B1426] text-base font-bold">
            What is Bitcoin?
          </h2>
          <p className="text-base font-medium text-[#3E424A]">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
      </section>
    </div>
  );
};
