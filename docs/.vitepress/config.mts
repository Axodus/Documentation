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
          { text: 'Delivery Lifecycle', link: '/business/delivery-lifecycle' },
          { text: 'Change Requests', link: '/business/change-requests' },
          { text: 'DAO Service Requests', link: '/business/dao-service-requests' },
          { text: 'Plugin Requests', link: '/business/plugin-requests' },
          { text: 'BBA', link: '/business/bba' },
          { text: 'ACS Integration', link: '/business/acs-integration' },
          { text: 'Governance Alignment', link: '/business/governance-alignment' },
          { text: 'Risk and Compliance', link: '/business/risk-and-compliance' },
          { text: 'Accountability', link: '/business/accountability' }
        ]
      },
      {
        text: 'Runtime',
        items: [
          { text: 'Overview', link: '/runtime/overview' },
          { text: 'Architecture', link: '/runtime/architecture' },
          { text: 'Request Lifecycle', link: '/runtime/request-lifecycle' },
          { text: 'Status Model', link: '/runtime/status-model' },
          { text: 'Validation and Confirmation', link: '/runtime/validation-and-confirmation' },
          { text: 'Communication Cadence', link: '/runtime/communication-cadence' },
          { text: 'Milestones', link: '/runtime/milestones' },
          { text: 'Change Control', link: '/runtime/change-control' },
          { text: 'Governance Escalation', link: '/runtime/governance-escalation' },
          { text: 'Execution Handoff', link: '/runtime/execution-handoff' },
          { text: 'Delays and Blockers', link: '/runtime/delays-and-blockers' },
          { text: 'Accountability Records', link: '/runtime/accountability-records' },
          { text: 'Risk Controls', link: '/runtime/risk-controls' },
          { text: 'ACS Integration', link: '/runtime/acs-integration' }
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
          { text: 'Architecture', link: '/trading/architecture' },
          { text: 'Internal Trading', link: '/trading/internal-trading' },
          { text: 'User-Facing Strategies', link: '/trading/user-facing-strategies' },
          { text: 'Strategy Lifecycle', link: '/trading/strategy-lifecycle' },
          { text: 'Scalper Futures', link: '/trading/scalper-futures' },
          { text: 'Access Model', link: '/trading/access-model' },
          { text: 'CEX API Security', link: '/trading/cex-api-security' },
          { text: 'Risk Management', link: '/trading/risk-management' },
          { text: 'Governance Alignment', link: '/trading/governance-alignment' },
          { text: 'Treasury Alignment', link: '/trading/treasury-alignment' },
          { text: 'ACS and Trinity', link: '/trading/acs-trinity-integration' },
          { text: 'Reporting and Accountability', link: '/trading/reporting-and-accountability' },
          { text: 'Compliance and User Disclosures', link: '/trading/compliance-and-user-disclosures' }
        ]
      },
      {
        text: 'Treasury',
        items: [
          { text: 'Overview', link: '/treasury/overview' },
          { text: 'Architecture', link: '/treasury/architecture' },
          { text: 'Treasury Policy', link: '/treasury/treasury-policy' },
          { text: 'Capital Allocation', link: '/treasury/capital-allocation' },
          { text: 'Reserves and Liquidity', link: '/treasury/reserves-and-liquidity' },
          { text: 'Revenue and Fees', link: '/treasury/revenue-and-fees' },
          { text: 'Risk Management', link: '/treasury/risk-management' },
          { text: 'Strategy Oversight', link: '/treasury/strategy-oversight' },
          { text: 'Trading Alignment', link: '/treasury/trading-alignment' },
          { text: 'Tokenomics Alignment', link: '/treasury/tokenomics-alignment' },
          { text: 'Governance Alignment', link: '/treasury/governance-alignment' },
          { text: 'Custody and Security', link: '/treasury/custody-and-security' },
          { text: 'Reporting and Accountability', link: '/treasury/reporting-and-accountability' },
          { text: 'ACS and Trinity Integration', link: '/treasury/acs-trinity-integration' },
          { text: 'Compliance and Disclosures', link: '/treasury/compliance-and-disclosures' }
        ]
      },
      {
        text: 'Tokenomics',
        items: [
          { text: 'Overview', link: '/tokenomics/overview' },
          { text: 'NEURONS Token', link: '/tokenomics/neurons-token' },
          { text: 'Technical Architecture', link: '/tokenomics/technical-architecture' },
          { text: 'Supply and Emission', link: '/tokenomics/supply-and-emission' },
          { text: 'PoK Minting', link: '/tokenomics/pok-minting' },
          { text: 'Contract Dependencies', link: '/tokenomics/contract-dependencies' },
          { text: 'Cross-Chain Readiness', link: '/tokenomics/cross-chain-readiness' },
          { text: 'Utility Model', link: '/tokenomics/utility-model' },
          { text: 'Reward Policy', link: '/tokenomics/reward-policy' },
          { text: 'Academy Rewards', link: '/tokenomics/academy-rewards' },
          { text: 'Marketplace Utility', link: '/tokenomics/marketplace-utility' },
          { text: 'Governance Participation', link: '/tokenomics/governance-participation' },
          { text: 'Treasury Alignment', link: '/tokenomics/treasury-alignment' },
          { text: 'Locked Rewards Status', link: '/tokenomics/locked-rewards' },
          { text: 'Reporting and Accountability', link: '/tokenomics/reporting-and-accountability' },
          { text: 'Risk and Compliance', link: '/tokenomics/risk-and-compliance' }
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
