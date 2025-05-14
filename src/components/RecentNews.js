import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link'; // Import Link
import styles from './RecentNews.module.css'; // We'll create this CSS module later

// Helper function to parse frontmatter (simplified)
function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)/);
  if (!match) return { frontmatter: {}, content: fileContent };

  const frontmatterText = match[1];
  const contentBody = match[2]; // Renamed for clarity
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      frontmatter[key] = value;
    }
  });
  return { frontmatter, content: contentBody }; // Return contentBody
}

function NewsItem({ title, date, description, slug, summary }) {
  // Debug log to see what's happening with dates
  console.log(`NewsItem received: title=${title}, date=${date}, slug=${slug}, type of date=${typeof date}`);
  
  let dateInputString = '';
  if (date) {
    if (date instanceof Date) {
      if (!isNaN(date.getTime())) {
        // Use UTC methods to avoid timezone shifts
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        dateInputString = `${year}-${month}-${day}`;
        console.log(`Date object converted to string using UTC: ${dateInputString}`);
      } else {
        console.warn("Received an invalid Date object for prop 'date':", date);
      }
    } else if (typeof date === 'string') {
      dateInputString = date;
      console.log(`Date string used directly: ${dateInputString}`);
    } else {
      console.warn("Received non-string/non-Date type for prop 'date':", date);
    }
  }

  let newsUrl = '#'; 
  if (dateInputString && slug) {
    try {
      // The parseFrontMatter hook in docusaurus.config.js should now handle slug starting with '/'
      // So, the slug from there is already /actual-slug-name
      // newsUrl = `/news${slug}`; // Adjusted based on new slug format
      // The slug from module.slug might already be the full path, or just the end part.
      // Given the recent changes, it's better to rely on the slug from the config's frontmatter parsing.
      // For now, let's assume the slug passed here is the one for the URL construction that was working.
      const parts = dateInputString.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const month = parts[1]; 
        const day = parts[2];   
        // If slug starts with '/', it's absolute; otherwise, it's relative to date path
        newsUrl = slug.startsWith('/') ? `/news${slug}` : `/news/${year}/${month}/${day}/${slug}`;
      } else {
        console.error("Date string not in YYYY-MM-DD format for URL:", dateInputString);
      }
    } catch (e) {
      console.error("Error constructing news URL from date string parts:", dateInputString, e);
    }
  }

  let displayDateStr = dateInputString ? dateInputString : ''; // Default to YYYY-MM-DD or empty
  if (dateInputString) {
    try {
      const dateForDisplay = new Date(dateInputString.replace(/-/g, '/'));
      if (!isNaN(dateForDisplay.getTime())) {
        displayDateStr = dateForDisplay.toLocaleDateString(undefined, { 
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric' 
        });
      } else {
        // If still invalid, displayDateStr remains the YYYY-MM-DD string or empty
        console.warn("Invalid date after processing for display:", dateInputString);
      }
    } catch (e) {
      console.error("Error formatting display date:", dateInputString, e);
      // displayDateStr remains the YYYY-MM-DD string or empty
    }
  }

  return (
    <div className={styles.newsItem}>
      <h3>
        <Link to={newsUrl}>{title}</Link>
      </h3>
      <p className={styles.newsDate}>{displayDateStr}</p>
      {/* Render summary if available, otherwise description (if any) */}
      {summary && <p className={styles.newsSummary}>{summary}</p>}
      {!summary && description && <p>{description}</p>}
    </div>
  );
}

export default function RecentNews({ maxItems = 3 }) {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Dynamically import all .md files from the news directory
    // './news' assumes RecentNews.js is in src/components and news is in src/news
    // We need to adjust the path if news/ is at the root.
    // Docusaurus provides require.context for this, typically used in .mdx or plugin files.
    // For a regular React component, if 'news' is outside 'src', this approach needs adjustment
    // or a build-time script to generate a list of news items.

    // For Docusaurus, we should use require.context if possible.
    // Let's assume news/ is at the project root, so we go up two levels from src/components
    // and then into news/.
    let r;
    try {
        // Adjust the path to '../../news' to point from 'src/components' to the root 'news' folder
        r = require.context('../../news', false, /\.md$/);
    } catch (e) {
        console.error("Could not find news directory. Ensure 'news' directory exists at the project root.", e);
        setNewsItems([]);
        return;
    }

    const loadedNews = r.keys().map(fileName => {
      const rawSlug = fileName.replace(/^.\/(.*)\.md$/, '$1');
      const module = r(fileName);
      // Removed detailed console.logs for module structure, as we have the info.

      let frontmatter = module.frontMatter;
      let autoDescription = module.metadata && module.metadata.description; // Check for Docusaurus-generated description

      // The following block for manually parsing 'module' if it's a string is likely not needed
      // with require.context for .md files, as 'module' will be an object.
      // Consider removing if confirmed it's never a string here.
      if (typeof module === 'string') { 
        const parsed = parseFrontmatter(module);
        frontmatter = parsed.frontmatter;
        // newsFileContent = parsed.content; // We are not using newsFileContent for manual truncation anymore
      }
      
      if (!frontmatter) {
        if (module.default && module.default.frontMatter) {
            frontmatter = module.default.frontMatter;
        } else {
            // console.warn(`No frontmatter found for ${fileName}. Module data:`, module); // Already have this
            return null;
        }
      }
      
      if (!frontmatter.date) {
        // console.warn(`No date found in frontmatter for ${fileName}. Skipping.`); // Already have this
        return null;
      }

      // Use Docusaurus-generated description (from truncate marker) if available,
      // otherwise fallback to frontmatter.description.
      const summary = autoDescription || frontmatter.description || '';
      
      const finalSlug = frontmatter.slug || rawSlug.substring(11);

      return {
        slug: finalSlug,
        ...frontmatter,
        summary: summary, // Assign the determined summary
      };
    }).filter(item => item !== null);

    loadedNews.sort((a, b) => new Date(b.date) - new Date(a.date));

    setNewsItems(loadedNews.slice(0, maxItems));
  }, [maxItems]);

  if (!newsItems || newsItems.length === 0) {
    return <p>No recent news to display.</p>;
  }

  return (
    <div className={styles.recentNewsContainer}>
      <h2>
        <Link to="/news">Recent News</Link>
      </h2>
      {newsItems.map(item => (
        <NewsItem key={item.slug} {...item} />
      ))}
    </div>
  );
} 