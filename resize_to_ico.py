from PIL import Image, ImageDraw
import sys

def generate_ico(input_image_path, output_ico_path):
    try:
        # 打开原始图片
        img = Image.open(input_image_path).convert("RGBA")
        # 调整大小为 32x32
        img = img.resize((32, 32), Image.LANCZOS)

        # 创建一个圆形遮罩
        mask = Image.new("L", (32, 32), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, 32, 32), fill=255)

        # 应用遮罩，将图像裁剪为圆形
        circular_img = Image.new("RGBA", (32, 32))
        circular_img.paste(img, (0, 0), mask)

        # 保存为 .ico 文件
        circular_img.save(output_ico_path, format='ICO')
        print(f"圆形 ICO 文件已生成: {output_ico_path}")
    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python resize_to_ico.py <输入图片路径> [输出ICO路径]")
    else:
        input_path = sys.argv[1]
        output_path = sys.argv[2] if len(sys.argv) > 2 else "favicon.ico"  # 默认输出为 favicon.ico
        generate_ico(input_path, output_path)
