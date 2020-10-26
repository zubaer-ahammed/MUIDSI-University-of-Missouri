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
lead-image: /assets/images/posts/2020_infovis_trrack_teaser.png
---

How did we get to that particular analysis result? That’s a question that’s easy to answer when we do data analysis with scripting languages, such as R and Python. In fact, computational notebooks such as [Jupyter notebooks](https://jupyter.org/), [Observable](https://observablehq.com/), or [R Markdown](https://rmarkdown.rstudio.com/) have come remarkably far in fulfilling Knuth’s vision of [literate programming](https://en.wikipedia.org/wiki/Literate_programming) – programming that emphasizes readability and understandability.

In contrast, if we use a visual analysis system – with its many advantages – to investigate a research question, we might arrive at a conclusion through a sequence of actions (view specifications, filters, brushes) but these sequences are typically lost after the analysis and can’t be easily reproduced and scrutinized. And while computational notebooks make it easy to add comments to justify analysis decisions, most visual analysis systems can’t capture an analyst’s thought process.

So can we achieve reproducibility in interactive web-based visualizations? How? These are questions [a larger research project]({{site.base_url}}/projects/2018-nsf-reproducibility/) at our lab investigates, and which were also the subject of [a paper we wrote a while ago]({{site.base_url}}/publications/2016_eurovis_clue/).

We believe that the answer to this is tracking analysis provenance. Provenance describes the history of all actions that lead to a specific state. Provenance tracking is a critical part of enabling reproducible analysis processes, but provenance tracking also enables simple undo/redo, collaboration, and logging for post-hoc analysis of users sessions.

There are various visualization systems that track provenance, but most use ad-hoc solutions  created for a specific visualization. Developing these solutions can be time consuming, and are likely to lack some of the key benefits that provenance can provide.

To avoid the overhead of developing a custom provenance tracking solution, we developed Trrack – a library for tracking provenance in web-based systems. Trrack provides provenance tracking for action recovery, reproducibility, collaboration, and logging.

A paper about Trrack will be published as a [short paper at IEEE VIS]({{site.base_url}}/publications/2020_visshort_trrack/) later this month. Here’s a video introducing Trrack for the conference:
<iframe width="710" height="400" class="skip-absolute" src="https://www.youtube.com/embed/09b5_LviaVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>&nbsp;</iframe>

Track is designed to be lightweight and modular, be easy to integrate in existing or new tools, support sharing of states out of the box (copy URLs), provide optional server integration (either through Firebase or with custom servers), and to visualize the provenance data, if desired.  

## Provenance Visualization

The latter is realized through a sister library, [Trrack-Vis](), a customizable visualization that acts as of the provenance data. Trrack-Vis can be used to visualize the provenance collected by Trrack in any application in real-time. Trrack-vis can be customized to show annotations of the provenance data and aggregation of provenance nodes.

## Storage Model

Before we move on to using Trrack, let us take a look at how provenance is stored. Traditionally, there are [three different ways to store provenance data](http://www.cs.tufts.edu/comp/250VA/papers/heer2008graphical.pdf).

The first approach is to **store the complete state** of an application every time something changes. This approach is fast and straightforward, but it consumes a lot of memory.

The second approach is to store a sequence of **actions**, i.e., one keeps track of the actions that change the state of an application. This approach results in light-weight provenance data, but the downsides are that one has to execute long sequences of actions to load a particular state, which can be slow. Furthermore, if we were to export data captured like this for post-hoc analysis, we would find that the data is very specific to the implementation of the application, which can be challenging.

A third approach is a **hybrid between these approaches** — it stores entire states at 'checkpoints', but also stores actions in between.  The hybrid approach provides a good compromise between speed and memory but still has the problem of being application dependent. It also adds a layer of complexity to the state management.

![Differential States Model]({{site.base_url}}/assets/images/posts/2020-trrack-diff-states.png)

Trrack introduces a new model we call the **differential state model**. Trrack occasionally stores complete state in 'state nodes', but mostly stores 'differential nodes' in between. The differential nodes only contain the changes to the state relative to the previous node. The differential approach reduces the storage required, but the provenance data is still application-independent. The decision for when to store the entire state vs. differential state is abstracted away from the developer. However, the API still allows developers to specify that a particular action should always store the complete state.

## Technical Background

Trrack and Trrack-Vis are both written in TypeScript and provide types with generics for complete customization. Both libraries feature a clean API, rich documentation, and usage examples for multiple scenarios. Trrack is framework agnostic and can work in conjunction with any UI framework like React or Vue and state management solutions like Mobx or Redux. The documentation provides React examples with Mobx.
Trrack-Vis is available as a React component. It is possible to use Trrack-Vis in vanilla JavaScript, but it needs React as a dependency. Both the libraries are published to npm


## How to Use Trrack

To use trrack we show a minimal example of a todo list. We can add an item to the todo list by typing in the input and pressing add task button. We can press undo to revert our action. Click on `Open Sandbox` to open an editable version and experiment.

<iframe class="skip-absolute"  src="https://codesandbox.io/embed/basic-track-example-g2bsf?fontsize=12&hidenavigation=1&theme=light"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="basic-track-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

To utilize Trrack, developers will have to create and maintain a state for their application. This state should define variables for anything that designers would like to be tracked. Defining state explicitly is a critical part of implementing Trrack, but we often found that it also encourages good software engineering.

State is usually a `javascript` object. If using `typescript` we can use `interface` or `type` to create a shape for our state as below.

```ts
interface State {
  selectedQuartet:string;
  selectedNode:string;
  hoveredNode:string;
};

const initialState: NodeState = {
  selectedQuartet: 'I',
  selectedNode: 'none',
  hoveredNode: 'none'
}
```

Additionally for `typescript` users, we recommend storing an event type object which all of your events will fall under. This ensures it is easy to identify the event associated with a node, and allows Trrack-Vis to use icons to distinguish between events.

```ts
type EventTypes = "Change Quartet" | "Select Node" | "Hover Node"
```

Now we are ready to setup Trrack itself!

For Typescript
```ts
let prov = initProvenance<NodeState, EventTypes, any>(initialState, { loadFromUrl: false });
```

For Javascript
```js
let prov = initProvenance(initialState, { loadFromUrl: false });
```

For the second parameter we pass in a config option `loadFromUrl`. We are setting this to `false`, it is `true` by default. We will talk about URL sharing later.

Trrack takes advantage of an observer software design pattern. To identify changes that are made to the state, an observer must be assigned to that part of the state. For example, here is an empty observer which would be called when any changes are made to the "selectedQuartet" part of the previously defined state.

```ts
prov.addObserver((state) => state.selectedQuartet, () => {
  //Update visualization here
});
```

The observers will be called when your state changes via changing the frontend, and also when your state changes via undo/redo or navigating through Trrack-Vis. Because of this we recommend only updating your visualization front-end within these observers, to avoid code-duplication and inconsistent changes.

So, instead of updating the visualization when a user makes changes, developers should add and apply a provenance action. This is where the user updates the state, adds a label or event type, and defines any desired metadata. This is also where more intricate customization happens, such as labeling a node as ephemeral or ensuring the node stores the entire state. Here's the example updating our "selectedQuartet".

First, we create a action.
```js
  const changeQuartetAction = createAction((state, quartet) => {
        state.selectedQuartet = quartet;
      })
        .setLabel("Changing Quartet");
```

Second, we pass in the arguments and apply the whenever we want to execute it.

```ts
prov.apply(changeQuartetAction('new-quartet-name'))
```

When an action is applied, a new provenance node is created, and any observers whose state were changed are triggered. Thus, applying an action is indirectly updating the visualization, as you would expect when the quartet number is changed.

And that's it! For simple implementation that allows for undo/redo, that is everything required. However, there are still many helpful features that can be added to the basic implementation.

# Ephemeral Nodes

Labeling a created node as ephemeral has two main affects. First, it ensures that the node is not included in the typical undo/redo chain. This is so certain actions which you may want to track, like hover actions or mouse movements, aren't included in undo/redo. Second, ephemeral nodes are automatically grouped in Trrack-Vis, so that they don't consume too much space.

To tag an action as ephemeral, we set it up when we create the action. If we wanted the earlierr example action to be epphemeral, it would look like this.

```js
  const changeQuartetAction = createAction((state, quartet) => {
        state.selectedQuartet = quartet;
      })
        .setLabel("Changing Quartet")
        .setActionType("Ephemeral");
```

# Adding Trrack-Vis

To add the simple, base version of Trrack-Vis is an easy one liner. The Library exports a "ProvVisCreator" function, which takes in the div that you want Trrack-Vis added to, your provenance graph from Trrack, and a callback function. Once Trrack-Vis is set up, it will automatically update when the Trrack provenance graph changes, and will change the current node in Trrack whenever a node in the graph is clicked.

```js
    ProvVisCreator(document.getElementById('provDiv')!, prov, visCallback);

    // Function called when a node is clicked.
    const visCallback = function (clickedNode: NodeID) {
      prov.goToNode(clickedNode);
    };
```

This simple setup enables most features in Trrack-Vis. You can navigate the graph, as well as bookmark and annotate any node.

Further customization, such as custom icons and node bundling is also available. These features are shown here, from the [intent project]({{site.base_url}}/publications/2020_preprint_intent/) which used Trrack. For more information, see the [documentation](http://vdl.sci.utah.edu/trrack-examples/api/trrack-vis/).

![Intent Trrack Vis]({{site.base_url}}/assets/images/posts/2020_intent-trrack-vis.png)

# Enabling URL Sharing

To enable URL sharing, change the second parameter of initProvenance as shown earlier to true. Or, simply remove the parameter, and by default URL sharing will be enabled. The only further code required from the developer is a call to done() after the observers are setup, telling trrack that it is okay to load the state stored in the URL.


# Basic example with Typescript and d3
<iframe class="skip-absolute" src="https://codesandbox.io/embed/scatterplot-example-t0dd2?fontsize=14&hidenavigation=1&theme=light"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="scatterplot-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Resources

For the rest of the code for this example, as well as other examples, see [here](https://github.com/visdesignlab/trrack/tree/master/packages/trrack-examples).
For deployed examples, see [here](http://vdl.sci.utah.edu/trrack)

<!-- update these links after Kiran moves stuff -->

[Trrack Library](https://github.com/visdesignlab/trrack)

[Trrack-Vis Library](https://github.com/visdesignlab/trrack/tree/master/packages/trrack-vis)
