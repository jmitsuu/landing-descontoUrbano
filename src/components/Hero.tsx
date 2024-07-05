import { Button } from "./button/Button";
import { Logo } from "./logo/Logo";

export function Hero() {
 return (
  <section className=" h-[1104px] overflow-hidden ">
   <div className="w-full h-full bg-cover flex  bg-center bg-[url('../src/assets/images/bg.jpeg')]">
    <div className="container mx-auto   mt-24 flex   ">
     <div className="w-[580px]">
      <div className="flex">
       <h1 className=" text-4xl uppercase text-[25px] font-bold text-[#6aed64] px-6 py-2 rounded-2xl bg-[#1f331e] ">
        Economize no melhor da região
       </h1>
      </div>
      <div className="text-left px-2 text-[#6aed64]">
       <p className="mt-8 text-[40px]  ">
        Seu <span className="text-[48px] font-bold"> guia completo</span> para{" "}
        conhecer os melhores lugares da{" "}
        <span className="text-[48px] font-bold">Região dos Lagos - RJ</span>
       </p>
       <p className="mt-10 text-[20px]">
        Seja você um{" "}
        <span className="font-bold">
         turista em busca de experiências únicas
        </span>{" "}
        ou um <span className="font-bold">morador em busca de novidades</span>,
        o <span className="font-bold">app Facilita Lagos</span> é a sua chave
        para ter acesso aos locais turísticos mais requisitados da região e tudo
        isso <span className="font-bold">com descontos exclusivos.</span>
       </p>
       <Button cn="mt-20" text="clique e baixe o app" link="lorem" />
      </div>
     </div>
     <div>
      <Logo />
     </div>
    </div>
   </div>
  </section>
 );
}
