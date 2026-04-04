# User Research & Flows Skill

Expert consultant in user research, persona development, user journey mapping, and flow design for complex systems with 10+ years of experience.

## What This Skill Does

Transforms Claude into an expert user research consultant who provides the **strategic user understanding layer** that informs both UX and UI decisions. The skill covers:

- Persona development for power users and technical professionals
- User journey mapping for complex, multi-step processes
- Flow design for operational systems (NOC, DevOps, observability)
- Understanding needs in high-stress, real-time environments
- Research methodologies for enterprise and B2B contexts
- AI assistant integration into existing workflows

## Strategic Foundation

This skill provides the foundational understanding that guides design:

**This Skill**: WHO are the users? WHAT do they need? WHY?
**UX Skill**: HOW do users interact? Is it usable? Does it solve problems?
**UI Skill**: Is it visually clear? Is the execution precise?

## Who It's For

- **Product Managers** defining user needs and priorities
- **Product Designers** understanding users before designing
- **UX Researchers** conducting or planning research
- **Design Teams** building personas and journeys
- **Founders** validating assumptions about users

## When To Use

Trigger this skill by saying:

- "Create a persona for..."
- "Map the user journey for..."
- "Design the user flow for..."
- "Who are our users?"
- "What do users need to accomplish?"

Works with:

- Product descriptions
- Feature requirements
- User research data
- Existing designs (to understand users)

## Key Features

### Mandatory Context Gathering

Before any persona/journey/flow work, Claude asks questions to understand:

- What your product does
- Who your users are
- What problems you're solving
- What context users operate in

This ensures relevant, grounded work tailored to your situation.

### Persona Building

**Strong, Actionable Personas**:

- Clear demographics and role
- Specific goals and motivations
- Context and environment details
- Pain points and barriers
- Behavioral patterns
- Drivers and triggers

**Quality Standards**:

- Distinct (not overlapping)
- Based on research (or clear assumptions)
- Actionable (guides design decisions)
- Specific (not generic)
- Memorable (team can reference)

### User Journey Mapping

**Complete Journey Maps**:

- Trigger that starts journey
- Stages and steps
- Touchpoints and interactions
- Thoughts and emotions throughout
- Pain points identified
- Opportunities for improvement

**Analysis Depth**:

- Actions (what user does)
- System responses (what happens)
- Mental state (thoughts/feelings)
- Context (where, when, why)
- Optimization opportunities

### Flow Design

**Flow Types Covered**:

- **Linear**: Sequential steps (onboarding, checkout)
- **Branching**: Conditional paths (configuration, troubleshooting)
- **Hub-and-Spoke**: Central dashboard with independent tasks
- **Parallel**: Simultaneous actions (bulk operations)
- **Cyclical**: Repeating processes (monitoring, review cycles)
- **Exploratory**: User-directed (data analysis, discovery)

**Flow Specifications**:

- Step-by-step breakdown
- Decision points and branching
- Error handling and recovery
- Edge cases covered
- Optimization opportunities (automation, AI, defaults)

### Specialized Expertise

**Power Users / Technical Professionals**:

- DevOps engineers, SREs, security analysts
- High technical proficiency patterns
- Keyboard-driven workflows
- Low tolerance for friction

**Operational / Real-Time Systems**:

- NOC operators, incident responders
- High-stress environments
- Time-critical decisions
- 24/7 contexts

**Enterprise / B2B**:

- Multiple stakeholders
- Long sales cycles
- Approval processes
- Compliance requirements

## What's Included

### Core Instructions (SKILL.md)

- Expert user research methodology
- Context-gathering workflow
- Persona, journey, and flow frameworks
- Professional standards and best practices

### Reference Materials

**persona_frameworks.md** (16 KB)

- Persona template structure
- Behavioral patterns and drivers
- Enterprise/B2B persona types
- Persona development process
- Validation techniques
- Documentation templates

**journey_mapping.md** (15 KB)

- Journey map components and stages
- Touchpoints and emotions
- Pain points and opportunities
- Journey types (linear, cyclical, exploratory)
- Context-specific patterns (enterprise, operational, SaaS)
- Mapping methodologies

**flow_patterns.md** (18 KB)

