import logo from '../assets/images/logo.png';
export function Header() {
  return (
    <header className="h-[90px]  bg-mediumlight overflow-hidden">
      <div className="lg:px-20 m-auto h-full  items-center  flex ">
        <img src={logo} alt="logo" className="h-[50px] lg:ml-0 ml-5  " />
      </div>
    </header>
  );
}
