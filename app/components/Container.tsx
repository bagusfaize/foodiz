import React from 'react'

export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="bg-light-grey w-full p-5">
        {children}
    </div>
  )
}
