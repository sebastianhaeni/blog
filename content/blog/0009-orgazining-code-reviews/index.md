---
title: Orgazining optimized code reviews in your team
date: "2020-09-28T20:00:00.000Z"
tags: ["Agile"]
---

In the teams I worked so far, we always opted for full reviews of each engineer's code.
But how do you organize these reviews in a fashion so that they:

- are efficient - do not take more time than necessary
- improve code correctness and quality
- improve code readability
- find bugs
- allow for knowledge spread

We discussed in our team that we would like to create a consensus on what Change Reviews mean for
us and how we apply them. The following is the documentation that I created for our team.

This has been influenced by the [Google's Engineering Practices documentation](https://google.github.io/eng-practices/review/reviewer/).

And further, how do you contribute to a code base in an aligned way? I have added some contribution
guidelines as well. The contribution guidelines are inspired by [Angular's guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md).

And how do you finally map your status into a project management tool like JIRA?

Additionally, we also are holding regular know how exchange sessions or discussions related to tech
and engineering to ensure we have a common vision and understanding of recent or upcoming topics.

## Contents

- [Change Reviews](#change-reviews)
- [Contribution Guidelines](#contribution-guidelines)
- [How we use JIRA](#how-we-use-jira)
- [Tech Discussions](#tech-discussions)

---

# Change Reviews

## Review Planning

### How to define the reviewer?

In general, there should be two reviewers. The main reviewer does a thorough review, while the second reviewer is there
to catch any big mishaps and to ensure knowledge sharing throughout the team.
It might happen that there is only one reviewer in case of smaller tasks.

### Code Review is always required

Each change has to be reviewed, even minor ones. The reason for reviews of big changes should be clear. Small changes
should be reviewed to ensure nothing has been accidentally introduced that could break things. E.g. there's a faulty
merge in the change that the author was not aware of. These small reviews may be as short as 30 seconds, but they should
still occur.

## Review Execution

### Review Handover

We regard the handover from the author to the main reviewer as one of the most important aspects of a successful review.
The author has to make clear what they expect from the reviewer.

In general, there can be an "early look" review to guide the author in the right direction. For this, the build has to be
successful to make the reviewer's effort worthwhile. The integration tests are ok to be still running or failing if they take longer.
In the end there always has to be a final review. For the final review, all builds and tests have to be successful and
all merge conflicts resolved.

The author can optionally annotate their changes to explain complex factual relations.
This will enable the reviewer to be faster when trying to understand the changes.

During the handover, it should be made clear if the reviewer is allowed to push changes onto the branch. This can make
sense if the reviewer wants to commit small changes, such as:

- cosmetic changes
- fixing comments
- fixing typos
- very small code fixes
- rebase / merge onto the current `develop` branch if there are no conflicts or they are trivial

To fasten up the review process, the author or the reviewer can also request a pair review. During the pair review,
they can push changes directly within the review. After this, no further ping pong is necessary. A change can then be
merged as long as the builds and tests are successful.

### Review Feedback

In case of an async review, the reviewer creates comments in the PR. If they want the author to change something, they
create a task below the comment indicating action is needed. The change cannot be merged if there are incomplete tasks.

If the reviewer has not set any status on the PR yet, this means the review is in progress, and the author should
refrain from modifying the branch. Once the reviewer sets the status to "Needs work", the ball is back at the author
to complete the tasks in the comments. Once the reviewer is happy, they set the status to "Approve", and the author can
go ahead and merge the changes.

### Review Contents

The most important content of the review should be discussed in the handover.
Besides, the reviewer must:

- understand the user story
- understand each and every line of code in the change
- understand the commit history

The reviewer can test the code by clicking through the staged environment. They can also check it out and tinker around
in the code and tests. If this makes sense or not can be different from case to case.

What the reviewer is not doing, is to clarify story requirements with any other than the author such as the product
owner. They can or even should however discover if the story description diverges from the implementation such that
the business requirements are not met.

## Review Completion

### Merge

After the main reviewer gave their final "Approve", the author can merge the changes.

### Follow-Ups

There always may be follow-ups after the change. This is something that should generally be avoided.
A follow up can be a TODO/FIXME in the code, a bug, a missing feature, technical debt, ignored tests and so on.

If it happens, that it cannot be avoided, and the reviewers accept the follow-ups, these rules have to be observed:

- Each follow up must exist as a JIRA issue
- Commits introducing the follow up have to mention the JIRA issue
- TODO and FIXME comments must contain the JIRA issue (e.g. `// TODO fix label not being displayed (AAA-xxxx)`)

### PO Review

The PO review for larger user stories is planned at latest during the daily stand up meeting. The author has the lead.

### UX Review

In a UX intensive task, it is generally a good idea to consolidate the UX designer and get some feedback. This should
happen before any code review occurs.

---

# Contribution guidelines

## Commit message template

_Template for commits related to a JIRA issue:_

    AAA-<number> (<type>) <subject>

    Explain why this change is being made

If there is no issue, use the following template:

    (<type>) <subject>

    Explain why this change is being made

_Types:_

|          |                                                                            |
| -------- | -------------------------------------------------------------------------- |
| feat     | new feature                                                                |
| fix      | bug fix                                                                    |
| refactor | refactoring production code                                                |
| style    | formatting, missing semi colons etc; no code change                        |
| docs     | changes to documentation                                                   |
| test     | adding or refactoring tests; no production code change                     |
| build    | updating pipelines, \*.gradle, package.json etc; no production code change |
| deps     | updating maven or npm dependencies                                         |
| i18n     | updating translation files                                                 |

_Example:_

    AAA-0000 (feat) implement X validation logic

    This introduces 2 new components:

    * X-tile
    * X-edit-form

    The service `XService` has been extended to support
    updating and removing X entities via the backend.

_Remember to_

- not capitalize the subject line
- Use the imperative mood in the subject line
- Do not end the subject line with a period
- Separate subject from body with a blank line
- Use the body to explain what and why vs. how
- Use multiple lines with "-" for bullet points in body
- Squash commits that make it hard to read the history.
- Don't squash commits if they contain different types as defined above.

## Branching Model

We are using the Git Flow branching model.

See https://nvie.com/posts/a-successful-git-branching-model/ for a very nice
blog post explaining it very well.

### Feature Branches

Feature branches should be named with the prefix `feature/` as per recommendation of Git Flow.
Additionally we include the JIRA Issue number and a short description of the feature.

E.g.

    feature/AAA-9999_Group-Easteregg-Tab

This provides these benefits:

- Bitbucket will automatically link the branch with the JIRA issue and vice versa.
- We can easily jump between requirements in JIRA and the branch.
- With the description, we know what's on a feature branch even without looking up the issue description.

Other prefixes:

- `release/` reserved for branches for a version (also for hotfixes, albeit we deviate from the guide)
- `bugfix/` reserved for fixes only (refrain from doing any refactoring here)
- `hotfix/` for hotfixes that will be merged into the hotfix-release branch
- `doc/` reserved for docs-only changes

### Docs Branches

If you only update documentation you can prefix your branch with `doc/`.

E.g.

    doc/knowhow-transfer-update

So, only use it if you are certain you only committed docs changes.

---

# How we use JIRA

## Before a sprint

- We split stories into multiple stories and create an epic for it if the story has an estimate
  of over 40 hours before or during PI planning.
- We create sub-tasks for each story which has an estimate of less than a work day.
- Sub-task descriptions can be filled with additional hints or implementation detail. They should however
  not contain redundant information from the parent story.
- We do not create extra review sub-tasks unless they are really needed.

## During a sprint

- We continuously move cards in the board so it is up to date all the time.
- We log hours worked on a task when we move a card to another column and reduce the remaining estimate in
  accordance.
- An individual contributor can create new sub-tasks in their story as long as the total sum of remaining
  estimates stays the same. The reshuffling has to be discussed with the main reviewer.
- If the estimate for a task changes (up or down), this has to be discussed with the PO or Scrum Master as
  soon as it is detected.
- When a developer is done with implementing a sub-task, they move the task to the review column.
- If they reached a checkpoint which can be reviewed, they inform the reviewer personally and create a PR
  and assign the reviewer(s) to it.
- The reviewer moves the task to the To Do column if the review is not OK or completes the task(s)
  together with the author (someone merges the PR) and moves the task to the Done column.
- The reviewer also logs work hours on the task they reviewed.

## PO Review

- A story can have a PO review or not. It is up to the PO and the team to decide if it makes sense or not.
- If a story should include a PO review, we create a sub-task in the story with an empty estimate.
- This sub-task is then moved along the columns on the board when it is ongoing or complete.

---

# Tech Discussions

To ensure we have a common vision and understanding in technical topics regarding our services
that we build, we regularly hold tech discussion meetings. Everybody is invited to add their topics
to a topic list. Every developer can then vote on topics. After the event is over, we clear all votes and it starts over.

The Tech Discussions help us to improve:

- common understanding of technical aspects
- know how sharing of new concepts
- discussion of technical directions we should take
- presentation of results of spike undertakings

Action items are tracked as JIRA issues. The documentation of discussed topics always has to be
up-to-date and ensures the discussed items are not forgotten over time or decisions can be looked up
again.

---

# Conclusion

Maybe you discovered some practice which could help you in your team?

It certainly helped me a lot having this written down. Even we discussed everything in the entire
team and everbody agreed to it, it occurred sometimes that the discussed items were forgotten, and
having this document helped us to quickly resolve questions that we have already answered a year ago.
