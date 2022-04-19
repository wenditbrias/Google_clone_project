import { ContextHandler } from '../context/Context';
import {useState,useEffect} from 'react';
const Image = () => {
  const [results,setResults] = useState([]);
  const { result } = ContextHandler();

  useEffect(() => setResults(result),[result]);

  if(!results && results.length == 0) {
    return (
      <div className="text-center mt-5">
      <h1>Loading..</h1>
      </div>
      )
    
  }
  return <div className="w-[90%] py-5 mx-auto grid grid-cols-4 gap-4">
   {results?.map(({ image,link:{ href ,title}} ,id) => { 
       return (
          <div className="w-full" key={id}>
           <a href={href}>
            <img src={image.src} className="object-cover w-full h-[220px] rounded-sm" alt={title}/>
           </a>
           <h5 className="text-gray-500 text-sm">{title}</h5>
          </div>
        )
   })}
  </div>;
};

export default Image;
