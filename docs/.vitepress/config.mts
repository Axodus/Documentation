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
        text: 'ACS',
        items: [
          { text: 'Overview', link: '/acs/overview' },
          { text: 'Architecture', link: '/acs/architecture' },
          { text: 'Runtime', link: '/acs/runtime' },
          { text: 'Agent Roles', link: '/acs/agent-roles' },
          { text: 'Morpheus', link: '/acs/morpheus' },
          { text: 'Trinity', link: '/acs/trinity' },
          { text: 'Agent Smith', link: '/acs/agent-smith' },
          { text: 'Governance Alignment', link: '/acs/governance-alignment' },
          { text: 'Business Integration', link: '/acs/business-integration' },
          { text: 'Tooling and MCP', link: '/acs/tooling-and-mcp' },
          { text: 'Memory and Knowledge', link: '/acs/memory-and-knowledge' },
          { text: 'Security and Risk', link: '/acs/security-and-risk' },
          { text: 'Human Oversight', link: '/acs/human-oversight' },
          { text: 'Accountability', link: '/acs/accountability' },
          { text: 'Risk Review', link: '/acs/risk-review' }
        ]
      },
      {
        text: 'Business',
        items: [
          { text: 'Overview', link: '/business/overview' },
          { text: 'Request Intake', link: '/business/request-intake' },
          { text: 'Runtime', link: '/business/runtime' },
          { text: 'Service Catalog', link: '/business/service-catalog' },
          { text: 'Client Lifecycle', link: '/business/client-lifecycle' },
          { text: 'DAO Service Requests', link: '/business/dao-service-requests' },
          { text: 'BBA', link: '/business/bba' }
        ]
      },
      {
        text: 'Academy',
        items: [
          { text: 'Overview', link: '/academy/overview' },
          { text: 'Learn-to-Win', link: '/academy/learn-to-win' },
          { text: 'Proof of Knowledge', link: '/academy/proof-of-knowledge' },
          { text: 'Course Publishing', link: '/academy/course-publishing' },
          { text: 'Tutor Validation', link: '/academy/tutor-validation' },
          { text: 'Token Reward Flows', link: '/academy/token-reward-flows' },
          { text: 'Locked Rewards', link: '/academy/locked-rewards' },
          { text: 'Marketplace Integration', link: '/academy/marketplace-integration' },
          { text: 'Governance Alignment', link: '/academy/governance-alignment' },
          { text: 'Academy Risk', link: '/academy/academy-risk' }
        ]
      },
      {
        text: 'BBA-Agency',
        items: [
          { text: 'Overview', link: '/bba-agency/overview' },
          { text: 'Business BBA', link: '/business/bba' }
        ]
      },
      {
        text: 'Defi / Dex',
        items: [
          { text: 'DeFi Overview', link: '/defi/overview' },
          { text: 'DaaS Model', link: '/defi/daas-model' },
          { text: 'ETF DaaS', link: '/defi/etf-daas' },
          { text: 'Staking', link: '/defi/staking' },
          { text: 'Derivatives', link: '/defi/derivatives' },
          { text: 'Debentures', link: '/defi/debentures' },
          { text: 'Liquidity', link: '/defi/liquidity' },
          { text: 'Dex Overview', link: '/dex/overview' }
        ]
      },
      {
        text: 'Marketplace',
        items: [
          { text: 'Overview', link: '/marketplace/overview' },
          { text: 'Product Types', link: '/marketplace/product-types' },
          { text: 'Academy Integration', link: '/marketplace/academy-integration' },
          { text: 'Token Utility', link: '/marketplace/token-utility' }
        ]
      },
      {
        text: 'Lottery',
        items: [
          { text: 'Overview', link: '/lottery/overview' }
        ]
      },
      {
        text: 'Mining',
        items: [
          { text: 'Overview', link: '/mining/overview' },
          { text: 'Product Model', link: '/mining/product-model' },
          { text: 'Reward Model', link: '/mining/reward-model' },
          { text: 'Risk Considerations', link: '/mining/risk-considerations' }
        ]
      },
      {
        text: 'Trading',
        items: [
          { text: 'Overview', link: '/trading/overview' },
          { text: 'Internal Infrastructure', link: '/trading/internal-trading-infrastructure' },
          { text: 'User-Facing Strategies', link: '/trading/user-facing-strategies' },
          { text: 'API Key Security', link: '/trading/api-key-security' },
          { text: 'Risk Model', link: '/trading/risk-model' },
          { text: 'Strategy Access', link: '/trading/strategy-access' }
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
