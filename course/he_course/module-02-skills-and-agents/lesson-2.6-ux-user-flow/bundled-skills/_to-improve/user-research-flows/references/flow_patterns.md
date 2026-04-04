# Flow Patterns Reference

Comprehensive guide to designing user flows for complex systems, enterprise software, and multi-step processes. Reference when designing or analyzing user flows.

## Why Flows Matter

**Purpose**:

- Guide users through tasks
- Prevent errors
- Optimize efficiency
- Handle edge cases
- Create predictable experiences

**What Makes a Good Flow**:

- Logical (follows mental models)
- Efficient (minimal steps)
- Resilient (handles errors gracefully)
- Flexible (supports different paths)
- Clear (next step always obvious)

## Flow Pattern Types

### 1. Linear Flow

**Pattern**: Step 1 → Step 2 → Step 3 → Complete

**Characteristics**:

- Sequential progression
- Each step builds on previous
- Can't skip steps
- Single path to completion

**Best For**:

- Onboarding/setup wizards
- Checkout processes
- Form submissions
- Compliance workflows
- Tutorial/training flows

**Design Principles**:

- Show progress clearly (step X of Y)
- Enable "back" to review
- Save progress automatically
- Validate each step before proceeding
- Provide clear "next" action

**Example**: Software Installation

```text
Welcome → 
Select Components → 
Choose Location → 
Review Settings → 
Install → 
Complete
```

**When to Use**:

- Required sequence
- Each step depends on previous
- User needs guidance
- Compliance/regulations

**When NOT to Use**:

- Users need flexibility
- Steps are independent
- Power users want shortcuts
- Multiple valid paths exist

### 2. Branching Flow

**Pattern**: Decision Point → Path A OR Path B → (may reconverge)

**Characteristics**:

- Conditional paths
- User choices determine route
- Multiple valid outcomes
- May loop back

**Best For**:

- Configuration wizards
- Troubleshooting guides
- Product customization
- Account types (personal vs business)
- Feature toggles

**Design Principles**:

- Make decision criteria clear
- Show consequences of choices
- Allow path changes (when possible)
- Provide recommendations
- Remember previous choices

**Example**: System Configuration

```text
Start → 
Select Deployment Type?
├─ Cloud → Select Provider → Configure Access
└─ On-Premise → Specify Servers → Configure Network
→ (Converge) Install Monitoring → Complete
```

**Decision Types**:

- **Simple Binary**: Yes/No, Enable/Disable
- **Multiple Choice**: Select one of several
- **Conditional**: Based on previous answers
- **Smart**: System recommends path

**When to Use**:

- Different user needs
- Product variants
- Conditional features
- Skill levels vary

**When NOT to Use**:

- Choices are overwhelming
- Wrong choice is costly
- All paths needed eventually

### 3. Hub-and-Spoke Flow

**Pattern**: Central Hub ↔ Task 1, Task 2, Task 3 (return to hub)

**Characteristics**:

- Central starting point
- Independent tasks/features
- Return to hub between tasks
- No required sequence

**Best For**:

- Dashboards
- Admin panels
- Control centers
- Project workspaces
- System settings

**Design Principles**:

- Hub shows overall status
- Quick access to all spokes
- Remember last position
- Enable spoke-to-spoke transitions
- Persistent navigation to hub

**Example**: Admin Dashboard

```text
Dashboard (Hub)
├─ User Management
├─ System Settings
├─ Reports
├─ Integrations
└─ Billing

Each spoke is independent, return to dashboard between tasks
```

**When to Use**:

- Independent features
- Power users
- Flexible task order
- Dashboard/overview needed

**When NOT to Use**:

- Tasks must be sequential
- New users need guidance
- Complex cross-feature workflows

### 4. Parallel Flow

**Pattern**: Multiple simultaneous paths → Sync point → Continue

**Characteristics**:

- Multiple actions at once
- Progress independently
- Synchronization point
- May have dependencies

**Best For**:

- Bulk operations
- Multi-resource provisioning
- Team collaboration
- Distributed systems
- Async processing

**Design Principles**:

- Show progress of all paths
- Indicate dependencies clearly
- Handle partial failures
- Allow cancellation
- Provide overall status

**Example**: Multi-Server Deployment

```text
Start Deployment
├─ Server 1: Provision → Configure → Deploy
├─ Server 2: Provision → Configure → Deploy  
└─ Server 3: Provision → Configure → Deploy
→ (All complete) Verify Health → Complete
```

**Synchronization Strategies**:

- **Wait for all**: Block until all complete
- **Wait for any**: Proceed when first completes
- **Threshold**: Proceed when N% complete
- **Timeout**: Proceed after max wait time

**When to Use**:

- Independent parallel tasks
- Bulk operations
- Performance optimization
- Distributed processing

**When NOT to Use**:

- Sequential dependencies
- Resource contention
- Complex error scenarios

### 5. Cyclical Flow

**Pattern**: A → B → C → D → (back to A)

**Characteristics**:

- Repeating process
- No true "end"
- Continuous loop
- May have exit points

