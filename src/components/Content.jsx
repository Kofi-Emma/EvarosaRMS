import FoodList from "./FoodList";
import ReceiptGenerator from "./ReceiptGenerator";
import { useMenuContext } from "../context/MenuContext";
import SearchUi from "./SearchUi";
import Tab from "./shared/Tab";

const Content = () => {
  const { search } = useMenuContext();

  return (
    <div
      className='flex justify-start md:mx-8 lg:mx-14 md:gap-5 lg:gap-10'
      style={{ height: "78vh" }}
    >
      <div className='md:basis-[70%] lg:basis-[74%] overflow-auto'>
        {search ? <SearchUi /> : <Tab />}
      </div>
      <div className='md:basis-[30%] lg:basis-[26%]'>
        <ReceiptGenerator />
      </div>
    </div>
  );
};

export default Content;
