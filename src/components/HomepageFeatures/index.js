import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Linux',
    Svg: require('@site/static/img/linux.svg').default,
    description: (
      <>
        探索 Linux 的强大功能，了解如何使用它来管理服务器和开发环境
      </>
    ),
    link: '/docs/ops/linux/intro', // 确保路径与文档路径一致
  },
  {
    title: 'Kubernetes',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
        学习 Kubernetes 的核心概念，掌握容器编排的最佳实践
      </>
    ),
    link: '/docs/ops/kubernetes/intro', // 确保路径与文档路径一致
  },
  {
    title: 'CI/CD',
    Svg: require('@site/static/img/CICD.svg').default,
    description: (
      <>
        了解 CI/CD 的工作流程，提升开发效率，实现自动化部署
      </>
    ),
    link: '/docs/ops/CICD/intro', // 确保路径与文档路径一致
  },
  {
    title: 'Shell',
    Svg: require('@site/static/img/shell.svg').default,
    description: (
      <>
        探索 Shell 的强大能力，掌握脚本语言驾驭系统与自动化的艺术
      </>
    ),
    link: '/docs/dev/shell/intro', // 确保路径与文档路径一致
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        学习 Kubernetes 的核心概念，掌握容器编排的最佳实践
      </>
    ),
    link: '/docs/dev/python/intro', // 确保路径与文档路径一致
  },
  {
    title: 'Go',
    Svg: require('@site/static/img/go.svg').default,
    description: (
      <>
        Go语言由谷歌开发，语法简洁、并发强大，适合构建高性能网络服务与分布式系统
      </>
    ),
    link: '/docs/dev/go/intro', // 确保路径与文档路径一致
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.card}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
