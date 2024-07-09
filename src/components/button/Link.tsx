interface styleBtn{
  cn?:string,
  text?:string,
  link:string,
}
export function Link ({cn, text, link}:styleBtn){ 
  return (
    <a href={link} className={` lg:w-[495px]  h-[55px] md:h-[66px] rounded-full text-black  md:text-[20px] text-[15px] font-bold uppercase bg-light flex items-center justify-center ${cn}`}>
    {text}
  </a>
  
  )
}