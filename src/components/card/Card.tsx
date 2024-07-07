export function Card() {
  return (
    <section className="  relative h-full w-full z-50 pb-20 ">
      <div className="w-full h-full relative mb-10 mt-5  md:p-0 p-5 ">
        <div className="absolute lg:top-56 md:top-32  top-20 z-50 md:left-20 lg:left-32 sm:left-20 2xl:left-48">
          <div className=" bg-heavy lg:w-[264px] lg:h-[177px] w-[120px]   relative rounded-xl  flex justify-center items-center ">
            <div className="absolute -right-1 md:rotate-[145deg] rotate-45 h-full  w-[0.1rem] bg-heavy -mr-2 ">
              <div className="w-3 h-3 rounded-full bg-heavy mx-auto absolute -right-1"></div>
            </div>
            <div className="text-left m-2 lg:px-4 h-full lg:py-8 z-50">
              <h1 className="lg:text-[20px] text-[12px]  font-bold text-medium uppercase">
                Descontos Exclusivos,
              </h1>
              <p className="text-light lg:text-[15px] text-[10px]">
                Proporciando uma verdadeira festa para o seu bolso.
              </p>
            </div>
          </div>
          <div className=" bg-heavy lg:w-[264px] lg:h-[177px] w-[120px]  mt-5  relative rounded-xl  flex justify-center items-center ">
            <div className="absolute -right-1 md:rotate-45 rotate-45 h-full  w-[0.1rem] bg-heavy -mr-2 ">
              <div className="w-3 h-3 rounded-full bg-heavy mx-auto absolute -right-1"></div>
            </div>
            <div className="text-left m-2 lg:px-4 h-full lg:py-8 z-50">
              <h1 className="lg:text-[20px] text-[12px]  font-bold text-medium  uppercase">
                Mais Economia, Mais Lugares
              </h1>
              <p className="text-light lg:text-[15px] text-[10px]">
                para conhecer e menos desculpas para não explorar.
              </p>
            </div>
          </div>
        </div>
        <img
          src="../../src/assets/images/mobile/mobimg.png"
          className="absolute md:bottom-0 md:top-5 lg:-top-20 sm:bottom-0  xs:bottom-2 bottom-20 h-[300px] sm:h-full md:w-full"
        />
        <div className="absolute lg:top-44 top-20 md:right-20 sm:right-20 lg:right-32 2xl:right-48  right-0 p-5">
          <div className=" bg-heavy lg:w-[264px] lg:h-[177px] w-[120px]   relative rounded-xl  flex justify-center items-center ">
            <div className="absolute -left-1 md:-rotate-[145deg] -rotate-45 h-full  w-[0.1rem] bg-heavy -mr-2 ">
              <div className="w-3 h-3 rounded-full bg-heavy mx-auto absolute -right-1"></div>
            </div>
            <div className="text-left m-2 lg:px-4 h-full lg:py-8 z-50">
              <h1 className="lg:text-[20px] text-[12px]  font-bold text-medium  uppercase">
                guia completo
              </h1>
              <p className="text-light lg:text-[15px] text-[10px]">
                para conhecer o melhor dos lagos.
              </p>
            </div>
          </div>

          <div className=" bg-heavy lg:w-[264px] lg:h-[177px] w-[120px]  mt-5  relative rounded-xl  flex justify-center items-center ">
            <div className="absolute -left-1 md:-rotate-45 -rotate-45 h-full  w-[0.1rem] bg-heavy -mr-2 ">
              <div className="w-3 h-3 rounded-full bg-heavy mx-auto absolute -right-1"></div>
            </div>
            <div className="text-left m-2 lg:px-4 h-full lg:py-8 z-50">
              <h1 className="lg:text-[20px] text-[12px]  font-bold text-medium  uppercase">
                Locais requisitados e aprovados
              </h1>
              <p className="text-light lg:text-[15px] text-[10px]">
                pelos nossos assinantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
