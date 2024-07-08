import logo from "../assets/images/logo.png"
export function Footer() {
  return (
    <footer className="h-[162px] bg-[#F1F1F1] ">
      <div className="w-full h-full bg-heavy">
        <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
          <img src={logo} className="h-[50px]  " />
          <div className="mt-5 uppercase text-center  text-[10px] text-medium">
            <h2 className=" ">
              @2024 Desconto Urbano. Todos os direitos resevados.
            </h2>
            <div className="flex justify-center gap-x-4">
              <a href="" className="border-b-2">
                Termo de serviço
              </a>{' '}
              <a href="" className="border-b-2">
                Política de privacidade
              </a>{' '}
            </div>
          </div>
        </div>
        <div className="h-[80px] w-full flex items-center justify-center">
          LOGO ELEVEN
        </div>
      </div>
    </footer>
  );
}
