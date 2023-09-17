import React from 'react'

export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="bg-slate-100 rounded-3xl h-full w-full p-5">
        {children}
    </div>
  )
}
