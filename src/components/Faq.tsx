const arrQuestions =[
  {
    title:"Como faço para baixar o Desconto Urbano",
   
  },
  {
    title:"Quais são os benefícios exclusivos da assinatura?",
   
  },
  {
    title:"Como posso personalizar meu guia no aplicativo?",
   
  },
  {
    title:"Posso cancelar minha assinatura a qualquer momento?",
   
  }

]


export function Faq() {

 return (
  <section className="h-full m-10">
<div className="container h-full w-full mx-auto flex">
<div className=" flex h-full  w-[220px] text-[220px] items-center disabled">
    <h1 className=" font-bold text-light/20 relative w-20 space-y-0">
        <span className="block  text-[220px] leading-none select-none" >F A Q</span>
        
    </h1>
</div>
<div className="mt-32">
  <h1 className="font-bold text-heavy text-[35px]">Perguntas frequentes</h1>
  <div className="h-full mt-10">
  {arrQuestions.map((item)=>{
    return(
      <div className="gap-4 w-[926px] h-[66px] my-2 bg-heavy flex items-center justify-between px-10 rounded-md cursor-pointer">
        <h2 className="text-[25px] text-medium ">{item.title}</h2>
        <img src="../src/assets/images/icons/polygon.png" className="cursor-pointer"/>
      </div>
    )
  })

  }   
  </div>
</div>
</div>


  </section>
 );
}
