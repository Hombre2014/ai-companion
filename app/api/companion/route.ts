import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { checkSubscription } from '@/lib/subscription';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { src, name, description, instructions, seed, categoryId } = body;

    // console.log('User from currentUser:', user);

    if (!user || !user.id || !user.firstName) {
      console.log('User in API Companion route', user);
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (
      !src ||
      !name ||
      !description ||
      !instructions ||
      !seed ||
      !categoryId
    ) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const isPro = await checkSubscription();

    if (!isPro) {
      return new NextResponse('Please subscribe to use this feature', {
        status: 403,
      });
    }

    const companion = await prismadb.companion.create({
      data: {
        categoryId,
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.log('[COMPANION_POST_ERROR]', error);
    return new NextResponse('Failed to create companion', { status: 500 });
  }
}
