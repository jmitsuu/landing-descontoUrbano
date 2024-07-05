interface styleBtn{
  cn?:string,
  text:string,
  link:string,
}
export function Button ({cn, text, link}:styleBtn){ 
  return (
    <a href={link} className={` w-[495px] h-[66px] rounded-full text-white text-[20px] font-bold uppercase bg-[#04BA21] flex items-center justify-center ${cn}`}>
    {text}
  </a>
  
  )
}