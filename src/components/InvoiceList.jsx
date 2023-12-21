import InvoiceItem from "./InvoiceItem";
import { useInvoiceContext } from "../context/InvoiceContext";

const InvoiceList = () => {
  const { invoiceItems } = useInvoiceContext();

  if (invoiceItems) {
    return (
      <div
        className='bg-gray-100 shadow-sm text-sm p-2'
        style={{ height: "58vh" }}
      >
        {invoiceItems.map((item, i) => (
          <InvoiceItem item={item} i={i} />
        ))}
      </div>
    );
  } else return;
};

export default InvoiceList;
