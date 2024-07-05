const arrAdvantages = [
 {
  icon: "../src/assets/images/icons/icon3.png",
  title: "+ de 250",
  subtitle: "restaurantes parceiros",
 },
 {
  icon: "../src/assets/images/icons/icon1.png",
  title: "+ de R$ 7.000,00",
  subtitle: "em descontos",
 },
 {
  icon: "../src/assets/images/icons/icon2.png",
  title: "+ de 100 km",
  subtitle: "para você conhecer",
 },
];

export function Advantages() {
 return (
  <section className="h-[296px]">
   <div className="w-full h-full bg-[#1f331e] ">
    <div className="container mx-auto w-full  lg:flex justify-around lg:gap-x-8 pt-10">
     {arrAdvantages.map((item)=>{
      return(
        <div className="flex flex-col items-center justify-center gap-1 ">
          <img src={item.icon} className="w-[78px] h-[78px]" />
          <h1 className="font-bold text-[50px] text-[#6aed64] mt-2">{item.title}</h1>
          <h2 className="text-[20px] text-[#64ed8d]">{item.subtitle}</h2>
        </div>
      )
     })

     }
    </div>
   </div>
  </section>
 );
}
