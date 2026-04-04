# Journey Mapping Reference

Comprehensive guide to mapping user journeys for complex systems, enterprise software, and multi-step processes. Reference when mapping or analyzing user journeys.

## Why Journey Maps Matter

**Purpose**:

- Understand complete user experience
- Identify pain points and opportunities
- Align team on user perspective
- Prioritize improvements
- Design holistic solutions

**What Makes a Good Journey Map**:

- Complete (trigger to resolution)
- Realistic (based on actual behavior)
- Detailed (actions, thoughts, emotions)
- Contextual (environment considered)
- Actionable (improvements identified)

## Journey Map Components

### 1. Journey Scope

**Definition**:

- **Start Point**: What triggers this journey?
- **End Point**: What goal is achieved?
- **Boundary**: What's included/excluded?

**Example Scopes**:

- **Narrow**: "Troubleshooting a specific alert"
- **Medium**: "Responding to and resolving an incident"
- **Broad**: "Managing system reliability over a month"

**Choosing Scope**:

- Start narrow for initial maps
- Expand once basics are understood
- Multiple maps for complex products

### 2. Journey Stages

**High-Level Phases**:

**Awareness**: User realizes they need something

- Trigger occurs
- Problem identified
- Need emerges

**Consideration**: User explores options

- Information gathering
- Evaluation criteria
- Comparing alternatives

**Action**: User takes steps toward goal

- Initial setup/configuration
- Primary task execution
- Iterative refinement

**Completion**: Goal is achieved

- Verification of success
- Cleanup/finalization
- Documentation

**Follow-up**: Post-completion activities

- Monitoring results
- Sharing outcomes
- Planning next steps

### 3. Steps Within Stages

For each stage, detail:

- **User Actions**: What they do
- **System Actions**: What system does
- **Data/Information**: What's exchanged
- **Tools Used**: What they interact with
- **Dependencies**: What must happen first

### 4. Touchpoints

**Definition**: Any interaction point

**Types**:

- **Interface**: Web, mobile, desktop, CLI
- **Channel**: Email, Slack, dashboard, API
- **Device**: Laptop, phone, server console
- **Location**: Office, home, datacenter, field
- **Integration**: Third-party tools, APIs

### 5. Thoughts & Emotions

**What User Thinks**:

- Questions they have
- Assumptions they make
- Decisions they consider
- Concerns that arise

**How User Feels**:

- Confident, uncertain, anxious
- Frustrated, satisfied, relieved
- Overwhelmed, in control
- Engaged, bored, stressed

**Confidence Level**:

- High: "I know exactly what to do"
- Medium: "I think this is right"
- Low: "I'm not sure about this"

### 6. Pain Points

**Types of Friction**:

- **Speed**: Takes too long
- **Clarity**: Confusing or unclear
- **Errors**: Things go wrong
- **Missing Info**: Don't have what they need
- **Blocked**: Can't proceed
- **Rework**: Have to redo steps

**Severity**:

- **Critical (P0)**: Blocks completion
- **High (P1)**: Major frustration
- **Medium (P2)**: Annoying but manageable
- **Low (P3)**: Minor inconvenience

### 7. Opportunities

**Improvement Areas**:

- **Automation**: What could be automated?
- **AI Assistance**: Where could AI help?
- **Simplification**: What could be removed?
- **Guidance**: Where do users need help?
- **Integration**: What connections are missing?
- **Proactivity**: What could system anticipate?

## Journey Map Template

```text
JOURNEY: [Name of journey]
PERSONA: [Which persona]
TRIGGER: [What starts this journey]
GOAL: [What user wants to achieve]

STAGE 1: [Stage Name]
├─ Step 1: [Action]
│  ├─ User Does: [Specific action]
│  ├─ System Does: [Response]
│  ├─ Touchpoint: [Interface/channel]
│  ├─ Thinks: "[Quote]"
│  ├─ Feels: [Emotion]
│  └─ Pain Points: [Issues]
│
├─ Step 2: [Action]
│  [Same structure]
│
└─ Opportunities: [Improvements for this stage]

STAGE 2: [Stage Name]
[Continue pattern]

OVERALL INSIGHTS:
- Critical Paths: [Key sequences]
- Major Pain Points: [Top issues]
- Quick Wins: [Easy improvements]
- Strategic Opportunities: [Bigger changes]
```

## Journey Mapping Process

### Step 1: Preparation

**Gather Information**:

- User research data
- Analytics (actual paths)
- Support tickets (problems)
- User interviews (stories)
- Team insights (observations)

**Define Scope**:

- Which persona?
- Which journey?
- Start and end points?
- Time frame?

### Step 2: Outline Stages

**Identify Major Phases**:

- What are the big steps?
- Natural breakpoints?
- Decision points?

