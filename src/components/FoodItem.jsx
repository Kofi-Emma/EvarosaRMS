import { useInvoiceContext } from "../context/InvoiceContext";

const FoodItem = ({ item }) => {
  const { foodName, size, image, price, _id } = item;
  const { addOneToInvoice } = useInvoiceContext();

  const imagePath = `https://evarosa-rms-api.onrender.com/uploads/${image}`;

  return (
    <>
      <div
        className='rounded-xl shadow-slate-600 shadow-sm '
        onClick={() => addOneToInvoice(_id)}
      >
        <img
          src={imagePath}
          alt={foodName}
          width={228}
          height={152}
          className='rounded-t-xl md:h-[102px]  lg:h-[136px] xl:h-[152px]'
        />
        <div className='p-2 lg:p-3'>
          <h3 className='md:text-[0.55rem] lg:text-[0.75rem] xl:text-sm text-black mb-2 capitalize'>
            {foodName}
          </h3>
          <div className='flex justify-between'>
            <span className='md:text-[0.55rem] lg:text-[0.75rem] xl:text-sm'>
              Order
            </span>
            <span className='text-red-600 md:text-[0.55rem] lg:text-[0.75rem] xl:text-sm'>
              {`Ghs ${price}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
