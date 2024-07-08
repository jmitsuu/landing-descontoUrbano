import logo  from "../assets/images/logo.png"
export function Header() {
  return (
    <header className="h-[90px]  bg-[#1f331e]">
      <div className="container  h-full mx-auto flex items-center justify-center lg:justify-normal">
        <img src={logo} className="h-[50px]  " />
      </div>
    </header>
  );
}
