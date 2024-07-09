import { Card } from './card/Card';
import curva1 from '../assets/images/mobile/curvas1.png';
import curva2 from '../assets/images/mobile/curvas2.png';
import simbolo from '../assets/images/icons/simbolo.png';
export function Mobile() {
  return (
    <section className="  md:h-[800px] sm:h-[700px] h-[600px]  relative   overflow-hidden bg-[#F1F1F1]">
      <img src={curva1} className="absolute left-0 md:w-40 w-20 h-full" />
      <div className="w-full h-full  mx-auto  container relative  py-20  justify-center    items-center ">
        <div className="md:flex lg:w-full mx-auto text-center md:flex-row  flex flex-col  md:text-left justify-center w-48 gap-x-2 items-center z-50">
          <img
            src={simbolo}
            className="md:h-[50px] h-[50px] md:mx-0 md:pr-1 mx-auto"
          />
          <h1 className="lg:text-[1.8em] md:text-[1.4em] md:mt-0 mt-2 text-[1.2em] text-heavy">
            Um mundo de <span className="font-bold">facilidade</span> e{' '}
            <span className="font-bold">experiência!</span>
          </h1>
        </div>
        <div className="w-full h-full flex justify-center absolute 2xl:-top-32  xl:-top-10 lg:top-0 md:top-28 sm:top-28 top-28 pb-10  flex-col items-center mt-20 ">
          <Card />
        </div>
      </div>
      <img
        src={curva2}
        className="absolute right-0 top-0  md:w-40 w-20 h-full "
      />
    </section>
  );
}
