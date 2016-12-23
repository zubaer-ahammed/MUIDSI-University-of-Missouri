# Vis Design Lab Website

The Vis Design Lab website is based on the Caleydo website and built with [Jekyll](http://jekyllrb.com), [SASS](http://www.sass-lang.com), [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io), and [Bitters](http://bitters.bourbon.io).

## Setup

If you have Ruby on your machine, just install Jekyll:

```ShellSession
$ gem install jekyll
```

Further details on installing Jekyll and its requirements:
https://jekyllrb.com/docs/installation/

### Running a Jekyll Server

```ShellSession
$ jekyll serve
```

### View the Generated Site

```ShellSession
$ open http://0.0.0.0:4000/
```

### Jekyll Plugins

- YouTube: https://gist.github.com/joelverhagen/1805814

### Liquid Syntax

https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

### Updating SASS Tools

To update the SASS tools, additional gems are required:

```ShellSession
$ gem install bourbon
$ gem install neat
$ gem install bitters
```
Depending on your system your might have to run those as superuser using ```sudo```.

### GitHub Pages and Jekyll

Installation instructions above for Jekyll will work for the most part, but you can also emulate the current GitHub Pages server environment with the following installation instructions:
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

To install the GitHub Pages gem, you may need to install the Ruby DevKit for your operating system.

## Contributing

 * [Adding a team member](_persons/README.md)
 * [Adding a paper](_publications/README.md)

