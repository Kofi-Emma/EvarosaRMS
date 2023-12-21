import { MdOutlineCancel } from "react-icons/md";
import { useInvoiceContext } from "../context/InvoiceContext";

const InvoiceItem = ({ item, i }) => {
  const { removeOneFromInvoice } = useInvoiceContext();

  const foodDetials = item.details;

  const getPrice = () => {
    if (item.quantity === 0) {
      return `Ghs ${foodDetials.price}`;
    } else {
      return `Ghs ${foodDetials.price * item.quantity}`;
    }
  };

  return (
    <div>
      <ul key={i}>
        <div className='flex justify-between mt-3'>
          <p>{foodDetials.foodName}</p>
          <button className='text-xs text-gray-700'>
            <MdOutlineCancel
              onClick={() =>
                removeOneFromInvoice(foodDetials._id)
              }
            />
          </button>
        </div>
        <div className='flex justify-between mb-2'>
          <span>{`${item.quantity}x`}</span>
          <span>{getPrice()}</span>
        </div>
      </ul>
    </div>
  );
};

export default InvoiceItem;
