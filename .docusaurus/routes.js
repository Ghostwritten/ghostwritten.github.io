import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '8b4'),
    exact: true
  },
  {
    path: '/en/blog/archive',
    component: ComponentCreator('/en/blog/archive', 'd28'),
    exact: true
  },
  {
    path: '/en/blog/authors',
    component: ComponentCreator('/en/blog/authors', '32d'),
    exact: true
  },
  {
    path: '/en/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/en/blog/authors/all-sebastien-lorber-articles', 'e0f'),
    exact: true
  },
  {
    path: '/en/blog/first-blog-post',
    component: ComponentCreator('/en/blog/first-blog-post', 'e3f'),
    exact: true
  },
  {
    path: '/en/blog/long-blog-post',
    component: ComponentCreator('/en/blog/long-blog-post', '3fa'),
    exact: true
  },
  {
    path: '/en/blog/mdx-blog-post',
    component: ComponentCreator('/en/blog/mdx-blog-post', 'd71'),
    exact: true
  },
  {
    path: '/en/blog/tags',
    component: ComponentCreator('/en/blog/tags', 'fb7'),
    exact: true
  },
  {
    path: '/en/blog/tags/docusaurus',
    component: ComponentCreator('/en/blog/tags/docusaurus', 'db4'),
    exact: true
  },
  {
    path: '/en/blog/tags/facebook',
    component: ComponentCreator('/en/blog/tags/facebook', '7ad'),
    exact: true
  },
  {
    path: '/en/blog/tags/hello',
    component: ComponentCreator('/en/blog/tags/hello', '08b'),
    exact: true
  },
  {
    path: '/en/blog/tags/hola',
    component: ComponentCreator('/en/blog/tags/hola', '73b'),
    exact: true
  },
  {
    path: '/en/blog/welcome',
    component: ComponentCreator('/en/blog/welcome', '31d'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '63b'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '5d6'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', '878'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '025'),
        routes: [
          {
            path: '/en/docs/tags',
            component: ComponentCreator('/en/docs/tags', '235'),
            exact: true
          },
          {
            path: '/en/docs/tags/生产力',
            component: ComponentCreator('/en/docs/tags/生产力', '57a'),
            exact: true
          },
          {
            path: '/en/docs/tags/ci-cd',
            component: ComponentCreator('/en/docs/tags/ci-cd', '619'),
            exact: true
          },
          {
            path: '/en/docs/tags/go',
            component: ComponentCreator('/en/docs/tags/go', '1a9'),
            exact: true
          },
          {
            path: '/en/docs/tags/kubernetes',
            component: ComponentCreator('/en/docs/tags/kubernetes', '91d'),
            exact: true
          },
          {
            path: '/en/docs/tags/linux',
            component: ComponentCreator('/en/docs/tags/linux', '366'),
            exact: true
          },
          {
            path: '/en/docs/tags/python',
            component: ComponentCreator('/en/docs/tags/python', '0d8'),
            exact: true
          },
          {
            path: '/en/docs/tags/shell',
            component: ComponentCreator('/en/docs/tags/shell', '2f9'),
            exact: true
          },
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '55f'),
            routes: [
              {
                path: '/en/docs/category/components',
                component: ComponentCreator('/en/docs/category/components', 'e2a'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/category/gitlab',
                component: ComponentCreator('/en/docs/category/gitlab', '7a0'),
                exact: true,
                sidebar: "CICDSidebar"
              },
              {
                path: '/en/docs/category/system-resources',
                component: ComponentCreator('/en/docs/category/system-resources', 'e17'),
                exact: true,
                sidebar: "linuxSidebar"
              },
              {
                path: '/en/docs/dev/go/import_package',
                component: ComponentCreator('/en/docs/dev/go/import_package', '78c'),
                exact: true,
                sidebar: "goSidebar"
              },
              {
                path: '/en/docs/dev/go/intro',
                component: ComponentCreator('/en/docs/dev/go/intro', '453'),
                exact: true,
                sidebar: "goSidebar"
              },
              {
                path: '/en/docs/dev/python/初识_Conda：一站式包管理和环境管理工具',
                component: ComponentCreator('/en/docs/dev/python/初识_Conda：一站式包管理和环境管理工具', '167'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/多种方式安装_Python_3.13.1_的教程',
                component: ComponentCreator('/en/docs/dev/python/多种方式安装_Python_3.13.1_的教程', 'ba2'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/如何通过_Python_与_ChatGPT_对话',
                component: ComponentCreator('/en/docs/dev/python/如何通过_Python_与_ChatGPT_对话', '0a7'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/实战经验：使用_Python_的_PyPDF_进行_PDF_操作',
                component: ComponentCreator('/en/docs/dev/python/实战经验：使用_Python_的_PyPDF_进行_PDF_操作', 'aaf'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/使用_Jupyter_Notebook：安装与应用指南',
                component: ComponentCreator('/en/docs/dev/python/使用_Jupyter_Notebook：安装与应用指南', 'd20'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/为什么要学编程与python的发展历史？',
                component: ComponentCreator('/en/docs/dev/python/为什么要学编程与python的发展历史？', 'cb5'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/学习_Python_编程的规则与风格指南',
                component: ComponentCreator('/en/docs/dev/python/学习_Python_编程的规则与风格指南', '4dd'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/学习_Python_编程的利器：高效工具与资源推荐',
                component: ComponentCreator('/en/docs/dev/python/学习_Python_编程的利器：高效工具与资源推荐', 'f8b'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/学习python_web_需要的掌握技能、框架、必备工具、',
                component: ComponentCreator('/en/docs/dev/python/学习python_web_需要的掌握技能、框架、必备工具、', '937'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/Conda_安装_Jupyter_Notebook',
                component: ComponentCreator('/en/docs/dev/python/Conda_安装_Jupyter_Notebook', 'c7a'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/csdn_文章批量转换markdown格式下载至本地',
                component: ComponentCreator('/en/docs/dev/python/csdn_文章批量转换markdown格式下载至本地', '7c2'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/import_语句是python_入门不得不熟知的第一道坎',
                component: ComponentCreator('/en/docs/dev/python/import_语句是python_入门不得不熟知的第一道坎', '2f5'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/intro',
                component: ComponentCreator('/en/docs/dev/python/intro', '4ec'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/python/linux_python_web_flask_编写_Hello_World',
                component: ComponentCreator('/en/docs/dev/python/linux_python_web_flask_编写_Hello_World', 'c37'),
                exact: true,
                sidebar: "pythonSidebar"
              },
              {
                path: '/en/docs/dev/shell/intro',
                component: ComponentCreator('/en/docs/dev/shell/intro', '8aa'),
                exact: true,
                sidebar: "shellSidebar"
              },
              {
                path: '/en/docs/dev/shell/Shell_报告服务器信息',
                component: ComponentCreator('/en/docs/dev/shell/Shell_报告服务器信息', '5c7'),
                exact: true,
                sidebar: "shellSidebar"
              },
              {
                path: '/en/docs/dev/shell/shell_比较大小',
                component: ComponentCreator('/en/docs/dev/shell/shell_比较大小', '671'),
                exact: true,
                sidebar: "shellSidebar"
              },
              {
                path: '/en/docs/highlights',
                component: ComponentCreator('/en/docs/highlights', '3db'),
                exact: true
              },
              {
                path: '/en/docs/intro',
                component: ComponentCreator('/en/docs/intro', 'ee9'),
                exact: true
              },
              {
                path: '/en/docs/ops/CICD/gitlab/gitlab_介绍',
                component: ComponentCreator('/en/docs/ops/CICD/gitlab/gitlab_介绍', '3b8'),
                exact: true,
                sidebar: "CICDSidebar"
              },
              {
                path: '/en/docs/ops/CICD/gitlab/gitlab快速入门',
                component: ComponentCreator('/en/docs/ops/CICD/gitlab/gitlab快速入门', '459'),
                exact: true,
                sidebar: "CICDSidebar"
              },
              {
                path: '/en/docs/ops/CICD/intro',
                component: ComponentCreator('/en/docs/ops/CICD/intro', 'be6'),
                exact: true,
                sidebar: "CICDSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/Components/Api-server Overiview',
                component: ComponentCreator('/en/docs/ops/kubernetes/Components/Api-server Overiview', '911'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/Components/kubelet Overiview',
                component: ComponentCreator('/en/docs/ops/kubernetes/Components/kubelet Overiview', '9ce'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/Components/Kubernetes Context Overivew',
                component: ComponentCreator('/en/docs/ops/kubernetes/Components/Kubernetes Context Overivew', '1ce'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/Install/kubespray offline install kubernetes',
                component: ComponentCreator('/en/docs/ops/kubernetes/Install/kubespray offline install kubernetes', 'a5a'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/intro',
                component: ComponentCreator('/en/docs/ops/kubernetes/intro', 'de8'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/kubernetes/network/Kubernetes_CNI网络',
                component: ComponentCreator('/en/docs/ops/kubernetes/network/Kubernetes_CNI网络', '2f0'),
                exact: true,
                sidebar: "kubernetesSidebar"
              },
              {
                path: '/en/docs/ops/linux/intro',
                component: ComponentCreator('/en/docs/ops/linux/intro', '341'),
                exact: true,
                sidebar: "linuxSidebar"
              },
              {
                path: '/en/docs/ops/linux/System-Resources/Linux-View-System-Resource-Indicators',
                component: ComponentCreator('/en/docs/ops/linux/System-Resources/Linux-View-System-Resource-Indicators', 'a8e'),
                exact: true,
                sidebar: "linuxSidebar"
              },
              {
                path: '/en/docs/ops/linux/System-Resources/Understanding_Linux_Load_Average',
                component: ComponentCreator('/en/docs/ops/linux/System-Resources/Understanding_Linux_Load_Average', '465'),
                exact: true,
                sidebar: "linuxSidebar"
              },
              {
                path: '/en/docs/ops/linux/Yum/Creating_a_Local_Yum_Repository_Using_an_ISO_Image',
                component: ComponentCreator('/en/docs/ops/linux/Yum/Creating_a_Local_Yum_Repository_Using_an_ISO_Image', 'e56'),
                exact: true,
                sidebar: "linuxSidebar"
              },
              {
                path: '/en/docs/prd/apple/如何在_Mac_上彻底卸载_DMG_软件',
                component: ComponentCreator('/en/docs/prd/apple/如何在_Mac_上彻底卸载_DMG_软件', '588'),
                exact: true,
                sidebar: "prdSidebar"
              },
              {
                path: '/en/docs/prd/apple/如何在_macOS_美化_iterm2_？',
                component: ComponentCreator('/en/docs/prd/apple/如何在_macOS_美化_iterm2_？', 'd6e'),
                exact: true,
                sidebar: "prdSidebar"
              },
              {
                path: '/en/docs/prd/intro',
                component: ComponentCreator('/en/docs/prd/intro', 'c0f'),
                exact: true,
                sidebar: "prdSidebar"
              },
              {
                path: '/en/docs/prd/vscode/vscode_插件_codegeex_自动代码生成器',
                component: ComponentCreator('/en/docs/prd/vscode/vscode_插件_codegeex_自动代码生成器', '872'),
                exact: true,
                sidebar: "prdSidebar"
              },
              {
                path: '/en/docs/prd/vscode/VSCODE_插件推荐',
                component: ComponentCreator('/en/docs/prd/vscode/VSCODE_插件推荐', 'a62'),
                exact: true,
                sidebar: "prdSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
