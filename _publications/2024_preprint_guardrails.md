---
layout: publication
title: "Visualization Guardrails: Designing Interventions Against Cherry-Picking in Interactive Data Explorers"
key: 2024_preprint_guardrails
type: preprint
order: 2024-3
redirect_from: /publications/2024_preprint_guardrails/

shortname: Guardrails
image: 2024_preprint_guardrails.png
image_large: 2024_preprint_guardrails_teaser.png

authors:
  - lisnic
  - zcutler
  - Marina Kogan
  - lex

journal-short: Preprint
year: 2024

bibentry: preprint
bib:
  booktitle: "Preprint"
  doi: 10.31219/osf.io/4j9nr

# Links to a project hosted on VDL, or else externally on your own site

project: https://vdl.sci.utah.edu/viz-guardrails-study/sandbox/interface
external-project: 

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported
# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

videos:


# Provide a preprint and supplement pdf

pdf: 2024_preprint_guardrails.pdf
supplement: 2024_preprint_guardrails_supplement.zip

# Link to an official preprint server
preprint_server: https://doi.org/10.31219/osf.io/4j9nr

# # Extra supplements, such as talk slides, data sets, etc.


code: https://github.com/visdesignlab/viz-guardrails-study

abstract: "
<p>
The growing popularity of interactive time series exploration platforms has made visualizing data of public interest more accessible to general audiences. At the same time, the democratized access to professional-looking explorers with preloaded data enables the creation of convincing visualizations with carefully cherry-picked items. Prior research shows that people use data explorers to create and share charts that support their potentially biased or misleading views on public health or economic policy and that such charts have, for example, contributed to the spread of COVID-19 misinformation. Interventions against misinformation have focused on post hoc approaches such as fact-checking or removing misleading content, which are known to be challenging to execute. In this work, we explore whether we can use visualization design to impede cherry-picking—one of the most common methods employed by deceptive charts created on data exploration platforms. We describe a design space of guardrails—interventions against cherry-picking in time series explorers. Using our design space, we create a prototype data explorer with four types of guardrails and conduct two crowd-sourced experiments. In the first experiment, we challenge participants to create cherry-picked charts. We then use these charts in a second experiment to evaluate the guardrails’ impact on the perception of cherry-picking. We find evidence that guardrails—particularly superimposing relevant primary data—are successful at encouraging skepticism in a subset of experimental conditions but come with limitations. Based on our findings, we propose recommendations for developing effective guardrails for visualizations.
</p>
"
---

# Acknowledgements

This work is supported by the National Science Foundation (IIS 2041136, IIS 1751238, and CNS 2213756).
