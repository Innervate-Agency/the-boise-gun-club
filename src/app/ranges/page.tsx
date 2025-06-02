'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RangesPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/club-info#facilities')
  }, [router])

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-4xl text-[var(--text-primary)] mb-4">Redirecting...</h1>
        <p className="text-[var(--text-secondary)]">Taking you to our Facilities section.</p>
      </div>
    </div>
  )
}