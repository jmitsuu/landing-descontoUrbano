
export function Card() {
 return (
  <section className="  relative h-full w-full ">
      <div className="w-full h-full relative">
     <div className="absolute top-56 left-20">
     <img src="../../src/assets/images/mobile/cards/lcardtop.png" className=" bottom-10 mb-20" />
     <img src="../../src/assets/images/mobile/cards/lcardbottom.png" className=" " />
     </div>
     <img src="../../src/assets/images/mobile/mobimg.png" className="absolute bottom-0" />
     <div className="absolute top-44 right-20">
     <img src="../../src/assets/images/mobile/cards/rcardtop.png" className=" bottom-10 mb-20" />
     <img src="../../src/assets/images/mobile/cards/rcardbottom.png" className=" " />
     </div>
     </div>
  </section>
 );
}
