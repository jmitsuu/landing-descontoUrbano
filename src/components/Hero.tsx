import { Link } from './button/Link';
import desconto from '../assets/images/desconto.png';
export function Hero() {
  return (
    <section className="2xl:h-[1300px] xl:h-[1104px] lg:h-[1000px] md:h-full overflow-hidden ">
      <div className="w-full h-full bg-cover flex  bg-center bg-[url('../src/assets/images/bg.jpeg')]">
        <div className="lg:px-20 2xl:mt-32 lg:mt-24 md:my-32 my-20  md:flex md:flex-row flex-col   ">
          <div className="2xl:w-[850px] md:w-[580px] w-full lg:p-0 p-5 2xl:mx-0   ">
            <div className="  w-full flex">
              <h1 className=" uppercase 2xl:text-[1.8em] xl:text-[1.5em]  md:text-[1.5em] sm:text-[1.3rem] text-[0.8em]  font-bold text-[#FFFFFF] lg:px-6 px-1 sm:mx-0  py-2 rounded-2xl bg-[#1f331e] ">
                Economize no melhor da região
              </h1>
            </div>
            <div className="text-left px-2 mt-4 text-[#FFFFFF]">
              <p className="md:mt-8 mt-3 2xl:text-[3.125em] md:text-[2.5em] text-[1.1em]  ">
                Seu{' '}
                <span className="2xl:text-[1.1em] md:text-[1.2em] text-[1.1em]  font-bold">
                  {' '}
                  guia completo
                </span>{' '}
                para conhecer os melhores lugares da{' '}
                <span className="2xl:text-[1.1em] md:text-[1.1em] text-[1.1em]  font-bold">
                  Região dos Lagos - RJ
                </span>
              </p>
              <p className="2xl:mt-20 mt-4 2xl:text-[1.5em] text-[1.1em]">
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
                src={desconto}
                className="md:hidden mt-10 md:h-[200px] h-[150px] mx-auto"
              />
              <Link
                cn="2xl:mt-40 mt-8"
                text="clique e baixe o app"
                link="lorem"
              />
            </div>
          </div>
          <div className="lg:ml-40  ">
            {/* <Off /> */}
            <img
              src={desconto}
              className="md:block hidden  md:h-[170px] lg:h-[300px] xl:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
