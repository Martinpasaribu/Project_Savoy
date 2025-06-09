// app/api/promo/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:5000/api/v1/promo/get/promo')
    const data = await res.json()

    // Optionally transform data here
    return NextResponse.json(data.data)
  } catch (error) {
    console.error('Error fetching promo data:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
