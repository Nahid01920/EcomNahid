
import { twMerge } from 'tailwind-merge';

interface props{
    children:React.ReactNode;
    className?:string;
}

const Container = ({children, className}:props) => {
  return (
    <div className={twMerge("max-w-[1140px] mx-auto px-4", className)}>
    {children}
  </div>
  )
}

export default Container