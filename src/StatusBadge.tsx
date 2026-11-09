import React from 'react'

type Props = { isPaid: boolean }

export default function StatusBadge({ isPaid }: Props) {
  return (
    <span className={isPaid ? 'badge badge--success' : 'badge badge--danger'}>
      {isPaid ? ' Payé' : ' Impayé'}
    </span>
  )
}