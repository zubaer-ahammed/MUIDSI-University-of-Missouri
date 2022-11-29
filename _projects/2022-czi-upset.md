---
layout: project
agency: Chan Zuckerberg Initiative
key: 2022-czi-upset
permalink: /projects/2022-czi-upset/
website:
logo: czi-logo-circle.svg
title: "Achieving Accessibility for UpSet Plots"
recipients:
 - University of Utah
pi: lex
time: 08/31/2022-08/31/2024
program: Essential Open Source Software for Science (Cycle 5)
agency-website: https://chanzuckerberg.com/eoss/proposals/achieving-accessibility-for-upset-plots/
number: EOSS5
active: true
updated: 2022-11-29
publications: 
 - 2014_infovis_upset
 - 2017_bioinformatics_upsetr
 
staff:
 - lex
 - wagoner
 
# otherstaff: 
#  - 
 
# alumni:
#  - 

award: "$ 350,000"

---

The analysis of set data is a mainstay in biomedical research. BioMedical applications of set visualizations range from analyzing shared genes between species [[1]](https://www.zotero.org/google-docs/?BmWwB9), phenotypes in cancer [[2]](https://www.zotero.org/google-docs/?6SSXll), or single-cell transcriptome data [[3]](https://www.zotero.org/google-docs/?R5aZIY). Traditionally, set visualization has been done with Venn and Euler diagrams, which scale poorly beyond three or four sets [[4]](https://www.zotero.org/google-docs/?UlBPYu). To address this problem, we have developed the UpSet visualization technique [[5]](https://www.zotero.org/google-docs/?1R5xvm), which has become the canonical way to visualize set relationships for data with more than three sets. Since then, the R version of UpSet[[6]](https://www.zotero.org/google-docs/?zB0GHf) has been downloaded from CRAN close to a million times, the interactive web versions we maintain are accessed by hundreds of researchers every week, and the two papers introducing UpSet [[5]](https://www.zotero.org/google-docs/?fFU1PL) and the UpSet R version [[6]](https://www.zotero.org/google-docs/?Ac5RDR) have been cited more than 2000 times. Furthermore, we are aware of 11 different implementations of UpSet in various programming languages. We have recently launched a community platform http://upset.app explaining the UpSet technique and describing the various implementations.  Despite these successes, there remain challenges, which we aim to address in this proposal.

A key challenge is that UpSet plots are, like most scientific plots, not accessible in two different ways: first, they cannot be read by low vision or blind users; second they cannot be created by analysts who don’t write code. 

The primary objective of this proposal is to work with members of the low-vision and blind community to make UpSet plots accessible to readers (consumers) and analysts (creators) with vision deficiencies. To enable accessible creation of UpSet plots, we will develop workflows that are compatible with screen readers and other assistive devices/techniques (magnification, etc.) [[7]](https://www.zotero.org/google-docs/?hsKN1h) To make UpSet plots readable by the low vision community, we will develop an alt-text template generator for UpSet plots, summarizing relevant patterns but also providing access to layered information. These templates can then be customized by an analyst to highlight key aspects and provide domain specific context. This work will also serve as a test-bed for making other types of charts accessible. 

Our second objective is to make it easy to create and share UpSet plots by users who don’t code. To achieve this, we propose to harden and deploy our current interactive, web-based version of UpSet [[8]](https://www.zotero.org/google-docs/?gIxRat). As part of the work proposed, we will create a public server where analysts can upload their datasets, analyze it, and share or embed interactive upset versions. We will also continue development so that UpSet can be used as a component in other applications. 

In support of these objectives, we will develop a configuration format to recreate UpSet plots in other implementations. This will also allow all implementations to leverage the accessibility features we provide. We will implement interfaces to this configuration for at least one popular implementation targeting the web, Python, and R.

Finally, we will continue our community engagement efforts, such as improving the documentation website upset.app, improving documentation and examples for the UpSet web and UpSetR versions, and address issues brought up by the community.  

