import { NextRequest, NextResponse } from 'next/server';
import { getAllResults, clearAllResults } from '@/lib/kv';

export async function GET() {
  try {
    const results = await getAllResults();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json(
      { error: 'Failed to fetch results' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await clearAllResults();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing results:', error);
    return NextResponse.json(
      { error: 'Failed to clear results' },
      { status: 500 }
    );
  }
}