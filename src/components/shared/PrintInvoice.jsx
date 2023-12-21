import { useRef } from "react";
import InvoiceContent from "./InvoiceContent";
import ReactToPrint from "react-to-print";
import { MdOutlineCancel } from "react-icons/md";

const PrintInvoice = ({
  amount,
  setShowModal,
  invoiceId,
}) => {
  const invoiceRef = useRef();

  return (
    <>
      <div className=' fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 '>
        <div className='relative transform bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg '>
          <div className='absolute right-6 top-5 cursor-pointer'>
            <MdOutlineCancel
              onClick={() => setShowModal(false)}
            />
          </div>
          <div ref={invoiceRef}>
            <InvoiceContent
              amount={amount}
              setShowModal={setShowModal}
              invoiceId={invoiceId}
            />
          </div>

          <div className='w-full mb-4 px-6'>
            <ReactToPrint
              trigger={() => (
                <button
                  type='submit'
                  className='rounded w-full bg-red-600 px-5 py-2 mt-6 hover:drop-shadow-xl text-white'
                >
                  PRINT
                </button>
              )}
              content={() => invoiceRef.current}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintInvoice;
