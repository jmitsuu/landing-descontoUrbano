export function Off() {
 return (
  <div className="lg:ml-32">
   <div className="relative flex items-center ">
    <img
     src="../../src/assets/images/off1.png"
     className="absolute bottom-3 h-[398px] w-[483px]"
    />
    <img
     src="../../src/assets/images/off.png"
     className="h-[408px] w-[494px]"
    />

    <div className="absolute left-20 text-left text-[#1f331e] ">
     <div>
      <h2 className="text-[32px]">com até</h2>
      <h1 className="font-bold text-[90px] -mt-10">50%OFF</h1>
     </div>
    </div>
   </div>
  </div>
 );
}
