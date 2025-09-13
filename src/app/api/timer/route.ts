import { NextResponse } from 'next/server';

// Global target date - this will be the same for all users
let globalTargetDate: string | null = null;

export async function GET() {
  try {
    // If no target date is set, create one (8 days from now)
    if (!globalTargetDate) {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 8);
      globalTargetDate = targetDate.toISOString();
    }
    
    return NextResponse.json({ 
      success: true, 
      targetDate: globalTargetDate 
    });
  } catch (error) {
    console.error('Timer API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get timer' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { targetDate } = await request.json();
    
    if (!targetDate) {
      return NextResponse.json(
        { success: false, error: 'Target date is required' },
        { status: 400 }
      );
    }
    
    // Update the global target date
    globalTargetDate = targetDate;
    
    return NextResponse.json({ 
      success: true, 
      targetDate: globalTargetDate 
    });
  } catch (error) {
    console.error('Timer API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update timer' },
      { status: 500 }
    );
  }
}
