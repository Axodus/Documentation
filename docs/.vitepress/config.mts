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
        text: 'BBA Agency',
        items: [
          { text: 'Overview', link: '/bba-agency/overview' },
          { text: 'Positioning', link: '/bba-agency/positioning' },
          { text: 'Service Model', link: '/bba-agency/service-model' },
          { text: 'Client Intake', link: '/bba-agency/client-intake' },
          { text: 'Campaign Lifecycle', link: '/bba-agency/campaign-lifecycle' },
          { text: 'Claim Review', link: '/bba-agency/claim-review' },
          { text: 'Growth Operations', link: '/bba-agency/growth-operations' },
          { text: 'Content and Narrative', link: '/bba-agency/content-and-narrative' },
          { text: 'Brand Architecture', link: '/bba-agency/brand-architecture' },
          { text: 'Web3 Launch Support', link: '/bba-agency/web3-launch-support' },
          { text: 'DAO and Governance Communication', link: '/bba-agency/dao-and-governance-communication' },
          { text: 'Academy and Marketplace Alignment', link: '/bba-agency/academy-and-marketplace-alignment' },
          { text: 'ACS Agent Workflow', link: '/bba-agency/acs-agent-workflow' },
          { text: 'Reporting and Accountability', link: '/bba-agency/reporting-and-accountability' },
          { text: 'Risk and Compliance', link: '/bba-agency/risk-and-compliance' },
          { text: 'Business BBA', link: '/business/bba' }
        ]
      },
      {
        text: 'DeFi',
        items: [
          { text: 'DeFi Overview', link: '/defi/overview' },
          { text: 'Architecture', link: '/defi/architecture' },
          { text: 'DaaS', link: '/defi/daas' },
          { text: 'ETF DaaS', link: '/defi/etf-daas' },
          { text: 'Protocol Model', link: '/defi/protocol-model' },
          { text: 'Vaults and Strategies', link: '/defi/vaults-and-strategies' },
          { text: 'Staking and Yield', link: '/defi/staking-and-yield' },
          { text: 'Liquidity Model', link: '/defi/liquidity-model' },
          { text: 'Derivatives and Debentures', link: '/defi/derivatives-and-debentures' },
          { text: 'Risk Management', link: '/defi/risk-management' },
          { text: 'Security and Smart Contracts', link: '/defi/security-and-smart-contracts' },
          { text: 'Governance Alignment', link: '/defi/governance-alignment' },
          { text: 'Treasury Alignment', link: '/defi/treasury-alignment' },
          { text: 'Tokenomics Alignment', link: '/defi/tokenomics-alignment' },
          { text: 'Academy and User Education', link: '/defi/academy-and-user-education' },
          { text: 'ACS Integration', link: '/defi/acs-integration' },
          { text: 'Reporting and Accountability', link: '/defi/reporting-and-accountability' },
          { text: 'Compliance and Disclosures', link: '/defi/compliance-and-disclosures' }
        ]
      },
      {
        text: 'DEX',
        items: [
          { text: 'Overview', link: '/dex/overview' },
          { text: 'Architecture', link: '/dex/architecture' },
          { text: 'Swap Model', link: '/dex/swap-model' },
          { text: 'Liquidity Pools', link: '/dex/liquidity-pools' },
          { text: 'Routing and Aggregation', link: '/dex/routing-and-aggregation' },
          { text: 'Listing Policy', link: '/dex/listing-policy' },
          { text: 'Fees and Revenue', link: '/dex/fees-and-revenue' },
          { text: 'LP Model', link: '/dex/lp-model' },
          { text: 'Slippage and Price Impact', link: '/dex/slippage-and-price-impact' },
          { text: 'MEV and Execution Risk', link: '/dex/mev-and-execution-risk' },
          { text: 'Security and Smart Contracts', link: '/dex/security-and-smart-contracts' },
          { text: 'Governance Alignment', link: '/dex/governance-alignment' },
          { text: 'Treasury Alignment', link: '/dex/treasury-alignment' },
          { text: 'Tokenomics Alignment', link: '/dex/tokenomics-alignment' },
          { text: 'Trading Integration', link: '/dex/trading-integration' },
          { text: 'Marketplace Integration', link: '/dex/marketplace-integration' },
          { text: 'Academy and User Education', link: '/dex/academy-and-user-education' },
          { text: 'ACS Integration', link: '/dex/acs-integration' },
          { text: 'Reporting and Accountability', link: '/dex/reporting-and-accountability' },
          { text: 'Risk and Disclosures', link: '/dex/risk-and-disclosures' }
        ]
      },
      {
        text: 'Marketplace',
        items: [
          { text: 'Overview', link: '/marketplace/overview' },
          { text: 'Architecture', link: '/marketplace/architecture' },
          { text: 'Listing Model', link: '/marketplace/listing-model' },
          { text: 'Service Catalog', link: '/marketplace/service-catalog' },
          { text: 'Seller / Provider Model', link: '/marketplace/seller-provider-model' },
          { text: 'Buyer Flow', link: '/marketplace/buyer-flow' },
          { text: 'Payments and Settlement', link: '/marketplace/payments-and-settlement' },
          { text: 'Fees and Revenue', link: '/marketplace/fees-and-revenue' },
          { text: 'Credits and Locked Rewards', link: '/marketplace/credits-and-locked-rewards' },
          { text: 'Tokenomics Alignment', link: '/marketplace/tokenomics-alignment' },
          { text: 'Academy Alignment', link: '/marketplace/academy-alignment' },
          { text: 'Business and BBA Alignment', link: '/marketplace/business-and-bba-alignment' },
          { text: 'DEX and DeFi Integration', link: '/marketplace/dex-and-defi-integration' },
          { text: 'Governance Alignment', link: '/marketplace/governance-alignment' },
          { text: 'Treasury Alignment', link: '/marketplace/treasury-alignment' },
          { text: 'Reputation and Quality', link: '/marketplace/reputation-and-quality' },
          { text: 'Disputes, Refunds and Support', link: '/marketplace/disputes-refunds-and-support' },
          { text: 'Security and Data Protection', link: '/marketplace/security-and-data-protection' },
          { text: 'ACS Integration', link: '/marketplace/acs-integration' },
          { text: 'Reporting and Accountability', link: '/marketplace/reporting-and-accountability' },
          { text: 'Risk and Compliance', link: '/marketplace/risk-and-compliance' }
        ]
      },
      {
        text: 'Lottery',
        items: [
          { text: 'Overview', link: '/lottery/overview' },
          { text: 'CryptoDraw', link: '/lottery/cryptodraw' },
          { text: 'Game Models', link: '/lottery/game-models' },
          { text: 'Lotofacil-Style Model', link: '/lottery/lotofacil-style-model' },
          { text: 'SuperSete-Style Model', link: '/lottery/supersete-style-model' },
          { text: 'Ticket Model', link: '/lottery/ticket-model' },
          { text: 'Draw Lifecycle', link: '/lottery/draw-lifecycle' },
          { text: 'Randomness and VRF', link: '/lottery/randomness-and-vrf' },
          { text: 'Merkle and Indexing', link: '/lottery/merkle-and-indexing' },
          { text: 'Prize Pools and Payouts', link: '/lottery/prize-pools-and-payouts' },
          { text: 'Claims and Settlement', link: '/lottery/claims-and-settlement' },
          { text: 'Treasury and Fees', link: '/lottery/treasury-and-fees' },
          { text: 'Tokenomics Alignment', link: '/lottery/tokenomics-alignment' },
          { text: 'Governance Alignment', link: '/lottery/governance-alignment' },
          { text: 'Security and Smart Contracts', link: '/lottery/security-and-smart-contracts' },
          { text: 'Operations and Runtime', link: '/lottery/operations-and-runtime' },
          { text: 'ACS Integration', link: '/lottery/acs-integration' },
          { text: 'Reporting and Accountability', link: '/lottery/reporting-and-accountability' },
          { text: 'Responsible Participation', link: '/lottery/responsible-participation' },
          { text: 'Risk and Compliance', link: '/lottery/risk-and-compliance' }
        ]
      },
      {
        text: 'Mining',
        items: [
          { text: 'Overview', link: '/mining/overview' },
          { text: 'Architecture', link: '/mining/architecture' },
          { text: 'Mining Models', link: '/mining/mining-models' },
          { text: 'Infrastructure and Operations', link: '/mining/infrastructure-and-operations' },
          { text: 'Hardware, Energy and Uptime', link: '/mining/hardware-energy-and-uptime' },
          { text: 'Pools, Hashrate and Network Difficulty', link: '/mining/pools-hashrate-and-network-difficulty' },
          { text: 'Node and Validator Operations', link: '/mining/node-and-validator-operations' },
          { text: 'User-Facing Products', link: '/mining/user-facing-products' },
          { text: 'Rewards and Payouts', link: '/mining/rewards-and-payouts' },
          { text: 'Costs, Fees and Profitability', link: '/mining/costs-fees-and-profitability' },
          { text: 'Treasury Alignment', link: '/mining/treasury-alignment' },
          { text: 'Tokenomics Alignment', link: '/mining/tokenomics-alignment' },
          { text: 'Governance Alignment', link: '/mining/governance-alignment' },
          { text: 'Marketplace, Business and BBA Alignment', link: '/mining/marketplace-business-and-bba-alignment' },
          { text: 'Academy and User Education', link: '/mining/academy-and-user-education' },
          { text: 'Trading and Risk Hedging', link: '/mining/trading-and-risk-hedging' },
          { text: 'Security and Custody', link: '/mining/security-and-custody' },
          { text: 'Monitoring and Telemetry', link: '/mining/monitoring-and-telemetry' },
          { text: 'ACS Integration', link: '/mining/acs-integration' },
          { text: 'Reporting and Accountability', link: '/mining/reporting-and-accountability' },
          { text: 'Sustainability and Responsible Operations', link: '/mining/sustainability-and-responsible-operations' },
          { text: 'Risk and Compliance', link: '/mining/risk-and-compliance' }
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
          { text: '$Neurons Token', link: '/tokenomics/neurons-token' },
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
