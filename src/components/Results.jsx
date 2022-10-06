import React, { useEffect, useState } from 'react'
import ResultsSkeleton from './ResultsSkeleton';
import ShoeThumbnail from './ShoeThumbnail'



function Results({ shoes }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className='flex flex-wrap max-w-[1300px] justify-center'>
      {
          isLoading ? 
          new Array(32).fill(0).map((_, index) => <ResultsSkeleton key={index} />)
          :
          shoes.map(item => <ShoeThumbnail key={item.id} shoe={item} />)
        }
    </div>
  )
}

export default Results
