---
title: A Review of Forecast at Scale
date: "2020-06-02T22:00:00.000Z"
tags: ["MSc", "AI Seminar"]
---

This is my final review of the paper
<span style="font-size: 1.2em"> _[Sean J. Taylor & Benjamin Letham (2018) “Forecasting at Scale”, The American Statistician](https://amstat.tandfonline.com/doi/full/10.1080/00031305.2017.1380080)_.</span>

I'm going to follow a common peer review template that is in place at some conferences such as
[IJCAI](https://www.ijcai.org/) while also explaining the score category further down this article, so you and future
me know what questions should be asked oneself when giving a review.

A peer review always has to be in a context. This can for example be a certain conference or journal.
So, I'm going to pretend I'm reviewing this for an AI conference similar to IJCAI (which might not make sense to ever
submit this paper there, but I'm getting there :smile:).

### My Scores

- Relevance: 5 / 10 :star:
- Significance: 5 / 10 :star:
- Originality: 1 / 10 :star:
- Technical Quality: 3 / 10 :star:
- Clarity and quality of writing: 8 / 10 :star:
- Scholarship, i.e. scientific context: 7 / 10 :star:
- Overall Score: 4 / 10 :star:
- Confidence on my assessment: 5 / 10 :star:

### My Comments About The Paper:

#### Summary

The paper "Forecasting at Scale" is a well laid out paper giving an insight into methods and techniques used to process
business time series at scale, do forecasts with the analyst in the loop and automatically select models. The trend
model incorporates dynamic growth rates and change points. The seasonality model is based on Fourier series. The
authors propose to use a method called Simulated Historical Forecasts (SHF) to automatically evaluate forecasts. The main
findings are a set of techniques to apply in a large corporation with analysts that might have their hands full of
work to optimize their workflow to produce accurate forecasts with only little intervention.

The authors assembled their techniques from several previous work, and I think one that gives a great overview is
["25 Years of Time Series Forecasting"](https://www.sciencedirect.com/science/article/pii/S0169207006000021?casa_token=1C2peihwTC4AAAAA:PvXUJamS81Jwy2zOLvC8-EZROor8Um7yyRumc8OD4mxKPGGsMYvMHeVn6ghObfztwOFY93Uu)
which is also referenced by the paper. I regard the significance and novelty as rather low and think the authors
produced a good confirmatory paper showcasing how these techniques work at scale.

The authors explained their chosen methods well, they make sense and offer what is promised. A reader gains a good feel
to build a forecasting system that can work at scale.

What I'm missing in the paper are verification results of the chosen methods and how they would fare against other or
even similar methods. Sometimes the authors also don't explain their choices.

I greatly appreciate the accompanying Python and R forecasting library [Prophet](https://facebook.github.io/prophet/)
that has all mentioned methods implemented and is super fun to use. The paper is a good introduction for users of the
library.

#### Major Issues

- As mentioned in the summary, comprehensible verification of the chosen trend and seasonality methods is largely missing.
- This paper is confirmatory of previous work and thus belongs into a journal rather than to a conference.

#### Minor Issues

- Table 1 is superfluous. The description of holidays and their format is enough.
- The style of figures should be consistent throughout the paper.
- The remark that the authors are storing SHF in Hive or MySQL can be helpful but feels out of place. Either it should
  just be more of a focus to describe implementation details or leave them away completely.

#### Confidential Notes to Editor

Since this is not a real review and there's no editor I will not write any notes here, but still include it so it's
clear a review usually includes this section.

One could mention that paper could be suspect to plagiarism or comments that the authors maybe didn't know enough about
previous work. If you are making a borderline decision you can also add some comments to make the score distinguishable
to the editor. And, if you have confidential information that you would not like the authors to know, you can add it.
This can for example be collected data that only your or your organization have and so on.

If you have a conflict of interest you should not even start the review and make it clear beforehand.

<br><br><br>

---

## Review Template

The score categories I used above are explained here. The explanations are taken from the slide deck we received at my
university ZHAW.

### Relevance

- Is the paper fully within the scope of the conference?
- Will the questions and results of the paper be of interest to researchers in the field?

### Significance

- Is this a significant advance in the state of the art?
- Is this a paper that people are likely to read and cite?
- Does the paper address an important problem?
- Does it open new research directions?
- Is it a paper that is likely to have a lasting impact?

### Originality

- Reviewers should recognise and reward papers that propose genuinely new ideas.
- As a reviewer you should try to assess whether the ideas are truly new.
- Novel combinations, adaptations or extensions of existing ideas are also valuable.

### Technical Quality

- Are the results technically sound?
- Are there obvious flaws in the conceptual approach?
- Are claims well-supported by theoretical analysis or experimental results?
- Are the experiments well thought out and convincing?
- Will it be possible for other researchers to replicate these results?
- Is the evaluation appropriate?
- Did the authors clearly assess both the strengths and weaknesses of their approach?

### Clarity and quality of writing

- Is the paper clearly written?
- Is there a good use of examples and figures?
- Is it well organized?
- Are there problems with style and grammar?
- Are there issues with typos, formatting, references, etc.?
- It may be better to advise the authors to revise a paper and submit to a later conference, than to accept and publish
  a poorly-written version. However, if the paper is likely to be accepted, please make suggestions to improve the
  clarity of the paper, and provide details of typos.

### Scholarship, i.e. scientific context

- Does the paper situate the work with respect to the state of the art?
- Are relevant papers cited, discussed, and compared to the presented work?

### Overall Score

- (10) This is best-paper material
- (9) An excellent paper, a very strong accept
- (8) A very good paper, a strong accept
- (7) A good paper, accept.
- (6) A good paper overall. I vote for acceptance, although would not be upset if it were rejected because of the low acceptance rate
- (5) Decent paper, but may be below the IJCAI threshold. I tend to vote for rejecting it, although would not be upset if it were accepted
- (4) I vote for rejecting it, but could be persuaded otherwise–3-A weak paper, just not good enough.
- (3) A clear rejection. I vote and argue for rejection. Clearly below the standards of the conference
- (2) A very strong rejection. I will actively fight for rejection.

### Confidence on your assessment

- (10) My own current research is on the topic of the paper
- (9) I have undertaken research on the topic of the paper
- (8) I am an expert in this area
- (7) I have up-to-date knowledge in the area
- (6) I don't have complete knowledge of the area, but can assess the value of the work
- (5) I have a general understanding of the area
- (4) My assessment is an informed guess
- (3) My knowledge in the area is limited
- (2) My knowledge in the area is very limited
- (1) My assessment can be wrong

### Comments to Authors (free text):

General points:

- Make sure you substantiate all the scores for the different criteria above.
- Give informative content.
- Be constructive.
- Write your comments in the same way you would like to receive comments on your own papers.

The comment section can be laid out like this, taken from [wiley.com - How to perform a peer review](https://authorservices.wiley.com/Reviewers/journal-reviewers/how-to-perform-a-peer-review/step-by-step-guide-to-reviewing-a-manuscript.html):

> - _Summary_
>
>   - Give positive feedback first. Authors are more likely to read your review if you do so. But don't overdo it if you will be recommending rejection
>   - Briefly summarize what the paper is about and what the findings are
>   - Try to put the findings of the paper into the context of the existing literature and current knowledge
>   - Indicate the significance of the work and if it is novel or mainly confirmatory
>   - Indicate the work's strengths, its quality and completeness
>   - State any major flaws or weaknesses and note any special considerations. For example, if previously held theories are being overlooked
>
> - _Major Issues_
>
>   - Are there any major flaws? State what they are and what the severity of their impact is on the paper
>   - Has similar work already been published without the authors acknowledging this?
>   - Are the authors presenting findings that challenge current thinking? Is the evidence they present strong enough to prove their case? Have they cited all the relevant work that would contradict their thinking and addressed it appropriately?
>   - If major revisions are required, try to indicate clearly what they are
>   - Are there any major presentational problems? Are figures & tables, language and manuscript structure all clear enough for you to accurately assess the work?
>   - Are there any ethical issues? If you are unsure it may be better to disclose these in the confidential comments section
>
> - _Minor Issues_
>   - Are there places where meaning is ambiguous? How can this be corrected?
>   - Are the correct references cited? If not, which should be cited instead/also? Are citations excessive, limited, or biased?
>   - Are there any factual, numerical or unit errors? If so, what are they?
>   - Are all tables and figures appropriate, sufficient, and correctly labelled? If not, say which are not
