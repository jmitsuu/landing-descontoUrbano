interface styleBtn{
  cn?:string,
  text?:string,
  link:string,
}
export function Link ({cn, text, link}:styleBtn){ 
  return (
    <a href={link} className={` lg:w-[495px] h-[66px] rounded-full text-white text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center ${cn}`}>
    {text}
  </a>
  
  )
}