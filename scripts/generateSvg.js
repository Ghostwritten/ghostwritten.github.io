const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../static/img/generated');
const svgs = [
  { name: 'linux', text: 'Linux' },
  { name: 'kubernetes', text: 'Kubernetes' },
  { name: 'cicd', text: 'CI/CD' },
];

// 创建输出目录
if (!fs.existsSync(outputDir)) {
  try {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created directory: ${outputDir}`);
  } catch (err) {
    console.error(`Failed to create directory: ${outputDir}`, err);
    process.exit(1);
  }
}

// 生成 SVG 文件
svgs.forEach(({ name, text }) => {
  const filePath = path.join(outputDir, `${name}.svg`);
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <rect width="400" height="300" fill="#f3f4f6" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#333" font-size="24">
    ${text}
  </text>
</svg>`;
  try {
    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated: ${filePath}`);
  } catch (err) {
    console.error(`Failed to write file: ${filePath}`, err);
  }
});