**Best For**:

- Monitoring dashboards
- Review/approval cycles
- Iterative refinement
- Continuous improvement
- Operational processes

**Design Principles**:

- Optimize for repetition
- Remember preferences
- Track iteration count
- Provide exit points
- Show cycle history

**Example**: Incident Management

```text
Monitor → 
Detect Issue → 
Respond → 
Resolve → 
Document → 
(back to Monitor)
```

**When to Use**:

- Ongoing processes
- Operational workflows
- Regular review cycles
- Continuous monitoring

**When NOT to Use**:

- One-time tasks
- Goal-oriented processes
- Completion is important

### 6. Exploratory Flow

**Pattern**: Free-form navigation, user-directed

**Characteristics**:

- Non-linear
- User controls path
- Multiple entry points
- Emergent goals

**Best For**:

- Data exploration
- Research/analysis
- Content browsing
- Learning/discovery
- Troubleshooting (unknown cause)

**Design Principles**:

- Easy navigation everywhere
- Clear current location
- Breadcrumbs or history
- Save interesting findings
- Search always available

**Example**: Log Analysis

```text
Start at Dashboard
→ User might:
  - Search for specific terms
  - Filter by time/severity
  - Drill into specific logs
  - Compare time periods
  - Export findings
  - Jump to related logs
(No predetermined path)
```

**When to Use**:

- Unknown end goal
- Discovery-focused
- Power users
- Complex data

**When NOT to Use**:

- Clear goal exists
- New users
- Critical tasks
- Time-sensitive

## Flow Optimization Techniques

### Progressive Disclosure

**Concept**: Show only what's needed now, reveal more as needed

**Strategies**:

- Start with essentials, expand for advanced
- Show common options, hide rare ones
- Provide "advanced settings" section
- Reveal on hover or click

**Example**: Form Design

```text
Basic Form:
- Name
- Email
- [Show Advanced Options ▼]

Expanded:
- Phone (optional)
- Company
- Custom fields
```

**Benefits**:

- Reduces cognitive load
- Doesn't overwhelm beginners
- Still powerful for experts
- Cleaner interface

### Smart Defaults

**Concept**: Pre-fill with intelligent suggestions

**Strategies**:

- Use most common values
- Learn from user's history
- Infer from context
- Provide reasonable starting point

**Example**: Deployment Configuration

```text
Region: [us-east-1] (most common for this team)
Instance Type: [t3.medium] (based on previous deploys)
Auto-scaling: [Enabled] (company policy)
```

**Benefits**:

- Faster completion
- Fewer errors
- Guided experience
- Easy to override

### Validation Strategy

**When to Validate**:

- **Inline**: As user types (for format issues)
- **On Blur**: When leaving field (for completeness)
- **On Submit**: Before proceeding (for business rules)

**What to Validate**:

- Required fields
- Format (email, phone, etc.)
- Range (min/max)
- Business rules
- Uniqueness
- Dependencies

**Example Validation Messages**:
BAD: "Invalid input"
GOOD: "Email must include @ symbol"

BAD: "Error in form"
GOOD: "Password must be at least 8 characters"

### Error Handling in Flows

**Error Types**:

**Validation Errors** (User-fixable):

- Show immediately
- Explain what's wrong
- Show how to fix
- Don't block other fields

**System Errors** (Technical issues):

- Apologize
- Explain impact
- Provide workaround if possible
- Offer contact for help

**Business Rule Violations**:

- Explain the rule
- Show why it failed
- Suggest alternatives
- Provide exception process

**Error Recovery Patterns**:

1. **Inline Correction**: Fix without leaving page
2. **Retry**: Try action again
3. **Alternative Path**: Offer different approach
4. **Graceful Degradation**: Partial success
5. **Save and Resume**: Come back later

### Flow Shortcuts

**For Power Users**:

- Keyboard shortcuts
- Bulk actions
- Quick filters
- Command palette
- URL parameters
- API access

**Example**: Admin Actions

```text
Normal: Click user → Edit → Change role → Save
Shortcut: Select multiple users → Bulk change role → Save
Power: API call to update roles via script
```

## Flow States

### Empty State

**When**: No content/data yet

**Design**:

- Clear explanation
- Primary action prominent
- Maybe sample data
- Educational content

**Example**: New Dashboard

```text
"No dashboards yet"
[Create Your First Dashboard]
Or import from template →
```

### Loading State

**When**: Waiting for system

**Design**:

- Progress indicator
- Time estimate (if possible)
- What's happening
- Allow cancellation

**Example**: Processing Data

```text
"Analyzing 10,000 records..."
[████████░░] 80% complete
Estimated: 15 seconds remaining
[Cancel]
```

### Success State

**When**: Action completed

**Design**:

- Clear confirmation
- What happened
- Next actions
- Dismiss option

**Example**: File Uploaded

```text
[SUCCESS] Report uploaded successfully
"Monthly_Report_Q4.pdf" (2.4 MB)
[View Report] [Upload Another] [Done]
```

### Error State

**When**: Something failed

