import React from "react";
import DocPagesLayout from "./Layout";

type Props = {};

export default function CancelledOrder({}: Props) {
  return (
    <div>
      <DocPagesLayout
        background="/images/cancelled.svg"
        title="How to cancel your orders"
        article=""
        type="Canceled
Orders"
      />
    </div>
  );
}
