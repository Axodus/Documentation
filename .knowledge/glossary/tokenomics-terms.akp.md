# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: TOKENOMICS TERMS

[TOKENOMICS_TERMS]

terms:

  $Neurons:
    status: Draft
    domain: Tokenomics
    short_definition: "`$Neurons` is the canonical notation for the Axodus ecosystem token used for utility, rewards, access, and governance participation."
    long_definition:
      - `$Neurons` may support Academy rewards, Marketplace utility, governance participation, access rules, and ecosystem coordination.
      - It must not be described as a guaranteed investment, guaranteed appreciating asset, passive income mechanism, or risk-free yield token.
    aliases:
      - Neurons
      - Neurons token
    deprecated_aliases:
      - NRS
    avoid:
      - guaranteed_token_value
      - investment_return
      - passive_income
      - risk_free_yield
    related_terms:
      - Token_Utility
      - Reward_Policy
      - Locked_Rewards
      - Governance_Participation

  Tokenomics:
    status: Draft
    domain: Tokenomics
    short_definition: "Tokenomics describes the economic design, utility, incentives, supply logic, reward rules, and governance participation model of `$Neurons`."
    long_definition:
      - Tokenomics must be documented carefully and updated as contracts and governance policies are finalized.
    avoid:
      - hype_economics
      - guaranteed_appreciation
    related_terms:
      - $Neurons
      - Reward_Policy
      - Token_Utility

  Token_Utility:
    status: Draft
    domain: Tokenomics
    short_definition: "Token Utility describes how `$Neurons` may be used inside the Axodus ecosystem."
    long_definition:
      - Utility may include access, rewards, Marketplace payments, Academy incentives, governance participation, or coordination mechanisms if implemented.
    avoid:
      - utility_as_profit_guarantee
    related_terms:
      - $Neurons
      - Marketplace
      - Academy

  Reward_Policy:
    status: Draft
    domain: Tokenomics
    short_definition: "A Reward Policy defines how rewards are calculated, issued, locked, claimed, spent, expired, or revoked."
    long_definition:
      - Reward policies should include eligibility, limits, anti-abuse rules, governance status, and contract references where available.
    related_terms:
      - Token_Reward_Flow
      - Locked_Rewards
      - Learn_to_Win

  Locked_Balance:
    status: Draft
    domain: Tokenomics
    short_definition: "A Locked Balance is a restricted token or credit balance that cannot be freely transferred unless conditions or implementation allow it."
    long_definition:
      - Locked balances may support internal utility such as Marketplace use or access if implemented.
      - Transfer restrictions must be enforced by smart contract or trusted accounting.
    aliases:
      - locked rewards
      - internal-use balance
    related_terms:
      - Locked_Rewards
      - Internal_Use
      - $Neurons

  Internal_Use:
    status: Draft
    domain: Tokenomics
    short_definition: "Internal Use means a reward or balance can be used inside the Axodus platform but may not be transferable externally."
    long_definition:
      - Internal-use behavior depends on implementation and should not be claimed unless verified.
    related_terms:
      - Locked_Rewards
      - Marketplace
      - Token_Utility

  Claimable_Reward:
    status: Draft
    domain: Tokenomics
    short_definition: "A Claimable Reward is a reward that a user may claim under defined policy and contract rules."
    long_definition:
      - Claimable does not automatically mean transferable or unlocked unless implementation says so.
    related_terms:
      - Reward_Policy
      - Token_Reward_Flow

  Unlocked_Reward:
    status: Draft
    domain: Tokenomics
    short_definition: "An Unlocked Reward is a reward that is not subject to transfer or internal-use restrictions, if contract implementation supports that status."
    long_definition:
      - Do not assume paid-course rewards or any reward category is unlocked unless policy and contracts confirm it.
    related_terms:
      - Locked_Rewards
      - Reward_Policy

  Governance_Participation:
    status: Draft
    domain: Tokenomics
    short_definition: "Governance Participation refers to using eligible assets, roles, credentials, or status to participate in governance decisions."
    long_definition:
      - `$Neurons` may support governance participation, but exact mechanisms must be implemented and documented.
      - Locked rewards should not be assumed to have voting power unless policy and contracts allow it.
    related_terms:
      - $Neurons
      - Governance
      - Vote

  Access_Rule:
    status: Draft
    domain: Tokenomics
    short_definition: "An Access Rule defines what conditions allow a user, DAO, or account to access a product, feature, course, strategy, or service."
    long_definition:
      - Access may depend on token balance, certification, DAO status, subscription, governance approval, or product policy.
    related_terms:
      - Product_Access
      - Token_Utility
      - Academy

  Emission:
    status: Draft
    domain: Tokenomics
    short_definition: "Emission refers to the creation or distribution of tokens or rewards according to defined policy."
    long_definition:
      - Emission must be sustainable and governance-aware.
      - Do not claim final emission rules unless contracts and policy confirm them.
    related_terms:
      - Reward_Policy
      - Tokenomics
      - Treasury

  Burn:
    status: Draft
    domain: Tokenomics
    short_definition: "Burn refers to permanently removing tokens from circulation according to contract or policy rules."
    long_definition:
      - Do not claim burn mechanics unless implemented and verified.
    related_terms:
      - Tokenomics
      - $Neurons

  Liquidity_Fee:
    status: Draft
    domain: Tokenomics
    short_definition: "A Liquidity Fee is a tokenomics mechanism that may allocate part of a transaction or flow to liquidity support if implemented."
    long_definition:
      - Historical concepts may mention fee mechanics, but public docs must verify current implementation before presenting them as active.
    related_terms:
      - Tokenomics
      - Liquidity

  Treasury_Fee:
    status: Draft
    domain: Tokenomics
    short_definition: "A Treasury Fee is a tokenomics mechanism that may allocate part of a transaction or flow to the treasury if implemented."
    long_definition:
      - Must not be described as active unless verified in current contracts and policy.
    related_terms:
      - Treasury
      - Tokenomics
