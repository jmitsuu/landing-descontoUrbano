import { Card } from './card/Card';

export function Mobile() {
  return (
    <section className="md:h-[924px] h-[600px]  overflow-hidden bg-[#F1F1F1]">
      <div className="w-full h-full  mx-auto  container relative flex  justify-center  items-center">
        <img
          src="../src/assets/images/mobile/curvas1.png"
          className="absolute left-0 md:w-40 w-20 h-full"
        />
        <div className="w-full h-full flex  flex-col items-center mt-20 ">
          <div className="md:flex lg:w-full text-center    md:text-left justify-center w-48 gap-x-2 items-center z-50">
            <img
              src="../src/assets/images/icons/simbolo.png"
              className="md:h-[50px] h-[50px] md:mx-0 md:pr-1 mx-auto"
            />
            <h1 className="md:text-[35px] md:mt-0 mt-5 text-[23px] text-heavy">
              Um mundo de <span className="font-bold">facilidade</span> e{' '}
              <span className="font-bold">experiência!</span>
            </h1>
          </div>

          <Card />
        </div>
        <img
          src="../src/assets/images/mobile/curvas2.png"
          className="absolute right-0  md:w-40 w-20 h-full "
        />
      </div>
    </section>
  );
}