**Design**:

- What went wrong
- Why it happened (if known)
- How to fix
- Alternative actions

**Example**: Upload Failed

```text
[ERROR] Upload failed
The file is too large (max 10 MB)
[Try a smaller file] [Compress file] [Contact support]
```

### Partial State

**When**: Some items succeeded, some failed

**Design**:

- Overall status
- List successes and failures
- Bulk retry option
- Individual actions

**Example**: Bulk User Import

```text
8 of 10 users imported successfully

[OK] 8 users created
[FAILED] 2 users failed:
  - john@example.com: Duplicate email
  - invalid@: Invalid email format

[Retry Failed] [Export Errors] [Done]
```

## Flow Decision Framework

### Choosing the Right Pattern

Ask these questions:

**1. Is there a required sequence?**

- Yes → Linear or Branching Flow
- No → Hub-and-Spoke or Exploratory

**2. Are there conditional paths?**

- Yes → Branching Flow
- No → Linear Flow

**3. Can tasks happen simultaneously?**

- Yes → Parallel Flow
- No → Sequential Flow

**4. Is this a repeating process?**

- Yes → Cyclical Flow
- No → One-time completion flow

**5. Does user know the goal?**

- Yes → Directed flows (Linear, Branching)
- No → Exploratory Flow

**6. What's the user's skill level?**

- Novice → Guided, Linear
- Expert → Flexible, Hub-and-Spoke, Shortcuts

### Flow Complexity Assessment

**Simple Flow** (3-5 steps):

- Use linear progression
- Minimal branching
- Clear progress indication

**Medium Flow** (6-12 steps):

- Consider grouping into stages
- May need branching
- Progress indicator essential
- Save progress capability

**Complex Flow** (13+ steps):

- Break into multiple flows
- Use wizard with stages
- Provide overview/navigation
- Definitely save progress
- Consider alternative approaches

## Flow Documentation

### Flow Diagram Notation

```text
[Action] → Rectangle
<Decision> → Diamond
((Start/End)) → Rounded Rectangle
→ → Flow direction
├─ → Branch
└─ → Branch
```

### Example Flow Diagram

```text
((Start))
    ↓
[Load User Data]
    ↓
<Valid Session?>
├─ No → [Redirect to Login] → ((End))
└─ Yes
    ↓
[Display Dashboard]
    ↓
<User Action?>
├─ View Report → [Load Report] → [Display]
├─ Edit Settings → [Show Form] → [Save] → [Refresh]
└─ Logout → [Clear Session] → ((End))
```

### Flow Specification Template

```markdown
# Flow Name: [Task Name]

## Entry Points
- [Where users start this flow]
- [Alternative entry points]

## Exit Points
- [Success: Where users end up]
- [Cancel: What happens]
- [Error: Failure handling]

## Prerequisites
- [What must be true to start]
- [Required permissions]
- [Required data]

## Steps
1. [Step 1]
   - User Action: [What user does]
   - System Response: [What happens]
   - Next: [Where to go]
   - Error Handling: [If fails]

2. [Step 2]
   [Continue pattern]

## Edge Cases
- [Empty state handling]
- [Error scenarios]
- [Timeout handling]
- [Partial completion]

## Success Criteria
- [How we know it worked]
- [What user sees]
- [System state changes]

## Metrics
- [What we measure]
- [Success rate]
- [Time to complete]
```

## Common Flow Mistakes

### Mistake 1: Too Many Steps

BAD: 15 steps for simple task
GOOD: Consolidate, remove unnecessary steps

### Mistake 2: Unclear Next Action

BAD: Multiple buttons, unclear which is primary
GOOD: One clear primary action

### Mistake 3: No Error Recovery

BAD: Error message, no way to fix
GOOD: Clear fix path, retry option

### Mistake 4: Lost Progress

BAD: Back button loses all data
GOOD: Save progress automatically

### Mistake 5: No Escape Hatch

BAD: Wizard with no cancel
GOOD: Clear way to exit

### Mistake 6: Forcing Linear When Not Needed

BAD: Must complete steps 1-10 even if only need step 5
GOOD: Allow direct access for power users

## Flow Testing Checklist

- [ ] Happy path works smoothly
- [ ] All branches tested
- [ ] Error states handled
- [ ] Back/cancel works correctly
- [ ] Progress saves (if applicable)
- [ ] Validation is helpful
- [ ] Loading states shown
- [ ] Success confirmation clear
- [ ] Keyboard navigation works
- [ ] Mobile/responsive works

## Flow Resources

### Tools

- Figma: Flow diagramming
- Miro/Mural: Collaborative flow design
- Whimsical: Quick flow diagrams
- Lucidchart: Professional diagrams

### Patterns

- GOV.UK Design Patterns: <https://design-system.service.gov.uk/patterns/>
- Nielsen Norman Group: <https://www.nngroup.com/>
- Baymard Institute: E-commerce flows

### Books

- "Don't Make Me Think" by Steve Krug
- "The Design of Everyday Things" by Don Norman
- "About Face" by Alan Cooper
