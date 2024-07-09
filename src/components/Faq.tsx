import { Dropdown } from './faq/Dropdown';
import simbolo from '../assets/images/simbolo.png';
const arrQuestions = [
  {
    title: 'Como faço para baixar o Desconto Urbano?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Quais são os benefícios exclusivos da assinatura?',
    description: 'resposta 02'
  },
  {
    title: 'Como posso personalizar meu guia no aplicativo?',
    description: 'resposta 03'
  },
  {
    title: 'Posso cancelar minha assinatura a qualquer momento?',
    description: 'resposta 04'
  }
];

export function Faq() {
  return (
    <section className="min-h-[590px]  relative pb-20 overflow-hidden bg-[#F1F1F1] ">
      <div className="container m-10 h-full w-full mt-20  mx-auto flex   ">
        <div className=" flex h-full  w-[220px]  items-center disabled top-0 absolute ">
          <h1 className=" font-bold text-mediumlight/20  w-20 space-y-0  flex h-full items-center disabled  absolute">
            <span className="flex xl:text-[9em]  lg:text-[9.3em] text-[8.1em] leading-none select-none">
              F A Q
            </span>
          </h1>
        </div>
        <div className="transition-all duration-300 absolute left-0  z-50  w-full mx-auto  flex flex-col items-center ">
          <h1 className="font-bold text-black lg:text-[2.3em] text-[1.4em] md:text-left text-center ">
            Perguntas frequentes
          </h1>
          <div className="mt-5 z-50 px-10">
            {arrQuestions.map((item) => {
              return (
                <div key={item.title} className=" z-50 ">
                  <Dropdown title={item.title} description={item.description} />
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={simbolo}
          className="absolute  lg:h-96 h-40 top-0 right-0 2xl:right-10 opacity-10"
        />
      </div>
    </section>
  );
}
