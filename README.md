# Udacity - React - project
## Redux Final project
## Would you Rather
by R.E.Smith

[Project Specs](./ProjectSpecs.md)  

Would you Rather?  

A polling application demonstrating React & Redux  

The application structure is in components/App.JS  

Structure  
  App.js  
    MuiThemeProvider  
        <AppBar that has an iconElementLeft  
          and an iconElementRight  
            iconElementRight changes depending if the user is logged in  
            If logged in it has a list including logout  
            If not, the list has signin  



        The routing is in ConnectedRouter
        <ConnectedRouter>
          <Switch>
            Public Routes - these are routes that anyone can go to
              e.g. /help, /signin

            It then checks if the user is not signed in.
            If not, it displays the signin component
            (but doesn't reroute them)

            Then comes the Protected Routes
            These are routes the user has to be signed in:
            Dashboard, NewPoll, Questions

            The last part is if nothing else is found then display PageNotFound

          </Switch>
        </ConnectedRouter>







## `Installation`
1. Clone/Copy
2. npm install
3. npm start
