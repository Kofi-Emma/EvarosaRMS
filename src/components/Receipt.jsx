import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useReceiptContext } from "../context/ReceiptContext";

const Receipt = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { receipts } = useReceiptContext();

  const receiptsPerPage = 8;
  const itemsViewed = pageNumber * receiptsPerPage;
  const pageCount = Math.ceil(
    receipts.length / receiptsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <table className='min-w-full table-auto'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Receipt Number
              </span>
            </th>
            <th className='px-14 py-2'>
              <span className='text-gray-200'>
                Food Items
              </span>
            </th>

            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Amount Paid
              </span>
            </th>
          </tr>
        </thead>

        <tbody className='bg-gray-200'>
          {receipts
            .slice(
              itemsViewed,
              itemsViewed + receiptsPerPage
            )
            .map((receipt) => (
              <tr className='bg-gray-50 text-center mb-8'>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'></span>
                </td>
                <td className='px-14 py-2'>
                  <span>
                    {receipt.invoiceItems.map(
                      (invoiceItem) =>
                        invoiceItem.details.foodName.replace(
                          "",
                          ", "
                        )
                    )}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <span>{`Ghs ${receipt.amount}`}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {receipts.length >= 8 ? (
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : null}
    </>
  );
};

export default Receipt;
