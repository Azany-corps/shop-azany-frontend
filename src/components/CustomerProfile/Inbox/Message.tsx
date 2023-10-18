import React from 'react'
import '../ndex.css'
type Props = {}

const Message = (props: Props) => {
  return (
    <div>
      <div className="smm:shadow-md shadow-sm rounded-lg px-4 grid grid-cols-8 items-center gap-4 w-full cursor-pointer bg-white smm:py-6 py-2">
        <div className="col-span-6 space-y-2">
          <h1 className="smm:font-bold font-medium smm:line-clamp-2 line-clamp-1">
            Consectetur. Et sapien et a mauris nam adipiscing.
          </h1>
          <p className="text-[#515151] smm:line-clamp-2 line-clamp-1">
            Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris nam
            adipiscing. onsectetur. Et sapien...
          </p>
        </div>
        <div className="col-span-2 place-self-end  text-[#515151]">
          <p>15:34</p>
          <p>2/03/2023</p>
        </div>
      </div>
    </div>
  );
}

export default Message;