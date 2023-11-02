import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { updateProductOrderStatus } from "../../../../Services/order.service";


const Status = ({ orderID, setStatus, status }: { orderID: number, setStatus: Function, status: number }) => {
    const [modal, setModal] = useState<boolean>(false);

    const updateOrderStatus = (status: number) => {
        updateProductOrderStatus(orderID, status)
            .then((res) => {
                console.log(res?.data?.values)
                setStatus(res?.data?.values)
                setModal(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="relative">
                <span className="font-semibold">status:</span>
                {status.toString() === "1" && <span className="font-bold">Pending</span>}
                {status.toString() === "2" && <span className="font-bold">Ready To Ship</span>}
                {status.toString() === "3" && <span className="font-bold">Shipped</span>}
                {status.toString() === "4" && <span className="font-bold">Delivered</span>}

                <button onClick={() => setModal(!modal)} className="w-fit bg-transparent">
                    <KeyboardArrowDownIcon />
                </button>
                {
                    modal && (
                        <div className="flex flex-col absolute w-52 rounded-bl-md pb-2 rounded-br-md bg-white justify-center items-center shadow-md">
                            <div className="flex justify-center items-start py-2">
                                <button onClick={() => updateOrderStatus(2)} className="bg-transparent pl-2 text-left">Ready to Ship</button>
                            </div>
                            <div className="flex justify-center items-start py-2">
                                <button onClick={() => updateOrderStatus(3)} className="bg-transparent pl-2 text-left">Shipped</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Status