import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import GithubSlugger from 'github-slugger';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    series: {
      type: 'string'
    },
    part: {
      type: 'number'
    },
    canonical: {
      type: 'string'
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath
    },
    url: {
      type: 'string',
      resolve: (doc) => `/content/${doc._raw.flattenedPath}`
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        const wordsPerMinute = 300;
        const cleanText = doc.body.raw.replace(/<[^>]*>/g, '').replace(/```[\s\S]*?```/g, '');
        const noOfWords = cleanText.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      }
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const slugger = new GithubSlugger();
        const regXHeader = /\n(?<flag>#{2,6})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.replaceAll(/```[\s\S]*?```/g, '').matchAll(regXHeader)).map(({ groups }) => {
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
          behavior: 'wrap',
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});
