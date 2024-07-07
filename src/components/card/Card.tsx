
export function Card() {
 return (
  <section className="  relative h-full w-full z-50 pb-20 ">
      <div className="w-full h-full relative mt-10  md:p-0 p-5 ">
     <div className="absolute lg:top-56 md:top-32 top-20 z-50 md:left-20">
     <img src="../../src/assets/images/mobile/cards/lcardtop.png" className=" bottom-10 md:mb-20 mb-3 h-20 md:h-28 lg:h-full " />
     <img src="../../src/assets/images/mobile/cards/lcardbottom.png" className="h-20 lg:h-full  md:h-28" />
     </div>
     <img src="../../src/assets/images/mobile/mobimg.png" className="absolute md:bottom-0 md:top-5 lg:-top-20   md:w-full" />
     <div className="absolute lg:top-44 top-20 md:right-20 -right-0 p-5">
     <img src="../../src/assets/images/mobile/cards/rcardtop.png" className=" md:bottom-10 md:mb-20 mb-3 h-20  md:h-28 pl-4  lg:h-full" />
     <img src="../../src/assets/images/mobile/cards/rcardbottom.png" className=" h-20 lg:h-full  md:h-28" />
     </div>
     </div>
  </section>
 );
}
