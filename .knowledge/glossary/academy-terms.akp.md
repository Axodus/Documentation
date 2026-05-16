# AXODUS KNOWLEDGE PACK
# DOMAIN: GLOSSARY
# TYPE: ACADEMY TERMS

[ACADEMY_TERMS]

terms:

  Academy:
    status: Active
    domain: Academy
    short_definition: "Academy is the Axodus education, onboarding, Proof of Knowledge, Learn-to-Win, certification, and token utility nucleus."
    long_definition:
      - Academy is not only a course library.
      - It connects learning, rewards, reputation, tutor/course publishing, Marketplace integration, and governance education.
    aliases:
      - Axodus Academy
      - Academy nucleus
    related_terms:
      - Learn_to_Win
      - Proof_of_Knowledge
      - Locked_Rewards

  Learn_to_Win:
    status: Draft
    domain: Academy
    short_definition: "Learn-to-Win is the gamified education and reward model of Axodus Academy."
    long_definition:
      - It rewards meaningful learning, progression, assessments, and ecosystem onboarding.
      - It must include anti-abuse and anti-farming considerations.
    aliases:
      - Learn-to-Win
      - learning rewards
    avoid:
      - reward_farming
      - guaranteed_income_for_learning
    related_terms:
      - Proof_of_Knowledge
      - Token_Reward_Flow
      - Locked_Rewards

  Proof_of_Knowledge:
    status: Draft
    domain: Academy
    short_definition: "Proof of Knowledge is the mechanism for validating that a learner has acquired meaningful understanding or competency."
    long_definition:
      - It should go beyond simple completion and may include quizzes, scenarios, practical tasks, projects, or reviewed assessments.
    aliases:
      - PoK
    avoid:
      - completion_equals_knowledge
    related_terms:
      - Certification
      - Assessment
      - Learn_to_Win

  Learning_Path:
    status: Draft
    domain: Academy
    short_definition: "A Learning Path is a structured sequence of courses or modules designed to guide users through a specific skill or product area."
    long_definition:
      - Learning paths may support onboarding, governance readiness, trading risk education, Academy progression, or certification tracks.
    related_terms:
      - Course
      - Module
      - Certification

  Course:
    status: Active
    domain: Academy
    short_definition: "A Course is a structured educational product composed of lessons, modules, assessments, and learning objectives."
    long_definition:
      - Courses may be free, paid, token-gated, certification-based, partner-created, or tutor-published depending on policy and implementation.
    related_terms:
      - Course_Publishing
      - Tutor
      - Marketplace_Listing

  Module:
    status: Active
    domain: Academy
    short_definition: "A Module is a section of a course containing related lessons, tasks, or assessments."
    related_terms:
      - Course
      - Lesson
      - Assessment

  Lesson:
    status: Active
    domain: Academy
    short_definition: "A Lesson is a discrete unit of educational content inside a course module."
    related_terms:
      - Course
      - Module

  Assessment:
    status: Active
    domain: Academy
    short_definition: "An Assessment is a quiz, scenario, task, or review used to validate learning."
    long_definition:
      - Assessments may be part of Proof of Knowledge and reward eligibility.
    related_terms:
      - Proof_of_Knowledge
      - Certification

  Certification:
    status: Planned
    domain: Academy
    short_definition: "Certification is a record or credential indicating that a learner has completed defined requirements or demonstrated competency."
    long_definition:
      - Certifications may support reputation, access, or governance readiness if policy allows.
      - Do not claim legal or professional certification unless formally established.
    avoid:
      - legal_certification_claim_without_basis
    related_terms:
      - Proof_of_Knowledge
      - Reputation

  Reputation:
    status: Planned
    domain: Academy
    short_definition: "Reputation is a possible signal of learning progress, tutor quality, marketplace trust, or governance readiness."
    long_definition:
      - Reputation must be abuse-resistant and should not be easy to farm.
    related_terms:
      - Certification
      - Tutor_Validation
      - Governance_Participation

  Token_Reward_Flow:
    status: Draft
    domain: Academy
    short_definition: "A Token Reward Flow defines how learning completion, assessment validation, and policy rules may result in rewards."
    long_definition:
      - Reward flows must distinguish free-course rewards, paid-course rewards, locked rewards, unlocked rewards, internal-use balances, and claimable rewards.
    related_terms:
      - Learn_to_Win
      - Locked_Rewards
      - Reward_Policy

  Locked_Rewards:
    status: Draft
    domain: Academy
    short_definition: "Locked Rewards are restricted reward balances that may be usable internally but not freely transferable unless implementation allows."
    long_definition:
      - Locked Rewards are especially relevant to free-course reward flows.
      - Do not claim transferability, marketplace usage, voting usage, or unlock rules unless implemented or marked planned.
    aliases:
      - locked balance
      - internal-use rewards
    avoid:
      - freely_tradable_locked_rewards
      - guaranteed_unlock
    related_terms:
      - Token_Reward_Flow
      - Internal_Use
      - $Neurons

  Free_Course_Reward:
    status: Draft
    domain: Academy
    short_definition: "A Free Course Reward is a reward that may be issued for completing free educational content, potentially with locked or internal-use restrictions."
    long_definition:
      - It should be smaller or more constrained to reduce farming and sell pressure.
    related_terms:
      - Locked_Rewards
      - Learn_to_Win

  Paid_Course_Reward:
    status: Draft
    domain: Academy
    short_definition: "A Paid Course Reward is a reward that may be issued for completing paid educational content under different policy or unlock rules."
    long_definition:
      - Do not assume paid-course rewards are always liquid or unlocked unless confirmed.
    related_terms:
      - Token_Reward_Flow
      - Reward_Policy

  Course_Publishing:
    status: Draft
    domain: Academy
    short_definition: "Course Publishing is the process through which Axodus, tutors, companies, DAOs, or partners create and submit courses for review and distribution."
    long_definition:
      - Course publishing requires parameters such as pricing, accepted currencies, royalties, commissions, operational fees, access rules, reward policy, and validation status.
    related_terms:
      - Tutor_Validation
      - Marketplace_Integration

  Tutor:
    status: Active
    domain: Academy
    short_definition: "A Tutor is an educator, creator, company, DAO representative, or approved contributor who publishes or teaches Academy content."
    related_terms:
      - Tutor_Validation
      - Course_Publishing

  Tutor_Validation:
    status: Draft
    domain: Academy
    short_definition: "Tutor Validation is the review process used to assess tutor quality, category eligibility, reputation, and alignment with Axodus standards."
    long_definition:
      - It helps prevent low-quality content, misleading financial claims, abuse, and poor marketplace experiences.
    related_terms:
      - Tutor
      - Course_Publishing
      - ACS

  Marketplace_Integration:
    status: Draft
    domain: Academy
    short_definition: "Marketplace Integration connects Academy courses, certifications, learning products, and tutor services to Axodus Marketplace commerce."
    long_definition:
      - It may include listings, pricing, accepted payment sources, royalties, commissions, access rules, and locked reward utility.
    related_terms:
      - Marketplace
      - Course_Publishing
      - Locked_Rewards
