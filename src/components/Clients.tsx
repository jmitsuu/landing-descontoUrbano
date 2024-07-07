const company = [
  {
    title: 'empresa 1',
    img: ''
  },
  {
    title: 'empresa 2',
    img: ''
  },
  {
    title: 'empresa 3',
    img: ''
  },
  {
    title: 'empresa 4',
    img: ''
  }
];
export function Clients() {
  return (
    <section className="lg:h-[624px] lg:pt-0 pt-20 pb-20 lg:pb-0 bg-[#1f331e]">
      <div className="w-full h-full   mx-auto container flex flex-col justify-center items-center">
        <div className="mx-auto mb-10 w-[336px] text-center">
          <h1 className=" md:text-[35px] text-[30px] text-medium">
            Conheça alguns dos{' '}
            <span className="text-light font-bold"> nossos parceiros</span>
          </h1>
        </div>
        <div className="gap-5 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-2 lg:gap-x-8 items-center">
          {company.map((item) => {
            return (
              <div
                key={item.title}
                className="xl:w-[299px] xl:h-[288px]  lg:w-[180px]  lg:h-[180px] h-[150px] w-[150px]  rounded-lg bg-[#3a683c] border border-light flex justify-center items-center"
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
