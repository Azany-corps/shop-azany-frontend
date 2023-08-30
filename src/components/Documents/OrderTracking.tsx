import React from 'react'
import DocPagesLayout from './Layout';

type Props = {}

export default function OrderTracking({}: Props) {
  return (
    <div>
      <DocPagesLayout
        background="/images/ordertracking.svg"
        title="How to track your orders"
        article=""
        type="Order Tracking"
      />
    </div>
  );
}