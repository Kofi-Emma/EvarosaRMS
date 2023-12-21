import { useState } from "react";
import InvoiceList from "./InvoiceList";
import { MdOutlineCancel } from "react-icons/md";
import { useInvoiceContext } from "../context/InvoiceContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import PrintInvoice from "./shared/PrintInvoice";

const ReceiptGenerator = () => {
  const { invoiceItems, clearInvoice } =
    useInvoiceContext();
  const [showModal, setShowModal] = useState(false);

  const getTotalAmount = () => {
    let totalAmount = 0;
    invoiceItems.map((item) => {
      totalAmount += item.details.price * item.quantity;
      return totalAmount;
    });
    return totalAmount;
  };

  let amount = getTotalAmount();

  const newReceipt = {
    amount,
    invoiceItems,
  };

  const invoiceId = uuidv4().slice(0, 8);

  const sendReceiptHandler = async () => {
    const postUrl =
      "https://evarosa-rms-api.onrender.com/receipts";

    if (newReceipt.amount !== 0) {
      await axios.post(postUrl, newReceipt, invoiceId);
    }

    setShowModal(true);
  };

  return (
    <>
      <div
        className=' bg-gray-200 w-full border-2 border-slate-200 shadow-md p-2 '
        style={{ maxHeight: "82vh" }}
      >
        <div className='flex justify-between items-center p-1'>
          <h3 className='text-md text-red-600'>
            Evarosa Sweets & Spices Receipt
          </h3>

          <button className='text-red-600 text-md'>
            <MdOutlineCancel
              onClick={() => clearInvoice()}
            />
          </button>
        </div>
        <div
          style={{ maxHeight: "59vh", overflowY: "auto" }}
        >
          <InvoiceList />
        </div>
        <div className='flex justify-between text-gray-900 text-sm p-2'>
          <h4>Total</h4>
          <span>{`Ghs ${amount}`}</span>
        </div>
        <div className='flex items-center justify-center'>
          {amount ? (
            <button
              type='submit'
              className='rounded bg-red-600 px-5 py-2 hover:drop-shadow-xl text-white'
              onClick={sendReceiptHandler}
            >
              PRINT
            </button>
          ) : (
            <button className='rounded bg-red-600 px-5 py-2 hover:drop-shadow-xl text-white opacity-50 cursor-not-allowed'>
              PRINT
            </button>
          )}
        </div>
      </div>

      {showModal ? (
        <PrintInvoice
          amount={amount}
          showModal={showModal}
          setShowModal={setShowModal}
          invoiceId={invoiceId}
        />
      ) : null}
    </>
  );
};

export default ReceiptGenerator;
