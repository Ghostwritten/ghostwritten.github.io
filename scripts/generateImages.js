const fs = require('fs');
const path = require('path');
const axios = require('axios');

const outputDir = path.join(__dirname, '../static/img/generated');
const imageUrls = [
  'https://via.placeholder.com/400x300.svg?text=Linux',
  'https://via.placeholder.com/400x300.svg?text=Kubernetes',
  'https://via.placeholder.com/400x300.svg?text=CI/CD',
  'https://via.placeholder.com/400x300.svg?text=Shell',
  'https://via.placeholder.com/400x300.svg?text=Python',
  'https://via.placeholder.com/400x300.svg?text=Go',
  'https://via.placeholder.com/400x300.svg?text=Apple',
  'https://via.placeholder.com/400x300.svg?text=高效办公',
  'https://via.placeholder.com/400x300.svg?text=软件教程',
  'https://via.placeholder.com/400x300.svg?text=读书',
  'https://via.placeholder.com/400x300.svg?text=电影',
  'https://via.placeholder.com/400x300.svg?text=旅行',
  'https://via.placeholder.com/400x300.svg?text=美食',
];

// 创建输出目录
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 下载图片并保存到本地
async function downloadImages() {
  for (const [index, url] of imageUrls.entries()) {
    const filePath = path.join(outputDir, `image${index + 1}.svg`);
    const response = await axios({ url, responseType: 'stream' });
    response.data.pipe(fs.createWriteStream(filePath));
    console.log(`Downloaded: ${filePath}`);
  }
}

downloadImages().catch((err) => console.error('Error downloading images:', err));
