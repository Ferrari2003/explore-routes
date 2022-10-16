/*
-----------------------
Basic Context API Setup
-----------------------
1.Context APi: Share auth with other components (across the application)
2.Create an UserContext
3.ContextProvider with passed children
4.set the UserContext  in the index.js
5. To consume the context: export the AuthContext from UserContext
6.Now at Header or anywhere else: use useContext hook

*/ 

/*
Auth Integration
1. use getAuth by passing the app from firebase fig
2.create a function named createUser to return createUserWithEmailAndPassword

*/ 