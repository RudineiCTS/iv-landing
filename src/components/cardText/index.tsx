interface CardText{
  title:string;
  text: string;
  
}
export function CardText({title,text}:CardText){
  return (
    <div className="bg-slate-50 p-7 rounded-3xl w-[900px] mt-5 text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-lg text-gray-700 mb-4 mt-5">
        {text}
      </p>
    </div>
  )
}