import Container from './header/Container'
import Image from 'next/image'
import { logo } from '@/assets'
import Link from 'next/link'
import SocialLinks from './SocialLinks'
import Title from './Title'
import { navigation } from '@/constants'
import { GoDotFill } from 'react-icons/go'
import { BsEnvelopeAt } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className="bg-lightBg py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-[200px]"/>
          </Link>
          <p>We are a team of designers and developers that create hish quality wordpress</p>
          <SocialLinks iconStyle="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer  rounded-md"/>
        </div>

        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) =>(
              <Link
              key={item?.title}
              href={item?.href} 
              className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <Title>Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) =>(
              <Link
              key={item?.title}
              href={item?.href} 
              className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <Title>Talk to Us</Title>
          <div className="mt-3">
            <p className="text-sm">Got Questions? Call us</p>
            <Title>+670 413 90 762</Title>
          </div>
          <div className="mt-3">
            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <BsEnvelopeAt />buywithnahid@gmail.com
            </p>
            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <GrLocation /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer