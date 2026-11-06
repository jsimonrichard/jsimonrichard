import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

marked.use({ gfm: true, breaks: false });

export function renderInlineMarkdown(markdown: string): string {
  const rendered = marked.parseInline(markdown) as string;

  return sanitizeHtml(rendered, {
    allowedTags: ['a', 'em', 'strong', 'code'],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', {
        target: '_blank',
        rel: 'noopener noreferrer',
      }),
    },
  });
}
