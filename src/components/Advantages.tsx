const arrAdvantages = [
  {
    icon: '../src/assets/images/icons/icon3.png',
    title: '+ de 250',
    subtitle: 'restaurantes parceiros'
  },
  {
    icon: '../src/assets/images/icons/icon1.png',
    title: '+ de R$ 7.000,00',
    subtitle: 'em descontos'
  },
  {
    icon: '../src/assets/images/icons/icon2.png',
    title: '+ de 100 km',
    subtitle: 'para você conhecer'
  }
];

export function Advantages() {
  return (
    <section className="lg:h-[296px] ">
      <div className="w-full h-full p-20 lg:p-0 bg-[#1f331e] ">
        <div className="container mx-auto w-full  md:flex justify-around h-full lg:gap-x-8 ">
          {arrAdvantages.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center gap-1 md:mb-0 mb-10 last:mb-0 "
              >
                <img
                  src={item.icon}
                  className="lg:w-[78px] lg:h-[78px] w-[44px] h-[44px] "
                />
                <h1 className="font-bold lg:text-[50px] text-[25px] text-[#6aed64] mt-2">
                  {item.title}
                </h1>
                <h2 className="lg:text-[20px] text-[#64ed8d]">
                  {item.subtitle}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
