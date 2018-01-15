Tweet Search
===================

Simple tweet search application using React.js, Redux, and Node.js.

Installing and Running
----

Install [Node.js](http://nodejs.org/).
Install [Mongo DB](https://docs.mongodb.com/manual/installation/).

Clone GitHub repo:

```
git clone https://github.com/thejkfever/simple-tweet-search.git
```

Install node module dependencies:

```
npm install && cd react && npm install && cd ..
```

Run mongo:

```
mongod
```

Populate the databse:

```
npm run populate-db
```

Run application:

```
npm start
```

Go to [http://localhost:3000](http://localhost:3000) in your browser.


Testing
----

Test the back end:

```
npm run test-server
```

Test the front end:

```
npm run react
```


Screen shot
----

![](http://g.recordit.co/z1yEsHEw4g.gif)


Development TODO List:
----
 - [x] Create Mongo database.
 - [x] Populate database with populator script.
 - [x] Fetch tweets.
 - [x] Remove stop words.
 - [x] Rank by relevance to search query.
 - [x] Render tweets.
 - [x] Add Redux.
 - [ ] Render images from links.
 - [ ] Show which query the results are currently rendering for.
 - [ ] Update the url so that it can be shared.
 - [ ] Use absolute paths instead of relative.
 - [ ] Write tests for the server.
 - [ ] Write tests for react.
 - [ ] Change everything to typescript.
 - [ ] Use a better layout engine like masonry.
 - [ ] Return client friendly errors if any.
 - [ ] Gracefully handle errors on frontend with an error message alert.


Resources
----
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Linkifyjs](http://soapbox.github.io/linkifyjs/)
- [Moment.js](https://momentjs.com/)
- [Mongo DB](https://www.mongodb.com/)
