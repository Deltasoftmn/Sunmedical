'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function CabinetAccordionShell({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section id={id} className="scroll-mt-24 py-4 md:py-4">
      <div className="mx-auto max-w-5xl px-4">
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5">
          <header className="bg-primary-blue px-5 py-4 md:px-8 md:py-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <h2 className="text-lg font-bold leading-snug text-white md:text-2xl">{title}</h2>
              <ChevronDown className={`h-5 w-5 shrink-0 text-white transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </header>

          {open && (
            <div className="border-t border-gray-200 bg-gray-50/80 px-5 py-4 text-gray-800 md:px-8 md:py-4">
              {children}
            </div>
          )}
        </article>
      </div>
    </section>
  )
}

