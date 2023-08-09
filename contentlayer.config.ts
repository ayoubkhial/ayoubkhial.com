import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import GithubSlugger from 'github-slugger';
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
			resolve: doc => readingTime(doc.body.raw, { wordsPerMinute: 300 })
		},
		slug: {
			type: 'string',
			resolve: doc => doc._raw.flattenedPath
		},
		url: {
			type: 'string',
			resolve: doc => `/content/${doc._raw.flattenedPath}`
		},
		headings: {
			type: 'json',
			resolve: async doc => {
				const slugger = new GithubSlugger();
				const regXHeader = /\n(?<flag>#{2,6})\s+(?<content>.+)/g;
				const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
					console.log(groups);
					const flag = groups?.flag;
					const content = groups?.content;
					return {
						level: flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
						text: content,
						slug: content ? slugger.slug(content) : undefined
					};
				});
				return headings;
			}
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
		node.properties.className = ['word-highlighted'];
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
					behavior: 'append',
					properties: {
						className: ['anchor']
					}
				}
			]
		]
	}
});
