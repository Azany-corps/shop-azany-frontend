// EmptyComponent.tsx

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";
import { Box, Divider } from "@mui/material";
import { TabComponent } from "../../../components/Inputs/Tabs";
import {
  getProductOrders,
  getCustomerProductOrders,
} from "../../../Services/order.service";
import {
  DateFormatter,
  CurrencyFormatter,
} from "../../../helpers/helperFunction";

interface MOrdersProps {}

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
}

const MOrdersComponent: React.FC<MOrdersProps> = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Array<IOrder>>([]);
  useEffect(() => {
    const getOrders = async () => {
      const orders = await getProductOrders();
      console.log(orders);
      setOrders(orders);
    };
    getOrders();
  }, []);

  console.log(orders);

  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px]">
        <p className="capitalize text-xl font-semibold font-baloo">Orders</p>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabComponent
            value={true}
            handleChange={() => {}}
            data={[
              {
                id: "Approved",
                name: `Open orders(${orders?.length})`,
                number: "",
              },
              {
                id: "Pending",
                name: "Closed orders(0)",
                number: "",
              },
            ]}
          />
        </Box>
        <Divider />
        <div className="relative flex flex-col overflow-x-auto min-w-[1010px]">
          {orders?.map((order: any, index: number) => (
            <div
              className="bg-[#d0d0d026] w-full grid grid-cols-7 pt-[5px] pb-[14px] pl-[39px] my-[10px]"
              key={index}
            >
              <div className="col-span-2">
                <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                  <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                    Order number:
                  </p>
                  <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                    {order?.order_code}
                  </p>
                </div>
                <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                  <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                    Total price:
                  </p>
                  <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                    {CurrencyFormatter(order?.sub_total || 0)}
                  </p>
                </div>
                <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                  <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                    Order date
                  </p>
                  <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                    {DateFormatter(
                      order?.created_at || new Date(),
                      "dS mmmm  yyyy"
                    )}
                  </p>
                </div>
                <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                  <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                    Payment method:
                  </p>
                  <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                    Pay on delivery
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-start font-asap  text-[13.795px] font-normal mb-2.5">
                  <p className="text-[#B3B7BB] max-w-[120px] w-[120px] font-asap  text-[13.795px] font-normal">
                    Delivery address:
                  </p>
                  <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                    No 12 limpopo benue, street close, maitama
                  </p>
                </div>
              </div>
              <div className="col-span-2 h-full flex items-center justify-center mx-auto">
                <img
                  src="/images/shoe1.svg"
                  className="max-w-[81px] max-h-[71px] object-cover mr-0 lg:mr-[7px] border border-[#F1C9C8]"
                />
                <img
                  src="/images/shoe2.svg"
                  className="max-w-[81px] max-h-[71px] object-cover border border-[#F1C9C8]"
                />
              </div>
              <div className="col-span-1 h-full flex items-center justify-center mx-auto">
                <Link
                  to="/manufacturers-profile/order-details"
                  state={{ id: order?.id }}
                >
                  <p className="text-[13.795px] cursor-pointer font-medium text-[#0F60FF]">
                    View Details
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default MOrdersComponent;
