import { queryBuilder } from '@lib/planetscale';
import { NextRequest, NextResponse } from 'next/server';

const GET = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	const postInfo = await queryBuilder.selectFrom('PostInfo').select('views').where('slug', '=', slug).executeTakeFirst();
	let views = 1;
	if (!postInfo) await queryBuilder.insertInto('PostInfo').values({ slug, views: 1 }).executeTakeFirst();
	else views = postInfo.views;
	return NextResponse.json({ views });
};

const PUT = async (_: NextRequest, context: { params: { slug: string } }) => {
	const { slug } = context.params;
	const data = await queryBuilder
		.updateTable('PostInfo')
		.set(eb => ({ views: eb.bxp('views', '+', 1) }))
		.where('slug', '=', slug)
		.executeTakeFirst();
	return NextResponse.json({ updated: data.numUpdatedRows });
};

export { GET, PUT };
