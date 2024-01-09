// EmptyComponent.tsx

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CustomerProfileLayout from "../../../components/CustomerProfile/NewCustomerProfileLayout";
import CustomButton from "../../../components/Inputs/button";
import {
  getCustomerProductOrders,
  getCustomerProductOrder,
} from "../../../Services/order.service";
import {
  DateFormatter,
  CurrencyFormatter,
} from "../../../helpers/helperFunction";
import { Link } from "react-router-dom";
import Loader from "../../../components/Core/Loader";

interface OrderDetailsProps {}

interface IProduct {
  product_name: string;
  image_url: string;
  quantity: number;
}

interface IOrder {
  order_code: string;
  created_at: string;
  address: string;
  order_status: number;
  products: IProduct[];
  sub_total: number;
  id: number;
  quantity: number;
}

const OrderDetailsComponent: React.FC<OrderDetailsProps> = () => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const location = useLocation();
  const id = location?.state?.id;

  const [order, setOrder] = useState<IOrder>({
    order_code: "",
    created_at: "",
    address: "",
    order_status: 0,
    products: [],
    sub_total: 0,
    id: 0,
    quantity: 0,
  });

  useEffect(() => {
    const getOrders = async () => {
      setIsLoading(true);
      const order = await getCustomerProductOrder(id);
      setOrder(order);
      setIsLoading(false);
    };
    getOrders();
  }, []);

  console.log(order);

  return (
    <CustomerProfileLayout>
      {isLoading && <Loader />}
      <div className="pt-[80px] font-public-sans">
        <div className="flex justify-between items-center w-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={backButtonHandler}
          >
            <img src="/images/backArrowNew.svg" alt="icon" />
            <p className="capitalize text-xl font-semibold font-baloo ml-[11px]">
              Order details
            </p>
          </div>
          <Link to="/customer-profile/track-order" state={{ id: id }}>
            <CustomButton styles="mb-[26px]" name="Track order" type="button" />
          </Link>
        </div>
      </div>
      <div className="bg-white w-full py-[15px] px-[12px] mb-[19px]">
        <div className="px-[15px] py-2 rounded-[3px] bg-[#F7DFDE] text-[#D65D5B] font-asap text-[13.795px] font-medium">
          Order information
        </div>
        <div className="grid grid-cols-2 gap-x-8 mt-[9px]">
          <div className="col-span-1 w-full">
            <table className="w-full text-sm text-left rtl:text-right">
              <tbody>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Product name:
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap capitalize">
                    {order?.products[0]?.product_name || ""}
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Order number:
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                    {order?.order_code}
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Order date
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                    {DateFormatter(
                      order?.created_at || new Date(),
                      "dS mmmm  yyyy"
                    )}
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Sold by:
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                    Pinncable shoe shop
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Quantity
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                    {order?.products[0]?.quantity}
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Delivery fee
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap"></td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    Total fee
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap font-bold">
                    {CurrencyFormatter(order?.sub_total || 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-1 relative overflow-x-auto w-full font-asap">
            <table className="w-full h-full text-sm text-left rtl:text-right flex justify-center items-center">
              <tbody>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                    <img
                      src="/images/shoe1.svg"
                      className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
                    />
                  </th>
                  <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                    <img
                      src="/images/shoe1.svg"
                      className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] ">
                    <img
                      src="/images/shoe1.svg"
                      className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
                    />
                  </th>
                  <td className="text-[#231F20] w-[80%] font-asap">
                    <img
                      src="/images/shoe1.svg"
                      className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <div className="grid grid-cols-2 justify-items-center items-center ">
              <img
                src="/images/shoe1.svg"
                className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
              />
              <img
                src="/images/shoe1.svg"
                className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
              />
              <img
                src="/images/shoe1.svg"
                className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
              />
              <img
                src="/images/shoe1.svg"
                className="max-w-[81px] max-h-[71px] object-cover mb-[7px] border border-[#F1C9C8]"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-[22px]">
        <div className="w-full col-span-1">
          <div className="bg-white w-full py-[15px] px-[12px]">
            <div className="px-[15px] py-2 rounded-[3px] bg-[#F7DFDE] text-[#D65D5B] font-asap text-[13.795px] font-medium">
              Payment information
            </div>
            <div className="relative overflow-x-auto w-full font-asap">
              <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                  <tr>
                    <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                      Payment method:
                    </th>
                    <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                      Pay before Delivery
                    </td>
                  </tr>
                  <tr>
                    <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                      Item total:
                    </th>
                    <td className="text-[#231F20] pt-[13px] w-[70%] font-asap">
                      {CurrencyFormatter(order?.sub_total || 0)}
                    </td>
                  </tr>
                  <tr>
                    <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                      Shipping fee
                    </th>
                    <td className="text-[#231F20] pt-[13px] w-[70%] font-asap"></td>
                  </tr>
                  <tr>
                    <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                      Total fee
                    </th>
                    <td className="text-[#231F20] pt-[13px] w-[70%] font-asap font-bold"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="bg-white w-full py-[15px] px-[12px]">
            <div className="px-[15px] py-2 rounded-[3px] bg-[#F7DFDE] text-[#D65D5B] font-asap text-[13.795px] font-medium">
              Delivery information
            </div>
            <div className="col-span-1 flex justify-between w-full">
              <div className="relative overflow-x-auto w-full font-asap">
                <table className="w-full text-sm text-left rtl:text-right">
                  <tbody>
                    <tr>
                      <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                        Delivery address:
                      </th>
                      <td className="text-[#231F20] pt-[13px] w-[70%] font-asap"></td>
                    </tr>
                    <tr>
                      <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                        Phone number:
                      </th>
                      <td className="text-[#231F20] pt-[13px] w-[70%] font-asap"></td>
                    </tr>
                    <tr>
                      <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                        Email:
                      </th>
                      <td className="text-[#231F20] pt-[13px] w-[70%] font-asap"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerProfileLayout>
  );
};

export default OrderDetailsComponent;
