# Udacity - React - project

##  `Project Specification - Rubric Checklist`
### 1.0 Application Setup
Is the application easy to install and start?
1.1 The application requires only npm install and npm start to install and launch.

Does the application include README with clear installation and launch instructions?
1.2 A README is included with the project. The README includes a description and clear instructions for installing and launching the project.

### 2.0 Login Flow
2. Does the application have a way to log in and log out?
2. Does the application work correctly regardless of which person the user impersonates?
2.1 There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
2.2 The application works correctly regardless of which user is selected.
2.3 The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
2.4 Once the user logs in, the home page is shown.
2.5 Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.


### 3.0 Application Functionality
3.1 Does the home page have the desired functionality?
3.1.1 The answered and unanswered polls are both available at the root.
3.1.2 The user can alternate between viewing answered and unanswered polls.
3.1.3 The unanswered questions are shown by default.
3.1.4 The name of the logged in user is visible on the page.
3.1.5 The user can navigate to the leaderboard.
3.1.6 The user can navigate to the form that allows the user to create a new poll.

3.2 Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?
3.2.1 Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
3.2.2 A polling question links to details of that poll.
3.2.3 The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

3.3 Are the details of each poll displayed with all of the relevant information?
3.3.1 The details of the poll are available at questions/:question_id.
3.3.2 When a poll is clicked on the home page, the following is shown:
* the text “Would You Rather”;
* the picture of the user who posted the polling question; and
* the two options.
3.3.3 For answered polls, each of the two options contains the following:
the text of the option;
the number of people who voted for that option;
the percentage of people who voted for that option.
3.3.4 The option selected by the logged in user should be clearly marked.
3.3.5 When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
3.3.6 The application asks the user to sign in and shows a 404 page if that poll does not exist. (Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

3.4 Does the voting mechanism work correctly?
3.4.1 Upon voting in a poll, all of the information of the answered poll is displayed.
3.4.2 The user’s response is recorded and is clearly visible on the poll details page.
3.4.3 When the user comes back to the home page, the polling question appears in the “Answered” column.
3.4.4 The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

3.5 Can users add new polls?
3.5.1 The form is available at/add.
3.5.2 The application shows the text “Would You Rather” and has a form for creating two options.
3.5.3 Upon submitting the form, a new poll is created and the user is taken to the home page.
3.5.4 The new polling question appears in the correct category on the home page.

3.6 Does the leaderboard work correctly and have the desired functionality?
3.6.1 The Leaderboard is available at/leaderboard.
3.6.2 Each entry on the leaderboard contains the following:
the user’s name;
the user’s picture;
the number of questions the user asked; and
the number of questions the user answered.
3.6.3 Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

3.7 Is the application navigable?
3.7.1 The app contains a navigation bar that is visible on all of the pages.
3.7.2 The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

3.8 Does the application interact with the backend correctly?
3.8.1 The data that’s initially displayed is populated correctly from the backend.
3.8.2 Each user’s answer and each new poll is correctly recorded on the backend.

3.9 Is the code formatted properly?
3.9.1 All code is formatted properly and is functional.

### 4.0 Architecture
4.1 Does the store serve as the application’s single source of truth?
4.1.1 The store is the application’s source of truth.
4.1.2 Components read the necessary state from the store; they do not have their own versions of the same state.
4.1.3 There are no direct API calls in the components' lifecycle methods.

4.2 Is application state managed by Redux?
4.2.1 Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
4.2.2 Form inputs and controlled components may have some state handled by the component.
4.3 Does application state update correctly?
4.3.1 Updates are triggered by dispatching action creators to reducers.
4.3.2 Reducers and actions are written properly and correctly return updated state to the store.

4.4 Does the architecture of the application make sense?
4.4.1 The code is structured and organized in a logical way.
4.4.2 Components are modular and reusable.

### Suggestions to Make Your Project Stand Out!
Extra.1 Add the functionality for creating new users.
Extra.1 Add authentication.
Extra.2 Add a loading bar.