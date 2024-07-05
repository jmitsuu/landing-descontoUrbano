interface styleBtn{
  cn?:string
}
export function Button ({cn}:styleBtn){ 
  return (
    <button className={`w-[495px] h-[66px] rounded-full text-white text-[20px] font-bold uppercase bg-[#04BA21] ${cn}`}>clique e baixe o app</button>
  )
}