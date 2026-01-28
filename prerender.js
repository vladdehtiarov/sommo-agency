import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES = [
    '/',
    '/services/no-code',
    '/services/low-code',
    '/services/ai-development',
    '/services/automation',
    // New Tool Pages
    '/services/bubble-development',
    '/services/weweb-development',
    '/services/flutterflow-development',
    '/services/make-automation',
    '/services/n8n-automation',
    '/services/supabase-backend',
    '/services/api-integrations',
    '/cases/ma-software',
    '/cases/loan-management',
    '/cases/plannly',
    '/cases/dyvo',
    '/cases/curri',
    '/cases/miren',
    '/blog',
    '/blog/no-code-vs-traditional-development',
    '/blog/ai-automation-business-processes',
    '/blog/bubble-io-complete-guide',
    '/blog/zapier-make-automation-comparison',
    '/blog/mvp-development-no-code',
    '/blog/chatgpt-api-integration-guide',
    '/blog/low-code-enterprise-solutions',
    '/blog/airtable-database-design',
    '/blog/workflow-automation-best-practices',
    '/blog/ai-customer-service-implementation',
    '/privacy-policy',
    '/terms-of-use'
];

async function prerender() {
    const distPath = path.join(__dirname, 'dist');

    // Launch puppeteer
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Required for some CI environments
    });

    const page = await browser.newPage();

    // We need to serve the dist folder. 
    // For simplicity script assumes basic static serving is available or we can use the file:// protocol if strictly static, 
    // but file:// often breaks fetch/CORS.
    // Best approach: User runs `npm run preview` in background, or we strictly assume localhost:4173 (standard vite preview port).

    const BASE_URL = 'http://localhost:4173'; // Vite preview default

    console.log('Starting prerender...');
    console.log(`Ensure you have "vite preview" running on ${BASE_URL} or update the script.`);
    // NOTE: In a real CI pipeline, you'd start the server here using child_process.
    // But to keep this script simple and robust, we will try to connect. 
    // Ideally we spawn it.

    for (const route of ROUTES) {
        try {
            console.log(`Prerendering: ${route}`);

            // Navigate to route
            await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait for some key content to ensure JS rendered (e.g., #root not empty)
            await page.waitForSelector('#root > *'); // Wait for at least one child in root

            // Get HTML
            const html = await page.content();

            // Define file path
            // e.g. /services/no-code -> dist/services/no-code/index.html
            const filePath = path.join(distPath, route === '/' ? 'index.html' : route, 'index.html');

            // Create folder if not exists
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Write file
            fs.writeFileSync(filePath, html);
            console.log(`Generated: ${filePath}`);

        } catch (error) {
            console.error(`Failed to prerender ${route}:`, error.message);
        }
    }

    // Generate Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(route => `  <url>
    <loc>https://sommoagency.com${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
    console.log('Generated: sitemap.xml');

    await browser.close();
    console.log('Prerendering complete.');
}

// Check if server is running? for now just run, assuming user handles server or we implement spawning.
// To make it fully automated for the user, let's spawn the server.
import { spawn } from 'child_process';

async function run() {
    // Start server
    console.log('Starting preview server...');
    const server = spawn('npm', ['run', 'preview', '--', '--port', '4173', '--strictPort'], {
        studio: 'inherit',
        shell: true,
        detached: false
    });

    // Give it a moment to boot
    await new Promise(r => setTimeout(r, 2000));

    try {
        await prerender();
    } finally {
        console.log('Stopping server...');
        server.kill(); // This might not kill deep children on windows but ok for Mac
        process.exit(0);
    }
}

run();
