/*
React Router:- It is a fully featured client and server side routing library for react 

It helps in creting the navigation between URLs that make up our web Application

It Provides the Unique URLs for different components in the app that makes the UI sharable with other users 


Course Content: - 

Configuring routes

Navigating on button click

Navigating Programatically

Dynamic Routes

Nested Routes 

Route Paramenters 

Lazy Loading 

Authentication


Speciality of NavLink Component :- 

It is by default it receives an active class when the link  is the current route 

So that we can add some styles to that class .

NavLink component is specifically meant for building components like navbar , BreadCrumbs , tabs  etc.

Navigating Programatically:- OnClick of the Button we have to navigate to the compoenent

<button 
   onClick={() => navigate('order-summary', { replace: true})}>
</button>

by using replace to the true we will be navigating to the totally a new tab

If we want to replace the history we can use the second argument 

<Route path="*" element={ <NoMatch /> }   />
This Route path has a special meaning in the react-router this route will match when only no other route will do .

Speciality: Nested Routes 

React Router Automaticallly forms the full path to the children routes 

Outlet:- Renders the routes of child element.

we can notice that child route renders only when the url is 
/products/featured  or /products/new 

Index Route: - It will share the path of the Parent route which is products 

Index route will contain index instead of the path  and path would be the same as the index


Dynamic Routes:- Even though we have the Dynamic routes with  the userId can be anything 

React router is smart enough to match the most specific route before matching the dynamic routes .

It is possible to have the nested dynamic routes 

Dynamic routes can be nested as well .


useParams is used for the specific user Id we want to go

Search Params :- ?filter=active --> these kind of parameters are called search params.

useSearchParams works same as the useState hook in react Instead of storing the state in the memory though it is stored in the url .

our code with search params is working as expected Now using searchparms is common when we want to apply filters in a listing page .


Relative Link:- A Relative link is a Link that does not starts with forward / and will inherit the closest route in which they are rendered .

If we want to  start with forward / the we need to use the parent route eg:- /products/new 

Lazy Loading:- Lazy Loading is a technique where the components are not required on the home page can be split into separate code bundles and downloaded only when the users navigates to that page 


Profile:- we should make Profile as the protected route it is accessible only when the user login .

Protecting the routes should be reusalbe piece of code that will be used 

*/