**Sequence Stages**:

- Must be chronological
- Can have parallel activities
- Note any loops/iterations

### Step 3: Detail Each Stage

**For Each Stage**:

1. List all steps
2. Sequence steps
3. Add user actions
4. Add system responses
5. Identify touchpoints
6. Note thoughts/feelings
7. Mark pain points
8. Spot opportunities

### Step 4: Add Emotional Layer

**Map Emotions**:

- Graph emotional journey (high/low)
- Identify peak frustrations
- Identify peak satisfactions
- Note anxiety points

**Emotional Curve**:

```text
Satisfaction
    ↑
    |     ╱╲
    |    ╱  ╲      ╱╲
    | __╱    ╲____╱  ╲___
    |                    
    └─────────────────────→ Time
      Stage 1  Stage 2  Stage 3
```

### Step 5: Analyze & Synthesize

**Identify Patterns**:

- Where do users get stuck?
- What causes frustration?
- What delights users?
- Where are drop-offs?

**Prioritize Issues**:

- Frequency (how often occurs)
- Impact (how bad is it)
- Feasibility (how hard to fix)

**Recommend Improvements**:

- Quick wins (low effort, high impact)
- Strategic (high effort, high impact)
- Long-term (major changes)

## Journey Types

### Linear Journey

**Pattern**: A → B → C → D → Complete

**Characteristics**:

- Sequential steps
- Can't skip steps
- Clear progression

**Examples**:

- Onboarding wizard
- Checkout process
- Setup flow
- Compliance workflow

**Design Considerations**:

- Clear progress indicators
- Can't go backwards (or very limited)
- Step validation
- Save progress capability

### Cyclical Journey

**Pattern**: A → B → C → D → (back to A)

**Characteristics**:

- Repeating process
- Continuous loop
- Regular cadence

**Examples**:

- Daily monitoring routine
- Weekly reporting cycle
- Monthly deployment process
- Quarterly planning

**Design Considerations**:

- Optimize for repetition
- Remember preferences
- Support automation
- Track history

### Exploratory Journey

**Pattern**: Start → explore multiple paths → eventual goal

**Characteristics**:

- Non-linear
- User-directed
- Multiple valid paths

**Examples**:

- Data analysis
- Troubleshooting (unknown cause)
- Research
- Learning/discovery

**Design Considerations**:

- Easy navigation between sections
- Breadcrumbs or history
- Save interesting findings
- Multiple entry/exit points

### Hub-and-Spoke Journey

**Pattern**: Central hub ↔ multiple spokes

**Characteristics**:

- Central dashboard
- Task-specific areas
- Return to hub between tasks

**Examples**:

- Admin panel
- Control center
- Project dashboard
- System overview

**Design Considerations**:

- Hub shows status of all spokes
- Easy return to hub
- Spoke-to-spoke transitions (occasionally)
- Persistent hub access

### Multi-User Journey

**Pattern**: User A → hand-off → User B → (back to A)

**Characteristics**:

- Collaboration required
- Approval processes
- Shared responsibilities

**Examples**:

- Incident escalation
- Approval workflows
- Code review → deploy
- Request → fulfillment

**Design Considerations**:

- Clear handoffs
- Notifications
- Status visibility
- Audit trails
- Comments/communication

## Journey Mapping for Different Contexts

### Enterprise B2B Journey

**Unique Aspects**:

- Multiple stakeholders
- Long sales cycles
- Implementation phases
- Training periods
- Change management

**Journey Stages**:

1. **Discovery**: Researching solutions
2. **Evaluation**: Comparing vendors
3. **Purchase**: Procurement process
4. **Implementation**: Setup and migration
5. **Adoption**: Team onboarding
6. **Optimization**: Refining usage
7. **Renewal/Expansion**: Growth decisions

**Key Touchpoints**:

- Website, sales calls, demos
- Trials, pilots, proofs of concept
- Contracts, security reviews
- Implementation, training
- Support, CSM check-ins
- Usage analytics, feedback

### Operational System Journey

**Unique Aspects**:

- High stress
- Time critical
- 24/7 context
- Handoffs between shifts

**Journey Example**: Incident Response

1. **Alert Received**: Notification arrives
2. **Triage**: Assess severity
3. **Investigation**: Diagnose root cause
4. **Mitigation**: Apply temporary fix
5. **Resolution**: Implement permanent fix
6. **Verification**: Confirm resolution
7. **Post-Mortem**: Document learning

**Key Considerations**:

- Speed is critical
- Minimize cognitive load
- Clear status indicators
- Collaboration tools
- Runbook integration

### SaaS Product Journey

**Unique Aspects**:

- Self-service
- Quick ramp-up expected
- Freemium to paid conversion
- Continuous usage

