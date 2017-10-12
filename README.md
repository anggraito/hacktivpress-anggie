# HactivPress

> A simple implementation of blog page web using vue js with API server using express. User can create article, update and delete for hsi article.

## Build with:
* [Mongoose](http://mongoosejs.com) - MongoDB Object Modeling
* [Express](https://expressjs.com/) - Enpoint and CRUD
* [Vuex](https://vuex.vuejs.org//) - Store
* [Webpack](https://vuex.vuejs.org//) - Vue-cli

## Enpoint
Route | HTTP | Description
------------ | ------------- | -------------
/api/signup | POST | Create new user
/api/signin | POST | Login as user
/api/users | GET | Get all users
/api/articles | GET | Get all articles
/api/articles | POST | Post new article
/api/articles/:id | GET | Get detail article
/api/articles/:id | PUT | Update detail article
/api/articles/:id | DELETE | Delete detail article

## Build ServerSetup
``` bash
npm install
# serve mostly localhost:3000
npm run dev
```

## Build Client Setup
```
npm install
# serve mostly localhost:8080
npm run dev
```


Checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader) for more detail.
