import React from "react";
import { useInvoiceContext } from "../../context/InvoiceContext";

const InvoiceContent = React.forwardRef(
  ({ amount, invoiceId }, ref) => {
    const date = new Date();
    const today = date.toUTCString();
    const invoiceNumber = invoiceId;
    const { invoiceItems } = useInvoiceContext();

    return (
      <>
        <div
          className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'
          style={{
            maxHeight: "85vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <div className='flex items-center justify-between'>
            <img
              src='./images/EvarosaLogo.png'
              alt='Evarosa logo'
              width='100'
              height='100'
            />

            <div className='text-sm'>
              <span className='block'>
                Evarosa Sweets and Spices{" "}
              </span>
              <span className='block'>
                Opposite the Awudome Annasett Gas Station
              </span>
              <span className='block'>
                Tel : 0242042608/ 0202713325
              </span>
            </div>
          </div>

          <span className='text-sm p-1 block'>{`Invoice No: ${invoiceNumber}`}</span>
          <span className='text-sm p-1'>{today}</span>

          <table className='min-w-full table-auto mt-4'>
            <thead>
              <tr className='bg-gray-800 text-sm font-normal'>
                <th className='px-2 py-2'>
                  <span className='text-gray-200'>
                    Food Item
                  </span>
                </th>
                <th className='px-2 py-2'>
                  <span className='text-gray-200'>
                    Unit Price
                  </span>
                </th>
                <th className='px-2 py-2'>
                  <span className='text-gray-200'>
                    Quantity
                  </span>
                </th>
                <th className='px-2 py-2'>
                  <span className='text-gray-200'>
                    Total
                  </span>
                </th>
              </tr>
            </thead>

            <tbody className='bg-gray-200 text-sm'>
              {invoiceItems.map((item) => (
                <tr className='bg-gray-50 text-center'>
                  <td className='px-2 py-2'>
                    <span className='text-center'>
                      {item.details.foodName}
                    </span>
                  </td>
                  <td className='px-14 py-2'>
                    <span>{item.details.price}</span>
                  </td>
                  <td className='px-14 py-2'>
                    <span>{item.quantity}</span>
                  </td>
                  <td className='px-14 py-2'>
                    <span>
                      {item.details.price * item.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className='text-right mt-3'>{`Total: GHS ${amount} `}</p>

          <p className='text-sm mt-28 text-center'>
            Software by Brand Specific
          </p>
        </div>
      </>
    );
  }
);

export default InvoiceContent;