- 6 core flow patterns with examples
- Flow optimization techniques
- Progressive disclosure, smart defaults
- Error handling and recovery
- Flow states (empty, loading, success, error)
- Decision frameworks

**research_methods.md** (17 KB)

- Qualitative vs quantitative research
- Interview techniques and guides
- Observational studies
- Usability testing protocols
- Surveys and analytics
- Enterprise/B2B research challenges
- Synthesis and analysis

## Installation

1. **Download**: Get `user-research-flows.skill` from this directory
2. **Install in Claude**:
   - Go to [Claude.ai](https://claude.ai) > Settings > Skills
   - Click "Upload Skill"
   - Select `user-research-flows.skill`
   - Confirm installation

## Usage Examples

### Example 1: Creating a Persona

```text
You: I'm building a monitoring tool for DevOps engineers. 
     Can you help me create a persona?

Claude: [Asks context questions first]
        To create an accurate persona, I need some context:
        
        1. What does your monitoring tool specifically do?
        2. What problem does it solve for DevOps engineers?
        3. What systems/tools would they typically use?
        
You: It monitors microservices in Kubernetes, alerts on 
     issues, helps with troubleshooting...

Claude: [Creates detailed persona]
        
        Name: Jordan Martinez
        Role: Senior DevOps Engineer / SRE
        Company: Mid-market SaaS (500 employees)
        Experience: 7 years in DevOps/infrastructure
        Technical Level: Expert
        
        Quote: "I need to know what's broken before 
                customers tell me"
        
        Goals:
        - Maintain 99.95% uptime
        - Reduce MTTR (mean time to recovery)
        - Automate repetitive troubleshooting
        - Improve system observability
        
        Pain Points:
        - Too many alerts (alert fatigue)
        - Correlation across multiple systems is manual
        - Difficult to prove ROI of reliability work
        - Legacy monitoring has gaps
        
        Behaviors:
        - CLI-first, keyboard shortcuts essential
        - Multiple monitors with dashboards
        - Checks Slack alerts constantly
        - Documents in runbooks for team
        
        Design Implications:
        - Fast, information-dense interface
        - Powerful filtering and search
        - Keyboard shortcuts essential
        - API access for automation
        - Integrate with PagerDuty/Slack
```

### Example 2: Mapping a User Journey

```text
You: Map the user journey for responding to a production 
     incident

Claude: [After context gathering]
        
        JOURNEY: Production Incident Response
        PERSONA: DevOps Engineer (on-call)
        TRIGGER: PagerDuty alert at 2 AM
        GOAL: Restore service, prevent recurrence
        
        STAGE 1: Alert & Triage (2-5 minutes)
        
        Step 1: Receive alert
        - User: Woken by phone buzzing
        - System: PagerDuty notification
        - Thinks: "How bad is this?"
        - Feels: Startled, adrenaline spike
        - Pain: Alert doesn't show severity clearly
        
        Step 2: Check dashboard
        - User: Opens laptop, loads monitoring
        - System: Shows system status
        - Thinks: "What's actually down?"
        - Feels: Anxious, trying to assess
        - Pain: Takes 30 sec to load, unclear what to check first
        
        Step 3: Determine severity
        - User: Checks error rates, customer impact
        - System: Multiple dashboards
        - Thinks: "Do I escalate or handle this?"
        - Feels: Pressure to make right call
        - Pain: No single view of customer impact
        
        STAGE 2: Investigation (10-30 minutes)
        [Detailed breakdown continues...]
        
        OPPORTUNITIES:
        - AI-powered initial triage: "API Gateway is down, 
          affects 40% of users, recommend immediate escalation"
        - Pre-populated runbook based on alert type
        - One-click war room setup (Slack channel, Zoom link)
        - Automatic customer-facing status page update
```

### Example 3: Designing a Flow

```text
You: Design the flow for configuring alert thresholds

Claude: [After context]
        
        FLOW: Configure Alert Thresholds
        TYPE: Branching Flow (smart defaults + advanced)
        
        ENTRY: From Settings > Alerts
        
        BASIC PATH (Recommended for most users):
        
        Step 1: Select Metric
        - Action: Choose from dropdown (CPU, Memory, Errors, etc.)
        - System: Shows current baseline for context
        - Smart Default: Pre-selects most relevant metric
        
        Step 2: Choose Preset
        - Action: Select severity level (Critical/Warning/Info)
        - System: Shows recommended thresholds
        - Smart Default: Based on industry standards
        - Example: CPU Critical: >90% for 5min
        
        Step 3: Set Alert Destination
        - Action: Choose notification channel (Slack, PagerDuty)
        - System: Shows available integrations
        - Smart Default: Team's primary channel
        
        Step 4: Preview & Confirm
        - Shows: What will trigger, where notifications go
        - Action: Enable alert
        - Done: 3 steps, ~30 seconds
        
        ADVANCED PATH (For power users):
        
        [Show Advanced Options]
        
        Step 2a: Custom Threshold
        - Precise value entry
        - Multiple conditions (AND/OR)
        - Time windows
        - Anomaly detection options
        
        Step 3a: Advanced Routing
        - Escalation policies
        - Time-based routing
        - Conditional routing
        
        ERROR HANDLING:
        - Invalid threshold: "Value must be 0-100%"
        - No channel: Require at least one destination
        - Save draft if user exits
        
        OPTIMIZATION OPPORTUNITIES:
        - AI suggests thresholds based on historical data
        - Templates for common alert patterns
        - Bulk configuration for similar metrics
        - Test alert before enabling
```

## Complementary Skills

This skill works beautifully with:

### UX Web Review

- **This Skill**: Defines WHO users are, WHAT they need
- **UX Skill**: Evaluates HOW well design serves those needs

### UI Design Review

- **This Skill**: Establishes user goals and mental models
- **UI Skill**: Ensures visual design supports those goals

**Use All Three**: For comprehensive design process from research through execution

## Core Expertise Areas

- User research methodologies (qualitative & quantitative)
- Persona development for technical and operational users
- Journey mapping for complex, multi-step processes
- Flow design for various patterns (linear, branching, hub, parallel)
- Enterprise/B2B research approaches
- High-stress, time-critical contexts
- Power user and expert workflows

## Skill Structure

```text
user-research-flows/
├── SKILL.md (18 KB)               Core instructions
├── README.md                       This file
├── user-research-flows.skill      Packaged skill
└── references/ (66 KB total)
    ├── persona_frameworks.md      Persona templates & methods
    ├── journey_mapping.md         Journey mapping techniques
    ├── flow_patterns.md           Flow types & optimization
    └── research_methods.md        Research methodologies
```

## What Makes This Effective

1. **Context-First** - Always understands your product/users before work
2. **Specialized Expertise** - Deep knowledge of enterprise, operational, B2B contexts
3. **Comprehensive Coverage** - Personas, journeys, flows, and research methods
4. **Actionable Output** - Every deliverable guides design decisions
5. **Professional Standards** - Based on proven research and design practices
6. **Reference-Backed** - 66KB of frameworks, templates, and methodologies

## What This Skill Doesn't Do

- Visual design (use ui-design-review skill)
- Usability evaluation (use ux-web-review skill)
- Conduct actual user interviews (provides frameworks and guides)
- Statistical analysis (provides research methodologies)
- Market research (focuses on product user research)

## How This Fits Your Library

**Skill #3 in your growing library**:

1. **UX Web Review** - Experience & usability evaluation
2. **UI Design Review** - Visual design & precision
3. **User Research & Flows** - Strategic user understanding (this one!)

**Combined Power**:

- Research - Personas, journeys, flows (this skill)
- Design - Experience solutions (UX skill)
- Execute - Visual precision (UI skill)

**Result**: Complete design process from user understanding through execution

## Progressive Disclosure

The skill uses a three-level loading system:

1. **Metadata** - Always in context (name + description)
2. **SKILL.md** - Loaded when skill triggers
3. **References** - Loaded only when Claude needs specific guidance

This keeps context usage efficient while providing deep expertise when needed.

## Contributing

Found an issue or have suggestions? This skill is part of the Claude Skills Library. See the main repository for contribution guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Links

- [Main Skills Library](../../)
- [UX Web Review Skill](../ux-web-review) (Complementary)
- [UI Design Review Skill](../ui-design-review) (Complementary)
- [Claude.ai](https://claude.ai)

---

**Created with expertise from 10+ years of user research and flow design in enterprise and complex systems**
