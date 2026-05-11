import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'press');

export const CATEGORY_COLORS = {
  Partnership: 'var(--accent-2)',
  Recognition: 'var(--accent)',
  Product:     'var(--accent-2)',
  Production:  'var(--accent)',
  Company:     'var(--accent)',
};

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
}

// Returns all articles sorted newest-first (frontmatter only, no body)
export function getAllArticles() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8');
      const { data } = matter(raw);
      return {
        slug:     data.slug || filename.replace(/\.md$/, ''),
        title:    data.title,
        date:     data.date,
        category: data.category,
        excerpt:  data.excerpt,
        banner:   data.banner,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Returns one article with full HTML body
export function getArticle(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug:     data.slug || slug,
    title:    data.title,
    date:     data.date,
    category: data.category,
    excerpt:  data.excerpt,
    banner:   data.banner,
    contentHtml: marked(content),
  };
}

// For generateStaticParams — all slugs
export function getAllSlugs() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  return files.map(f => f.replace(/\.md$/, ''));
}
