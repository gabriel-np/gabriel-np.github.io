---
layout: post
title:  "Make a Jekyll Github page"
date:   2016-10-02 08:00:00 -0400
categories: jekyll update
summary: Let's start with Jekyll and Git.
---
This is a Github page made with Jekyll and Git. Of course you'll have to have both of these installed.

Git came with Xcode. I also use a great deal of [Github for Desktop](https://desktop.github.com/){:target="_blank"}. 

##### Quick Ruby notes and installing Jekyll
Jekyll requires Ruby. I recommend installing [rvm](https://rvm.io){:target="_blank"} or rbenv in order to use other versions of Ruby. You also need to have the bundler gem installed on your machine.

**You could start simply with:**

```
$ gem install jekyll bundler
```

If it gets complicated, here is the [official Jekyll page for installation](https://jekyllrb.com/docs/installation/)

#### Read this

This article by [JONATHAN MCGLONE](http://jmcglone.com/guides/github-pages/){:target="_blank"} does a way better job than me at explaining this process. You should read it first.

#### List of steps
At the end of this list, you should have an installation of Jekyll hosted on your mac for local testing that you can also easily push to github for hosting.

1. Go to [github](https://github.com), register and create a new repo. If you want to be hosted on github pages, your repo will have to be named like so `github-username.github.io`.
1. Still in github, clone your repo. You will want to clone it on your mac. For technical reasons related to Coda, I found it was better to clone it directly from the command line rather than directly in Github Desktop. So I went in the `~/Sites` directory where I store all of my projects :
	<pre>
		$ cd ~/Sites
		$ git clone https://github.com/github-username/github-username.github.io.git
		$ cd github-username.github.io</pre>
1. Next up, creating the Jekyll site on your computer. You sould use `--force` to put it in your repo.
	<pre>
		$ cd ~/Sites
		$ jekyll new github-username.github.io --force</pre>
1. Then you should change what is in your Gemfile a little. Do like Jekyll suggests in the comments.
	<pre>
		# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
		# uncomment the line below. To upgrade, run `bundle update github-pages`.
		gem "github-pages", group: :jekyll_plugins<pre>
1. Don't forget to run `bundle update github-pages`. Also I have found that Jekyll left the ruby version in the Gemfile to `RUBY_VERSION` so I changed it to `ruby '2.3.1'`
1. I've also changed the content of my `_config.yml` file. There you can change your site's title among others.
1. You can test your site locally by running this command in Terminal and then visiting [http://localhost:4000/](http://localhost:4000/) in your browser.
	<pre>
		// Just make sure you're in the right dir
		$ bundle exec jekyll serve</pre>
1. Now that everything is set up according to your likings, it is a good time to `git add` everything. Remember that those Jekyll files still reside only on your computer. You need to be able to puck it to Github. 
	<pre>
		$ git add .
		$ git commit -m "Updated Jekyll site"
		$ git push</pre>
1. Github builds your Jekyll page as soon as you push to their servers.

#### Taking it a step further

I wanted to use the [Bourbon family](http://bourbon.io) to style my blog so I followed the instructions from this page at [helabs.com](https://helabs.com/artigos/2015/03/27/bourbon-family-on-github-pages/){:target="_blank"}

I like Bourbon, Neat and Bitters. Here's what I put in my main.scss file.

```
@import
    "bourbon/bourbon",
    "base/base",
    "neat/neat";
```