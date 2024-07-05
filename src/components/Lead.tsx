import { Button } from "./button/Button";
import { MovileImg } from "./lead/MobileImg";

export function Lead() {
 return (
  <section className="h-[924px] relative">
   <div className="w-full h-full mx-auto   container flex ">
    <div className="w-full mt-20">
     <div>
      <h1 className="font-bold text-[35px] text-mediumlight ">
       Por que eu preciso do
      </h1>
      <img src="../src/assets/images/logov2.png" className="h-[50px]  " />
     </div>
     <div className="mt-10 text-[18px] w-[591px] ">
      <div className="text-mediumlight">
       <p className="font-bold">
        {" "}
        Você já sentiu aquela vontade de fazer algo diferente, explorar novos
        lugares, mas não sabia por onde começar?{" "}
       </p>
       <br />
       <p> Ou até sabia, mas deixava pra lá por causa dos preços do local?</p>
       <br />
       <p>É justamente aqui que o app FDesconto Urbano entra.</p>
       <br />
       <p>
        Seja você um{" "}
        <span className="font-bold">
         turista em busca de experiências únicas
        </span>{" "}
        ou um <span className="font-bold">morador em busca de novidades</span>,
        o Facilita Lagos te possibilita conhecer as melhores praias,
        RESTAURANTES, BARES, BALADAS, spas E ENTRETENIMENTO NO GERAL na região
        dos lagos.
       </p>
      </div>
      <div className="  mt-10  ">
       <h1 className="font-bold text-mediumlight text-[26px] ">
        Tá esperando o quê?
       </h1>
       <p className="mt-10 text-[18px] text-mediumlight ">
        Clique para baixar o app e venha viver toda a experiência deste local
        <span className="font-bold">
         {" "}
         banhado por um mar transparente de água azul cristalina,
        </span>{" "}
        com bastante economia.
       </p>
      </div>
      <Button cn="mt-10" text="clique e baixe o app" link="lorem" />
     </div>
    </div>

    <MovileImg />
   </div>
  </section>
 );
}
