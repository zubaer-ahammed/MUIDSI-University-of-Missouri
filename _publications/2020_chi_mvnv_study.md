---
layout: publication
title: "Evaluating Multivariate Network Visualization Techniques Using a Validated Design and Crowdsourcing Approach"
key: 2020_chi_mvnv_study
type: paper
order: 2020-01

shortname: MVNV-study
image: 2020_chi_mvnv_study.png
image_large: 2020_chi_mvnv_study_teaser.png

authors:
- nobre
- wootton
- Lane Harrison
- lex

journal-short: CHI
year: 2020

bibentry: inproceedings
bib:
  booktitle: "Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), to appear"
  publisher: ACM
  doi: 
  pages:
  award:

# Links to a project hosted on VDL, or else externally on your own site

project:
external-project: https://vdl.sci.utah.edu/mvnv-study/
# external-project: https://vdl.sci.utah.edu/mvnv-study-analysis/

# Video entries, a preview , talk, and intro video. Vimeo IDs or youtube IDs are supported

# you need to pick either a vimeo or youtube ID. We definitely want a downloadable video too.

videos:
- name: "MVNV Introduction"
  youtube-id: galDUFeYprQ
  file: 2020_chi_mvnv_study.mp4

# - name: "MVNV Preview"

# youtube-id:

# file: 2018_chi_mvnv_study_preview.mp4

# - name: "Recorded Talk"

# vimeo-id: 299855433

# file: 2018_infovis_juniper_talk.mp4

# Provide a preprint and supplement pdf

pdf: 2020_chi_mvnv_study.pdf
supplement: 2020_chi_mvnv_study_supplement.zip

# # Extra supplements, such as talk slides, data sets, etc.

# supplements:

# - name: Vials Conference Talk Slides

# # Use link instead of abslink if you want to link to the master directory

# abslink: http://vials.io/talk/

# # Defaults to a download icon, use this if you want a link-out icon

# linksym: true

# Link to the repository where the code is hosted

code: https://github.com/visdesignlab/mvnv-study/
# code: https://github.com/visdesignlab/mvnv-analysis/

abstract: "
<p>Visualizing multivariate networks is challenging because of the trade-offs necessary for effectively encoding network topology and encoding the attributes associated with nodes and edges. A large number of multivariate network visualization techniques exist, yet there is little empirical guidance on their respective strengths and weaknesses. In this paper, we describe a crowdsourced experiment, comparing node-link diagrams with on-node encoding and adjacency matrices with juxtaposed tables. We find that node-link diagrams are best suited for tasks that require close integration between the network topology and a few attributes. Adjacency matrices perform well for tasks related to clusters and when many attributes need to be considered. We also reflect on our method of using validated designs for empirically evaluating complex, interactive visualizations in a crowdsourced setting. We highlight the importance of training, compensation, and provenance tracking.</p>"

---

# Acknowledgements

We thank John Guerra-Gomez for providing the data and the experts who gave feedback on our visualization designs. This work was funded by NSF 1835904 and 1815587.
