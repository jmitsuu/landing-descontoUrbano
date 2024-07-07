import { Link } from './button/Link';

export function Hero() {
  return (
    <section className="2xl:h-[1300px] xl:h-[1104px] lg:h-[1000px] md:h-full   h-[700px] overflow-hidden ">
      <div className="w-full h-full bg-cover flex  bg-center bg-[url('../src/assets/images/bg.jpeg')]">
        <div className="container mx-auto  2xl:mt-36 lg:mt-24 md:my-32 my-10 lg:flex lg:flex-row flex-col   ">
          <div className="2xl:w-[650px] md:w-[580px] w-[300px] lg:mx-0 mx-auto ">
            <div className="flex ">
              <h1 className="  uppercase 2xl:text-[30px] xl:text-[25px] md:text-[25px] text-[12px] font-bold text-[#6aed64] px-6 py-2 rounded-2xl bg-[#1f331e] ">
                Economize no melhor da região
              </h1>
            </div>
            <div className="text-left px-2 text-[#6aed64]">
              <p className="md:mt-8 mt-2 2xl:text-[50px] md:text-[40px] text-[16px]  ">
                Seu{' '}
                <span className="2xl:text-[55px] md:text-[48px] text-[19px]  font-bold">
                  {' '}
                  guia completo
                </span>{' '}
                para conhecer os melhores lugares da{' '}
                <span className="2xl:text-[55px] md:text-[48px] text-[16px]  font-bold">
                  Região dos Lagos - RJ
                </span>
              </p>
              <p className="2xl:mt-20 mt-4 2xl:text-[25px] text-[16px]">
                Seja você um{' '}
                <span className="font-bold">
                  turista em busca de experiências únicas
                </span>{' '}
                ou um{' '}
                <span className="font-bold">morador em busca de novidades</span>
                , o <span className="font-bold">app Facilita Lagos</span> é a
                sua chave para ter acesso aos locais turísticos mais
                requisitados da região e tudo isso{' '}
                <span className="font-bold">com descontos exclusivos.</span>
              </p>
              <img
                src="../src/assets/images/desconto.png"
                className="lg:hidden mt-10 md:h-[200px] h-[150px] mx-auto"
              />
              <Link cn="2xl:mt-40 mt-8" text="clique e baixe o app" link="lorem" />
            </div>
          </div>
          <div className="lg:ml-20">
            {/* <Off /> */}
            <img
              src="../src/assets/images/desconto.png"
              className="lg:block hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
