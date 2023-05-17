import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true
		},
		description: {
			type: 'string',
			description: 'The description of the post',
			required: true
		},
		keywords: {
			type: 'string'
		},
		published: {
			type: 'boolean'
		},
		publishedAt: {
			type: 'date',
			description: 'The date of the post',
			required: true
		}
	},
	computedFields: {
		readingTime: {
			type: 'json',
			resolve: doc => readingTime(doc.body.raw, { wordsPerMinute: 250 })
		},
		slug: {
			type: 'string',
			resolve: doc => doc._raw.flattenedPath
		},
		url: {
			type: 'string',
			resolve: doc => `/content/${doc._raw.flattenedPath}`
		}
	}
}));
const rehypeOptions = {
	theme: {
		dark: 'github-dark',
		light: 'github-light'
	},
	keepBackground: true,
	onVisitLine(node: any) {
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }];
		}
	},
	onVisitHighlightedLine(node: any) {
		node.properties.className.push('highlighted');
	},
	onVisitHighlightedWord(node: any, id: any) {
		node.properties.className = ['word'];
	}
};
export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, rehypeOptions],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor']
					}
				}
			]
		]
	}
});
