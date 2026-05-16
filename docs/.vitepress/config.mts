import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Axodus Documentation',
  description: 'Operational documentation for the Axodus ecosystem.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Architecture', link: '/overview/ecosystem-overview' },
      { text: 'Governance', link: '/governance/overview' },
      { text: 'Security', link: '/security/overview' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Start Here', link: '/' },
          { text: 'Ecosystem Overview', link: '/overview/ecosystem-overview' },
          { text: 'Core Principles', link: '/overview/core-principles' },
          { text: 'Product Map', link: '/overview/product-map' },
          { text: 'Constitutional Model', link: '/overview/constitutional-model' },
          { text: 'Terminology', link: '/overview/terminology' }
        ]
      },
      {
        text: 'Governance',
        items: [
          { text: 'Overview', link: '/governance/overview' },
          { text: 'Constitutional Governance', link: '/governance/constitutional-governance' },
          { text: 'Executive DAO', link: '/governance/executive-dao' },
          { text: 'Boardroom Council', link: '/governance/boardroom-council' },
          { text: 'Community DAO', link: '/governance/community-dao' },
          { text: 'DAO Federation', link: '/governance/dao-federation' },
          { text: 'Governance Lifecycle', link: '/governance/governance-lifecycle' },
          { text: 'Proposal Lifecycle', link: '/governance/proposal-lifecycle' },
          { text: 'Plugin Requests', link: '/governance/plugin-requests' },
          { text: 'Execution Receipts', link: '/governance/execution-receipts' },
          { text: 'Governance Risk', link: '/governance/governance-risk' },
          { text: 'Accountability', link: '/governance/accountability' }
        ]
      },
      {
        text: 'Business and ACS',
        items: [
          { text: 'Business Overview', link: '/business/overview' },
          { text: 'Request Intake', link: '/business/request-intake' },
          { text: 'Runtime', link: '/business/runtime' },
          { text: 'Service Catalog', link: '/business/service-catalog' },
          { text: 'Client Lifecycle', link: '/business/client-lifecycle' },
          { text: 'DAO Service Requests', link: '/business/dao-service-requests' },
          { text: 'BBA', link: '/business/bba' },
          { text: 'ACS Overview', link: '/acs/overview' },
          { text: 'Agent Roles', link: '/acs/agent-roles' },
          { text: 'ACS Runtime', link: '/acs/runtime' },
          { text: 'Governance Alignment', link: '/acs/governance-alignment' },
          { text: 'Risk Review', link: '/acs/risk-review' }
        ]
      },
      {
        text: 'Products',
        items: [
          { text: 'Academy Overview', link: '/academy/overview' },
          { text: 'Learn-to-Win', link: '/academy/learn-to-win' },
          { text: 'Proof of Knowledge', link: '/academy/proof-of-knowledge' },
          { text: 'Course Publishing', link: '/academy/course-publishing' },
          { text: 'Tutor Validation', link: '/academy/tutor-validation' },
          { text: 'Token Reward Flows', link: '/academy/token-reward-flows' },
          { text: 'Locked Rewards', link: '/academy/locked-rewards' },
          { text: 'Marketplace Integration', link: '/academy/marketplace-integration' },
          { text: 'Governance Alignment', link: '/academy/governance-alignment' },
          { text: 'Academy Risk', link: '/academy/academy-risk' },
          { text: 'Trading', link: '/trading/overview' },
          { text: 'Mining', link: '/mining/overview' },
          { text: 'DeFi / DaaS', link: '/defi/overview' },
          { text: 'Marketplace', link: '/marketplace/overview' }
        ]
      },
      {
        text: 'Institutional Layers',
        items: [
          { text: 'Treasury', link: '/treasury/overview' },
          { text: 'Tokenomics', link: '/tokenomics/overview' },
          { text: 'Accountability', link: '/accountability/overview' },
          { text: 'Security', link: '/security/overview' },
          { text: 'Glossary', link: '/glossary/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Axodus' }
    ]
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
