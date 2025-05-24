import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src/data/content.json');

export async function GET() {
  try {
    const fileContent = fs.readFileSync(CONTENT_FILE_PATH, 'utf8');
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading content file:', error);
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Write the updated content back to the file
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true, message: 'Content saved successfully!' });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
