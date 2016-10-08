---
title: Installing Bourbon Family with Laravel Elixir
layout: post
summary: Sometimes you want something different.
---

### I still use Bootstrap but...

Sometimes you want something different. The Bourbon family helps.

+ Bourbon
+ Bourbon-Bitters
+ Bourbon-Neat

### Here's how I made it work in Laravel.

First :

```
$ npm install bourbon --save
$ npm install bourbon-neat --save
$ npm install bourbon-bitters --save
```

Then I made sure that this piece of code was inside of my gulpfile.

```
elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
});
```

Finally added these to my app.scss file and ran `gulp` in Terminal.

```
// Bourbon Family Stack
@import "node_modules/bourbon/app/assets/stylesheets/bourbon";
@import "node_modules/bourbon-bitters/app/assets/stylesheets/bitters";
@import "node_modules/bourbon-neat/app/assets/stylesheets/neat";
```

### Must read

+ [Laravel News](https://laravel-news.com/2016/10/installing-bourbon-neat-laravel-elixir/) 