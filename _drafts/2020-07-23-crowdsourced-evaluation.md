---
layout: post
title: How Far Can We Push Crowdsourced Evaluation of Visualization Techniques? 
date: 2020-07-22 12:00:00
categories: blog
type: blog
authors:
  - lex

redirect_from:
abstract: "Crowdsourcing is a popular method for conducting quantitative studies, yet up to now, the types of studies that were run on crowdsourcing platforms was narrow. In this blog post, we describe a method to evaluate complex visualization techniques in a crowdsourced setting, which we developed for a 2020 CHI paper on evaluating multivariate network visualization techniques."
lead-image: /assets/images/posts/2020-07_crowdsourcing_spectrum.png
---

![A spectrum of studies from perceptual, to static visualization, to studies with controlled interactions are amenable to quantitative studies. Complex visualization systems are not]({{site.baseurl}}/assets/images/posts/2020-07_crowdsourcing_spectrum.png)

Caption: *Quantitative studies are usually confined to conditions where all factors can be controlled, making them less suitable to evaluate complex visualization systems.*

User studies are a powerful tool to evaluate visualization techniques.  In our recent CHI paper [Evaluating Multivariate Network Visualization Techniques Using a Validated Design and Crowdsourcing Approach]({{site.baseurl}}/publications/2020_chi_mvnv_study/) we present a crowdsourced study comparing two common network visualization techniques: node link-diagrams and adjacency matrices. We’re hardly the first ones to run such a study (see  examples by [Ghnoiem et al.](http://iihm.imag.fr/blanch/teaching/infovis/readings/2004-Ghoniem-GraphReadability.pdf) and [Okoe et al.](https://www2.cs.arizona.edu/~kobourov/NL-AM-TVCG18.pdf)), although ours is different from the others as it focuses on the attributes associated with nodes and links in the networks. If you’re a network geek, please check out the full paper, but in short, we found various pros and cons of matrices vs. node-link diagrams, and most importantly, we were able to show that these representations lead to different types of insights. 

In this blog post, we want to take a look at a different, more general, aspect of our paper: our study methodology. 





## Quantitative and Qualitative Studies

The common dichotomy in VIS research distinguishes between quantitative and qualitative evaluation approaches. Quantitative methods are used to study conditions where the factors of a design can be controlled, so that we can clearly attribute any differences in performance or preference to these factors. Due to the need for control, these types of studies are usually done in a narrow context, with perceptual experiments (e.g., [Jardin et al.](https://ieeexplore.ieee.org/document/8807320))  on the extreme end, and tools with limited interaction on the other end (e.g., [Feng et al.](https://web.cs.wpi.edu/~ltharrison/docs/feng2018effects.pdf)). Such controlled studies ideally lead to reproducible, robust knowledge, but frequently lack ecological validity making the results sometimes difficult to apply. 

On the other end of the spectrum are qualitative studies, that look at the effect of a complex system on its environment. These efforts often involve gathering real-world usage data through interviews with domain specialists and over-the-shoulder observations of analysis workflows. A common example of qualitative studies are case studies frequently found in visualization design studies, or deployment studies based on log file analysis. These studies have high ecological validity but limited generalizability. 

With clearly established settings for both qualitative and quantitative studies, efforts that cross the boundaries of each approach are uncommon. To this end, we ask whether conducting a quantitative study to evaluate a real-world system would even be valid? How would such a study control for different factors in the system? In this work, we develop and implement a study methodology that addresses these questions.  

This dichotomy unfortunately makes it difficult to quantitatively evaluate the relative performance of two (or more) complex and/or interactive techniques: they are too complex to clearly isolate the factors that lead to performance differences, yet comparing techniques is also ill-suited for qualitative approaches, as a technique prototype doesn’t necessarily provide all the features for real-life usage, and giving real users two different techniques is also tricky. 

## A Method for Quantitative Studies of Complex Visualization Techniques

To address this problem, we developed a new method, which rests on two pillars: (1) rigorous design of the visualization techniques being evaluated and (2) training of non-expert users in interacting with these complex visualizations. 

### Validated Design

As part of the rigorous design approach we need to choose which techniques to evaluate. We recommend using our methodology for established approaches that have stood the test of time. In our case, we choose adjacency matrices and node-link diagrams, as two well-established techniques. We argue against using our method for novel techniques, possibly introduced in the same paper as this can lead to biases – the novel technique might have been unconsciously given more attention than the competition. 

Furthermore, it is important to actually design both techniques using the same design principles and aesthetics. We do not recommend to use two existing systems, possibly developed by different teams, as this introduces significant variability. 

To design the techniques, we drew on the vast amount of prior work and followed best practices both for visual encodings and for interaction design. When selecting which interactions to include, we decided to implement those that are naturally afforded by the visualization technique. For example, we implemented an interactive sorting feature for our adjacency matrix – it enabled sorting by a “clustering measure”, but also by attributes. The node-link diagram, in contrast, doesn’t have an equally powerful method to reveal nodes that have the biggest or smallest attribute, because it’s not a feature that would be natural for a node-link diagram. 

We also debated whether we should include interactive legends, as they could potentially be used to solve some tasks easily. We decided against it, because interactive legends aren’t essential for network visualizations. We also considered the nature of our tasks: when we asked users to find the node with the largest attribute, the task is really a proxy for an analysis process that is much more exploratory in reality. Solving such tasks is easy with query or tools, yet that’s not the point: We use these tasks to simulate questions that might arise naturally when exploring a dataset. 

Here are videos to show the level of interactivity in the techniques. You can also check out a [live version of the two techniques](https://vdl.sci.utah.edu/mvnv-study/).

  <div class="video-wrapper">
            <iframe width="853" height="480" src="https://www.youtube.com/embed/YvYhBage34U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
Caption: *Demonstration of interaction in the adjacency matrix condition.* 


  <div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Sl-K_8y2Cnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
Caption: *Demonstration of the interaction in the node-link condition.*

To identify usability problems with the system, and issues with the study design, we ran multiple pilots, both informally with students, or on prolific, the crowdsourcing platform we used. 

To externally validate our designs, we then reached out to network visualization experts to perform a heuristic evaluation of our designs, and give feedback for possible improvements. We followed [Wall et al.’s methodology](http://visvalue.org/), but extended their survey with tailored questions (see supplementary material on the [paper’s page]({{site.baseurl}}/publications/2020_chi_mvnv_study/)). Based on the feedback we received, we again improved our design. 

This careful design and validation approach resulted in two interactive techniques that we believe are “as good as it gets”, while being limited to the affordances of each technique. 
Our argument is that given such well-designed techniques, we can eliminate as many confounding factors as possible and can actually get to the inherent strengths and weaknesses of each visualization technique.


### User Training

The second aspect that one needs to consider when evaluating an interactive technique, as opposed to a stimulus is user expertise. Node-link diagrams, but especially adjacency matrices aren’t techniques that the general population is familiar with. What we care about in many situations, however, is how well an (at least slightly) experienced user would be able to answer analysis questions with a particular technique. Training study participants is problematic in lab studies, but especially so in crowdsourced studies, as the typical task in a crowdsourced study is usually very short and requires little training. 

To get crowdsourcing participants to the required expertise for a technique (we used a between subjects design), we trained them for about 15 minutes. We first showed a video, introducing the principles of the visualization technique (passive training), followed by an interactive training component, where they had to solve certain tasks (active training). 

The study itself lasted 40 minutes on average, which is exceedingly long for a crowdsourced study. Given the overall high accuracy rate (>75% across conditions), we believe that our training was successful. 

### Other Considerations 

Another aspect that we believed contributed to our high accuracy and engagement was our above-average compensation. We offered the equivalent of $15 USD hourly wage for a 40 minute study, which is much higher than the typical hourly wage on Amazon Mechanical Turk, and twice as high as the minimum required by Prolific. Probably driven by the high compensation, we recruited all 322 participants in under two hours. We also found that this high compensations lead to high engagement: in our final open exploration tasks, we asked participants to explore the data and write down any insights they might have had. Even though they could have just clicked away the answer box, about 80% of all participants chose to provide answers with meaningful insights.  

We also used advanced logging in the form of fully-fledged provenance tracking for our study. This data was useful to identify and correct for a variety of problems. For example, we were able to subtract the time that participants browsed away from the study window in this way. A more detailed discussion of our provenance tracking and analysis approach, however, is better reserved for a separate blog post. 

## Conclusion

We believe that our techniques were among the most complex visualization systems ever evaluated using crowdsourcing. Obviously, our approach is no panacea: the type of systems that need deep domain expertise, for example, can’t be easily evaluated this way. It’s also not appropriate to compare two independently developed systems, or to evaluate a newly proposed technique. We also can’t match the depth of insights derived from qualitative methods. 

And even though there are many challenges with our approach, if done carefully, we argue that our method – careful design, usability testing, external evaluation, training, and above-average compensation – makes it possible to run meaningful quantitative evaluations of complex, interactive visualization systems. Given our results, we believe that a much broader range of experiments can be run using crowdsourcing platforms than was previously thought. 



## Acknowledgements

I’d like to thank Carolina Nobre, Dylan Wooton, and Lane Harrison for help with this blog post. 
