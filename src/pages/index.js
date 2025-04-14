import React from 'react';
import Head from '@docusaurus/Head'; // 引入 Head 组件
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useInView } from 'react-intersection-observer';

import styles from './styles.module.css'; // 引入页面特定的样式

// 动画包裹组件
function FadeInSection(props) {
  const { children } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        {/* 标题 */}
        <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
          {siteConfig.title}
        </Heading>

        {/* 副标题（动态获取 tagline） */}
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>

        {/* 按钮 */}
        <div className={styles.buttons}>
          <Link
            className={clsx(
                "button button--primary button--lg",
                styles.heroButton
            )}
            to="/docs/intro">
            探索指南 →
          </Link>
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
      title={`欢迎 - ${siteConfig.title}`}
      description="探索 Linux, Kubernetes, CI/CD 等前沿运维知识和开发实践。提供简洁、优雅的学习体验。">
      <Head>
        <meta name="algolia-site-verification" content="9BC99A0DA2A30365" />
        <title>Algolia Verification</title>
      </Head>

      <HomepageHeader />

      <main className={styles.mainContent}>
        <section className={styles.featuresSection}>
          <div className="container">
             <FadeInSection>
                <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
                  核心技术领域
                </Heading>
                <p className={clsx('text--center', styles.sectionSubtitle)}>
                  深入了解现代运维和开发的关键技术
                </p>
             </FadeInSection>
             <FadeInSection>
                <HomepageFeatures />
             </FadeInSection>
          </div>
        </section>
      </main>
    </Layout>
  );
}