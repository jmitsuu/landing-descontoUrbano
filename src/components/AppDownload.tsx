import { Button } from "./button/Button";

export function AppDownload() {
 return (
  <section className="h-full bg-heavy">
   <div className="w-full h-full flex">
    <div className="w-full h-full px-48">
     <div className="mt-20">
      <h1 className="font-bold text-[96px] text-medium">Baixe agora</h1>
      <span className="text-light text-[55px]">nosso app</span>
     </div>
     <div className="mt-10 flex gap-x-20">
      <div className="lg:w-[369px] lg:h-[340px] rounded-lg bg-[#3a683c] border border-light flex flex-col justify-center items-center">
       <h1 className="text-medium font-bold text-[24px]">iOS</h1>
       <img
        src="../src/assets/images/icons/appstore.png"
        className="w-[260px]"
       />
       <a
        href=""
        className={` w-80 h-[66px] mt-10 rounded-full text-white text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center `}
       >
        baixar app
       </a>
      </div>
      <div className="lg:w-[369px] lg:h-[340px] rounded-lg bg-[#3a683c] border border-light flex flex-col justify-center items-center">
       <h1 className="text-medium font-bold text-[24px]">iOS</h1>
       <img
        src="../src/assets/images/icons/appstore.png"
        className="w-[260px]"
       />
          <a
        href=""
        className={` w-80 h-[66px] mt-10 rounded-full text-white text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center `}
       >
        baixar app
       </a>
      </div>
     </div>
    </div>
    <img
     src="../src/assets/images/sideImg.jpeg"
     className="lg:w-[537px] h-[798px] lg:float-right"
    />
   </div>
  </section>
 );
}
