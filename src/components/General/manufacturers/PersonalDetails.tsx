// EmptyComponent.tsx

import React from "react";
import ManufacturersProfileLayoutComp from "./profile/LayoutComp";

interface PersonalDetailsProps {}

const EmptyComponent: React.FC<PersonalDetailsProps> = () => {
  return (
    <ManufacturersProfileLayoutComp>
      <p>Oderinde Emmanuel</p>
    </ManufacturersProfileLayoutComp>
  );
};

export default EmptyComponent;
