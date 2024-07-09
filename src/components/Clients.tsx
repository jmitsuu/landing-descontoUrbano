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
    <section className="lg:h-full py-20   bg-mediumlight overflow-x-hidden">
      <div className="w-full h-full   mx-auto container flex flex-col justify-center items-center ">
        <div className="mx-auto w-[336px] text-center ">
          <h1 className=" md:text-[35px] text-[30px] text-[#ffffff]">
            Conheça alguns dos{' '}
            <span className="text-light font-bold"> nossos parceiros</span>
          </h1>
        </div>
        <div className="gap-5 grid md:grid-cols-4 mt-10  sm:grid-cols-4 grid-cols-2 lg:gap-x-8 items-center">
          {company.map((item) => {
            return (
              <div
                key={item.title}
                className="xl:w-[297px] xl:h-[286px]  lg:w-[180px]  lg:h-[180px] h-[140px] w-[140px]  rounded-lg bg-heavy  flex justify-center items-center"
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
