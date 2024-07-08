import { Dropdown } from './faq/Dropdown';
import simbolo from "../assets/images/simbolo.png"
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
    <section className="h-full  overflow-hidden bg-[#F1F1F1] ">
      <div className="container m-10 h-full w-full mx-auto flex p-2 relative ">
        <div className=" flex h-full  w-[220px]  items-center disabled ">
          <h1 className=" font-bold text-light/20 relative w-20 space-y-0 ">
            <span className="block xl:text-[220px]  lg:text-[150px] text-[130px] leading-none select-none">
              F A Q
            </span>
          </h1>
        </div>
        <div className="lg:mt-20 mt-2 transition-all duration-300  z-50">
          <h1 className="font-bold text-heavy lg:text-[35px] text-[20px] ">
            Perguntas frequentes
          </h1>
          <div className="mt-10">
            {arrQuestions.map((item) => {
              return (
                <div className=' z-50'>
                  <Dropdown title={item.title} description={item.description} />
                </div>
              );
            })}
          </div>
 
        </div>
        <img src={simbolo} className='absolute  lg:h-96 h-40 top-0 right-0 2xl:right-10 opacity-10'/>
      </div>
    </section>
  );
}
