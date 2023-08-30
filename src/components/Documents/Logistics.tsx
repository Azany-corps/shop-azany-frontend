import React from 'react'
import DocPagesLayout from './Layout'

type Props = {}

export default function Logistics({}: Props) {
  return (
    <div>
      <DocPagesLayout
        background="/images/logistics.svg"
        title="Azany logistics"
        article=""
        type="Azany Logistics"
      />
    </div>
  );
}