import prisma from '@lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	const postInfo = await prisma.postInfo.findFirst({ where: { slug } });
	let likes = 0;
	if (!postInfo) await prisma.postInfo.create({ data: { slug, likes, views: 1 } });
	else likes = postInfo.likes;
	return NextResponse.json({ likes });
};

const PUT = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	let likes = 1;
	try {
		const info = await prisma.postInfo.update({ where: { slug }, data: { likes: { increment: 1 } } });
		likes = info?.likes;
	} catch (error) {
		console.log(error);
	}
	return NextResponse.json({ likes });
};

export { GET, PUT };
