import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		if (process.env.APP_ENV !== 'development') throw Error('not authorized');
		
		// CREATE NOTES TABLE
		await sql`CREATE TABLE IF NOT EXISTS Notes ( id)`
	}
	catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}