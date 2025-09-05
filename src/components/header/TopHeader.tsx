import Container from "./Container";
import { FaTruckDroplet } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <FaTruckDroplet className="text-[#ffb342] text-2xl mr-1" />
          Free Express shipping on orders $570+
        </p>
        <div className="hidden md:inline-flex items-center text-sm text-white">
          <p className="headerTopMenu">
            English
            <FaAngleDown className="mt-1"/>
          </p>
          <p className="headerTopMenu">
            USD
            <FaAngleDown className="mt-1"/> 
          </p>
          <p className="headerTopMenu">
            Settings
            <FaAngleDown className="mt-1"/>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
