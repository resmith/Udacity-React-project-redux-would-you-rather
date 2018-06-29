# Udacity - React - project
## Redux Final project
## Would you Rather
by R.E.Smith

[Project Specs Summary](./ProjectSpecs.html)
[Project Specs](./ProjectSpecs.md)

Notes:
* Found a much easier way to implemented protected routes than out on the internet
* Doesn't redirect but won't expose components except those authorized
* Avatars have a tooltip showing the username
* The user currently logged in is on the appBar drop-down on the right


```bash

  components/App.js (authedUser is from the store)
    <ConnectedRouter history={history}>
      {authedUser ? protectedRoutes : signinRoute }
    </ConnectedRouter>

    routes/index.js
    export const protectedRoutes = (
      <div>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/questions/new' exact component={NewQuestion}/>
          <Route path='/signin' exact component={Signin}/>
          <Route path='/help' exact component={Help}/>

        </Switch>
      </div>
    )

    export const signinRoute = (
      <div>
        <Switch>
          <Route path='/' component={Signin}/>
        </Switch>
      </div>
    )    
```



# Design
## Redux Store
  Store
  |--AuthedUser
  |- UnansweredQuestions
  |- AnsweredQuestions



## Installation / Packages Used
This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

react-router-dom
redux
redux-loading
redux-thunk
react-router-dom
connected-react-router
react-hot-loader
material-ui
react-icons
react-tooltip


## `Installation`
1. Clone/Copy
2. npm install
3. npm start

Dependencies:
Dependent on Udacity BooksApi (see src/BooksAPI.js)

## `URL -> Components`
```bash
URL             ->    Component
/               ->  Dashboard
/signin         ->  Signin

```

### `State`
```bash
Store                 
├── AuthedUser


├── BookShelf     source: props.shelf
      ├──  Book     source: props.book
        ├──  BookSelectShelf     source: props.book
```


### `Application Structure`
```bash
App                 Source
├── BookShelves     BooksAPI url:
  ├── BookShelf     source: props.shelf
        ├──  Book     source: props.book
          ├──  BookSelectShelf     source: props.book

├── Search          
      ├──  BookShelf    source: props.book
        ├──  Book     source: props.book
          ├──  BookSelectShelf     source: props.book

├── BookShelf     source: props.shelf
      ├──  Book     source: props.book
        ├──  BookSelectShelf     source: props.book
```

### `Components Purpose`
```bash
  *** App     Main driver. Calls the top level Components
          State of the BooksOnShelves is maintained there
          Send down via props
          Contains function changeShelf to modify book.shelf
              for both the state and the API update

  *** Top Level Components
  BookShelves   - Shows all the bookshelves and the books on them
                  input: BooksOnShelves
                  calls: BookShelf for each bookshelf

  Search        - Used to search for books to add them to BookShelves
                  input: BooksOnShelves
                  calls BookAPI.search based on query user Provided
                  Gets back list of books
                  Calls BookShelf component (with shelfTitle='')

  BookShelf       Is called from BookShelves and Search
                  inputs: Books, shelfTitle


  ***  Common Components
    BookShelf       Shows a bookShelf and the books on it
                    Is called from BookShelves and Search
                    calls the component Books

    Books           Renders the books
                    Is called from BookShelf
                    passed in the Book objects
                    calls selectShelf component

    BookSelectShelf Allows user to select shelf for the book
                  calls changeShelf to make the change and passed
                  down via props
```
