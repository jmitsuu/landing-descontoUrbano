import { Link } from './button/Link';
import logov2 from '../assets/images/logov2.png';
import bgphone from '../assets/images/bgphone.png';
export function Lead() {
  return (
    <section className="h-full relative  bg-[#F1F1F1]  flex md:flex-row flex-col items-end ">
      <div className="w-full z-50 h-full    lg:px-20 flex md:flex-row flex-col items-end ">
        <div className="w-full flex flex-col justify-center py-20   items-center md:items-start">
          <div className="lg:w-[600px]  sm:w-[700px] md:w-[800px] w-full px-8 lg:px-0">
            <h1 className="font-bold md:text-[2.2em]  text-[1.5em] mb-2 text-[#262626]  ">
              Por que eu preciso do
            </h1>
            <img src={logov2} className="h-[50px]  " />
          </div>
          <div className="mt-12 lg:text-[1.2em]  2xl:text-[1.2em]  xl:w-[600px] lg:w-[500px] md:w-[800px] px-8 lg:px-0  sm:w-[700px]">
            <div className="text-[#262626]">
              <p className="font-bold">
                {' '}
                Você já sentiu aquela vontade de fazer algo diferente, explorar
                novos lugares, mas não sabia por onde começar?{' '}
              </p>
              <br />
              <p>
                {' '}
                Ou até sabia, mas deixava pra lá por causa dos preços do local?
              </p>
              <br />
              <p>É justamente aqui que o app Desconto Urbano entra.</p>
              <br />
              <p>
                Seja você um{' '}
                <span className="font-bold">
                  turista em busca de experiências únicas
                </span>{' '}
                ou um{' '}
                <span className="font-bold">morador em busca de novidades</span>
                , o Facilita Lagos te possibilita conhecer as melhores praias,
                RESTAURANTES, BARES, BALADAS, spas E ENTRETENIMENTO NO GERAL na
                região dos lagos.
              </p>
            </div>
            <div className="  mt-10  ">
              <h1 className="font-bold text-[#262626] lg:text-[1.7em] text-[1.5em] ">
                Tá esperando o quê?
              </h1>
              <p className="mt-10 lg:text-[1.2rem] text-[#262626] ">
                Clique para baixar o app e venha viver toda a experiência deste
                local
                <span className="font-bold">
                  {' '}
                  banhado por um mar transparente de água azul cristalina,
                </span>{' '}
                com bastante economia.
              </p>
            </div>
            <img src={bgphone} className="lg:hidden block mx-auto" />
            <Link cn="mt-10" text="clique e baixe o app" link="lorem" />
          </div>
        </div>
      </div>
      <img src={bgphone} className="absolute right-0 h-full lg:block hidden " />
    </section>
  );
}
