import { Card } from "./card/Card";

export function Mobile() {
 return (
  <section className="h-[924px]  overflow-hidden">
   <div className="w-full h-full mt-20 mx-auto container relative flex  justify-center  items-center">
    <img
     src="../src/assets/images/mobile/curvas1.png"
     className="absolute left-0"
    />
    <div className="w-full h-full flex flex-col items-center mt-20 ">
     <div className="flex gap-x-2 items-center">
      <img src="../src/assets/images/icons/simbolo.png" className="h-[50px]" />
     <h1 className="text-[35px] text-heavy">Um mundo de <span className="font-bold">facilidade</span> e <span className="font-bold">experiência!</span></h1>
     </div>
    
    <Card />
    </div>
    <img
     src="../src/assets/images/mobile/curvas2.png"
     className="absolute right-0 "
    />
   </div>
  </section>
 );
}