**Journey Example**: New User Onboarding

1. **Sign Up**: Account creation
2. **First Value**: Quick win in minutes
3. **Exploration**: Discover features
4. **Integration**: Connect to tools
5. **Team Invite**: Bring colleagues
6. **Habit Formation**: Daily usage
7. **Upgrade Decision**: Convert to paid

**Key Considerations**:

- Time to first value
- Aha moment
- Progressive disclosure
- Viral loops (invites)
- Conversion triggers

## Journey Mapping Tools & Techniques

### Workshop Format

**Participants**:

- Product/design team (lead)
- Engineers (feasibility)
- Sales/CS (user insights)
- Actual users (if possible)

**Activities**:

1. **Define persona and journey** (15 min)
2. **Brainstorm stages** (20 min)
3. **Detail steps per stage** (45 min)
4. **Add emotions and pain points** (30 min)
5. **Identify opportunities** (30 min)
6. **Prioritize improvements** (30 min)

**Materials**:

- Large whiteboard or wall
- Sticky notes (different colors)
- Markers
- Persona printouts
- Research data

### Remote Mapping

**Tools**:

- Miro, Mural (virtual whiteboard)
- FigJam (Figma collaboration)
- Google Jamboard
- Notion (documentation)

**Process**:

- Pre-populate template
- Share async for input
- Live session for synthesis
- Record for reference

### Validation Methods

**Validate Journeys With**:

- User interviews: "Walk me through..."
- Observational studies: Watch actual use
- Analytics: Confirm paths taken
- Support data: Where problems occur
- Usability tests: Test against reality

**Red Flags**:

- No pain points identified (unrealistic)
- Only happy path (missing errors)
- Too generic (could be any product)
- No emotions shown (not human-centered)
- No opportunities (what's the point?)

## Journey Map Examples

### Example 1: DevOps - Deploy to Production

**Persona**: DevOps Engineer
**Trigger**: Code merged to main branch
**Goal**: Successfully deployed to production

**STAGE 1: Pre-Deployment Checks**
Step 1: Review CI/CD pipeline results

- User: Checks test results, security scans
- System: Shows pass/fail status
- Thinks: "Are all checks passing?"
- Feels: Cautious, methodical
- Pain: Tests flaky, false positives

Step 2: Review recent changes

- User: Looks at changelog, commit history
- System: Displays recent commits
- Thinks: "What could break?"
- Feels: Responsible, slightly anxious
- Pain: Hard to assess risk of changes

**STAGE 2: Deployment Execution**
Step 3: Trigger deployment

- User: Clicks deploy button, selects environment
- System: Starts deployment pipeline
- Thinks: "This should work..."
- Feels: Committed, can't turn back now
- Pain: No easy rollback visibility

Step 4: Monitor deployment progress

- User: Watches logs, checks metrics
- System: Streams deployment logs
- Thinks: "Is it healthy?"
- Feels: Tense, vigilant
- Pain: Too much info, hard to spot issues

**STAGE 3: Post-Deployment Verification**
Step 5: Run smoke tests

- User: Executes test suite, checks endpoints
- System: Reports test results
- Thinks: "Did we break anything?"
- Feels: Anxious until tests pass
- Pain: Slow test execution

Step 6: Monitor production metrics

- User: Watches dashboards for 15+ minutes
- System: Shows real-time metrics
- Thinks: "Looks stable..."
- Feels: Relieved when no issues
- Pain: Alert fatigue, false alarms

**Opportunities**:

- Automate risk assessment of changes
- Progressive deployment with automatic rollback
- AI-powered anomaly detection
- Consolidated deployment health dashboard
- Automated smoke test execution

### Example 2: SaaS - Responding to Customer Issue

**Persona**: Customer Success Manager
**Trigger**: Customer reports problem via email
**Goal**: Resolve issue, keep customer happy

[Similar detailed breakdown]

## Journey Map Maintenance

**Update When**:

- Product changes significantly
- New features added
- User behavior shifts
- Pain points resolved
- New pain points emerge

**Version Control**:

- Date each version
- Note what changed
- Keep history
- Link to research

**Share & Socialize**:

- Present to team regularly
- Print and post visibly
- Reference in meetings
- Use in design reviews

## Journey Mapping Resources

### Templates

- UXPressia: <https://uxpressia.com/>
- Miro Journey Map: Templates in Miro
- Smaply: <https://www.smaply.com/>

### Books

- "Mapping Experiences" by James Kalbach
- "This Is Service Design Doing" by Stickdorn et al.
- "The Customer Journey" by Stef Jansen

### Tools

- Miro/Mural: Collaborative mapping
- UXPressia: Dedicated journey mapping
- Smaply: Journey & stakeholder maps
