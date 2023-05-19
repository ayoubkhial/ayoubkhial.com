import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	const postInfo = await prisma.postInfo.findFirst({ where: { slug } });
	let views = 1;
	if (!postInfo) await prisma.postInfo.create({ data: { slug, views: 1 } });
	else views = postInfo.views;
	return NextResponse.json({ views });
};

const PUT = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	const { views } = await prisma.postInfo.update({ where: { slug }, data: { views: { increment: 1 } } });
	return NextResponse.json({ views });
};

export { GET, PUT };
