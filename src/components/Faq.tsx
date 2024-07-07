const arrQuestions = [
  {
    title: 'Como faço para baixar o Desconto Urbano'
  },
  {
    title: 'Quais são os benefícios exclusivos da assinatura?'
  },
  {
    title: 'Como posso personalizar meu guia no aplicativo?'
  },
  {
    title: 'Posso cancelar minha assinatura a qualquer momento?'
  }
];

export function Faq() {
  return (
    <section className="h-full  overflow-hidden bg-[#F1F1F1] ">
      <div className="container m-10 h-full w-full mx-auto flex p-2">
        <div className=" flex h-full  w-[220px]  items-center disabled ">
          <h1 className=" font-bold text-light/20 relative w-20 space-y-0">
            <span className="block xl:text-[220px]  lg:text-[150px] text-[130px] leading-none select-none">
              F A Q
            </span>
          </h1>
        </div>
        <div className="xl:mt-32 mt-10">
          <h1 className="font-bold text-heavy lg:text-[35px] text-[20px]">
            Perguntas frequentes
          </h1>
          <div className="h-full mt-10">
            {arrQuestions.map((item) => {
              return (
                <div
                  key={item.title}
                  className="gap-4 xl:w-[926px] lg:h-[66px] h-[53px] my-2 bg-heavy flex items-center justify-between lg:px-10 px-5 rounded-lg cursor-pointer"
                >
                  <h2 className="xl:text-[25px] lg:text-[15px] text-[10px] text-medium ">
                    {item.title}
                  </h2>
                  <img
                    src="../src/assets/images/icons/polygon.png"
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
