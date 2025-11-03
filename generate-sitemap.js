// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// 🔧 Cấu hình
const BASE_URL = 'https://pos247.app/docs'; // 👉 sửa lại domain của bạn nếu khác
const OUTPUT_FILE = path.join(__dirname, 'src', 'sitemap.xml');

// 📅 Ngày cập nhật gần nhất
const today = new Date().toISOString().split('T')[0];

// 📋 Danh sách route chính (copy thủ công, hoặc đọc từ file routes.ts nếu muốn nâng cao hơn)
const routes = [
  '', // trang chủ
  'home',
  'home/create/outlets',
  'home/create/settings',
  'home/create/menu-items',
  'home/create/staffs',
  'home/create/areas',
  'home/create/processors',
  'home/create/goods',
  'home/create/partners',
  'home/create/fee-policies',
  'home/create/incomes',
  'home/create/menu-policies',
  'home/create/export-policies',
  'home/operate/login',
  'home/operate/qr',
  'home/operate/workspace',
  'home/operate/monitor',
  'home/operate/payment',
  'home/operate/voucher',
  'home/operate/payments',
  'home/operate/clock-out',
  'home/operate/order-goods',
  'home/operate/settlement',
  'home/operate/export-bill',
  'home/operate/good-invoices',
  'home/operate/debts',
  'home/operate/check-invetory',
  'home/report/operation',
  'home/report/goods',
  'home/report/finance',
  'in-app/outlet/workspace',
  'in-app/outlet/monitor',
  'in-app/outlet/payments',
  'in-app/outlet/good-invoices',
  'in-app/outlet/reports/operation',
  'in-app/outlet/reports/finance',
  'in-app/outlet/reports/goods',
  'in-app/outlet/staffs',
  'in-app/outlet/menu-items',
  'in-app/outlet/areas',
  'in-app/outlet/processors',
  'in-app/outlet/incomes',
  'in-app/outlet/goods',
  'in-app/outlet/partners',
  'in-app/outlet/settings',
  'in-app/outlet/collections',
  'in-app/outlet/reconciliations',
  'in-app/outlet/good-orders',
  'in-app/outlet/debts',
  'in-app/outlet/good-checks',
  'in-app/outlet/menu-policies',
  'in-app/outlet/export-policies',
  'in-app/outlet/fee-policies',
  'in-app/inventory/good-invoice-editor',
  'in-app/inventory/good-check-editor',
  'in-app/outlet/outlet-order-editor',
  'in-app/order-details',
  'in-app/collections-editor',
  'in-app/debts-editor',
  'in-app/menu-editor',
  'in-app/fee-editor',
  'in-app/menu-policies-editor',
  'in-app/export-policies-editor',
  'in-app/outlets',
  'in-app/utils/qr-scanner',
  'in-app/account',
  'in-app/incomes',
  'in-app/partners',
  'in-app/menu-policies',
  'in-app/goods',
  'in-app/affiliate',
  'in-app/utils/acknowledge-broker'
];

// 🧱 Sinh XML
const urls = routes.map(r => `
  <url>
    <loc>${BASE_URL}/${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

// 🧾 Ghi file
fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
console.log('✅ sitemap.xml generated successfully at:', OUTPUT_FILE);
