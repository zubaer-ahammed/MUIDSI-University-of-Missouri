---
layout: post
title: Introducing Trrack – A Library for Tracking Provenance on the Web
date: 2020-10-6 12:00:00
categories: blog
type: blog
authors:
  - kiran
  - zcutler
  - lex

redirect_from:
abstract: "Tracking a history of actions of an interactive visual analysis session (i.e., its provenance) has benefits ranging from simple undo/redo, to enabling reproducibility, to making post-hoc analysis of user sessions possible. However, there are no established provenance tracking libraries that visualization developers can use with their web-based tools. This blog post introduces Trrack – a web-based library designed for easy integration in existing and newly developed visualization systems."
lead-image: /assets/images/posts/2020-07_crowdsourcing_spectrum.png <!-- @zach insert teaser path here -->
---

How did we get to that particular analysis result? That’s a question that’s easy to answer when we do data analysis with scripting languages, such as R and Python. In fact, computational notebooks such as [Jupyter notebooks](), [Observable], or [R Markdown]() have come remarkably far in fulfilling Knuth’s vision of [literate programming](https://en.wikipedia.org/wiki/Literate_programming) – programming that emphasizes readability and understandability. 

In contrast, if we use a visual analysis system – with its many advantages – to investigate a research question, we might arrive at a conclusion through a sequence of actions (view specifications, filters, brushes) but these sequences are typically lost after the analysis and can’t be easily reproduced and scrutinized. And while computational notebooks make it easy to add comments to justify analysis decisions, most visual analysis systems can’t capture an analyst’s thought process. 

So can we achieve reproducibility in interactive web-based visualizations? How? These are questions [a larger research project]({{site.base_url}}/projects/2018-nsf-reproducibility/) at our lab investigates, and which were also the subject of [a paper we wrote a while ago]({{site.base_url}}/publications/2016_eurovis_clue/). 

We believe that the answer to this is tracking analysis provenance. Provenance describes the history of all actions that lead to a specific state. Provenance tracking is a critical part of enabling reproducible analysis processes, but provenance tracking also enables simple undo/redo, collaboration, and logging for post-hoc analysis of users sessions. 

There are various visualization systems that track provenance, but most use ad-hoc solutions  created for a specific visualization. Developing these solutions can be time consuming, and are likely to lack some of the key benefits that provenance can provide. 

To avoid the overhead of developing a custom provenance tracking solution, we developed Trrack – a library for tracking provenance in web-based systems. Trrack provides provenance tracking for action recovery, reproducibility, collaboration, and logging.

A paper about Trrack will be published as a [short paper at IEEE VIS]({{site.base_url}}/publications/2020_visshort_trrack/) later this month. Here’s a video introducing Trrack for the conference:
<iframe width="560" height="315" class="skip-absolute" src="https://www.youtube.com/embed/09b5_LviaVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>&nbsp;</iframe>

Track is designed to be lightweight and modular, be easy to integrate in existing or new tools, support sharing of states out of the box (copy URLs), provide optional server integration (either through Firebase or with custom servers), and to visualize the provenance data, if desired.  

## Provenance Visualization

The latter is realized through a sister library, [Trrack-Vis](), a customizable visualization that acts as of the provenance data. Trrack-Vis can be used to visualize the provenance collected by Trrack in any application in real-time. Trrack-vis can be customized to show annotations of the provenance data and aggregation of provenance nodes.

## Storage Model

Before we move on to using Trrack, let us take a look at how provenance is stored. Traditionally, there are [three different ways to store provenance data](HEER PAPER LINK).

The first approach is to **store the complete state** of an application every time something changes. This approach is fast and straightforward, but it consumes a lot of memory. 

The second approach is to store a sequence of **actions**, i.e., one keeps track of the actions that change the state of an application. This approach results in light-weight provenance data, but the downsides are that one has to execute long sequences of actions to load a particular state, which can be slow. Furthermore, if we were to export data captured like this for post-hoc analysis, we would find that the data is very specific to the implementation of the application, which can be challenging. 

A third approach is a **hybrid between these approaches** — it stores entire states at 'checkpoints', but also stores actions in between.  The hybrid approach provides a good compromise between speed and memory but still has the problem of being application dependent. It also adds a layer of complexity to the state management.

<!-- @zach insert diffrential state image here -->

Trrack introduces a new model we call the **differential state model**. Trrack occasionally stores complete state in 'state nodes', but mostly stores 'differential nodes' in between. The differential nodes only contain the changes to the state relative to the previous node. The differential approach reduces the storage required, but the provenance data is still application-independent. The decision for when to store the entire state vs. differential state is abstracted away from the developer. However, the API still allows developers to specify that a particular action should always store the complete state.

## Technical Background 

Trrack and Trrack-Vis are both written in TypeScript and provide types with generics for complete customization. Both libraries feature a clean API, rich documentation, and usage examples for multiple scenarios. Trrack is framework agnostic and can work in conjunction with any UI framework like React or Vue and state management solutions like Mobx or Redux. The documentation provides React examples with Mobx.
Trrack-Vis is available as a React component. It is possible to use Trrack-Vis in vanilla JavaScript, but it needs React as a dependency. Both the libraries are published to npm


## How to Use Trrack

## Resources

