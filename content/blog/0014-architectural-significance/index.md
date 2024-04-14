---
title: Architectural Significance
date: "2023-08-02T18:00:00.000Z"
tags: ["Architecture", "Decision-Making"]
---

The following describes what can be an architecturally significant decision interpreted from [Architectural Significance Test](https://ozimmer.ch/practices/2020/09/24/ASRTestECSADecisions.html) written by Olaf Zimmermann.

## Short Form:

One of:

- High Business Value or Risk
- Important Stakeholder

… and at least one of:

- QoS Deviation
- External Dependencies
- Cross-cutting Impact
- First-of-a-Kind (FOAK)
- Historical Troubles

## Long Form

If the decision you want to take meets these criteria, writing an ADR is most appropriate.

One of these criteria apply:

1. The requirement is directly associated with high **business value** (benefit vs. cost) or **business risk**.

2. The requirement is a **concern** of a particularly important **stakeholder** such as the project sponsor or an external compliance auditor.

... and at least one of these criteria also apply:

3. The requirement includes runtime Quality-of-Service (QoS) characteristics (such as performance needs) that deviate from those already satisfied by the evolving architecture substantially.

4. The requirement causes new or deals with one or more existing external dependencies that might have unpredictable, unreliable and/or uncontrollable behavior.

5. The requirement has a cross-cutting nature and therefore affects multiple parts of the system and their interactions; it may even have _system-wide impact_ short term and/or long term (examples: security, monitoring).

6. The requirement has a First-of-a-Kind (FOAK) character: for instance, this team has never built a component or subsystem that satisfies this particular requirement.

7. The requirement has been troublesome and caused critical situations, budget overruns or client dissatisfaction on a previous project in a similar context.
