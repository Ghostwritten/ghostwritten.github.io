import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
// 引入 react-intersection-observer 的 hook
import { useInView } from 'react-intersection-observer';

import styles from './styles.module.css'; // 引入页面特定的样式

// 动画包裹组件 (可选, 但更整洁)
// 你也可以直接在下面使用 useInView hook
function FadeInSection(props) {
  const { children } = props;
  const { ref, inView } = useInView({
    triggerOnce: true, // 动画只触发一次
    threshold: 0.1, // 元素可见 10% 时触发
  });

  return (
    <div
      ref={ref}
      className={clsx(styles.animatedSection, { [styles.isVisible]: inView })}
    >
      {children}
    </div>
  );
}


// 改进后的首页顶部介绍区域
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    // 移除了 'hero--primary' 以便自定义背景和样式
    <header ref={ref} className={clsx('hero', styles.heroBanner, { [styles.isVisible]: inView })}>
      <div className={clsx("container", styles.heroContainer, styles.animatedSection)}>
        {/* 可以考虑在这里添加一个大的背景图片或图标 */}
        {/* <img src="/img/your-hero-image.png" alt="Hero background" className={styles.heroBackgroundImage} /> */}
        
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
                "button button--primary button--lg", // 改为 primary 或自定义样式
                styles.heroButton
            )}
            to="/docs/intro">
            探索指南 → {/* 换个更吸引人的文本 */}
          </Link>
          {/* 可以添加第二个次要按钮 */}
          {/* <Link
            className={clsx(
                "button button--secondary button--lg",
                styles.heroButton,
                styles.secondaryButton // 添加特定样式区分
            )}
            to="/blog">
            阅读博客
          </Link> */}
        </div>
      </div>
    </header>
  );
}

// 整个首页的导出组件
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎 - ${siteConfig.title}`} // 更友好的标题
      description="探索 Linux, Kubernetes, CI/CD 等前沿运维知识和开发实践。提供简洁、优雅的学习体验。"> {/* 优化描述 */}
      
      <HomepageHeader />

      <main className={styles.mainContent}>
        {/* 为 Features 部分添加一个容器和标题 */}
        <section className={styles.featuresSection}>
          <div className="container">
             <FadeInSection> {/* 使用动画包裹 */}
                <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                  核心技术领域
                </Heading>
                <p className={clsx('text--center', styles.sectionSubtitle)}>
                  深入了解现代运维和开发的关键技术。
                </p>
             </FadeInSection>
             <FadeInSection> {/* 使用动画包裹 */}
                <HomepageFeatures />
             </FadeInSection>
          </div>
        </section>

        {/* --- 在这里可以添加更多部分 --- */}
        {/* 
        <section className={styles.anotherSection}>
          <div className="container">
            <FadeInSection>
              <div className="row">
                <div className="col col--6">
                  <Heading as="h2" className={styles.sectionTitle}>另一个亮点</Heading>
                  <p className={styles.sectionSubtitle}>详细介绍某个特别的功能或内容。</p>
                  <Link className="button button--outline button--primary" to="/docs/another-feature">
                    了解更多
                  </Link>
                </div>
                <div className="col col--6">
                   {/* 在这里放一张相关的图片 
                   <img src="/img/another-feature.svg" alt="Another Feature Visual" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section> 
        */}

      </main>
    </Layout>
  );
}