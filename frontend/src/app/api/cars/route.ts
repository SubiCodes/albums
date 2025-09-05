import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { brand, model } = await request.json()
    
    const car = await prisma.car.create({
      data: {
        brand,
        model,
      },
    })
    
    return NextResponse.json(car)
  } catch (error) {
    return NextResponse.json({ error: `Failed to create car: ${error}` }, { status: 500 })
  }
}