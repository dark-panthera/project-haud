Haud Application - User Management App

The app makes use of SASS, React with Redux, Hooks for Header control

# The Header is built by using Custom Hook that determines the page is either showing add or update

The site is responsive.

# Redux
The site uses Redux for state management.

# API Calls (firebase)
Made use of axios instead of firebase library.

# Redux form
Tried to make use of Redux form by repopulating initial data but it gave me an issue when typing into the field it looses the newly inserted values. 
Some sources stated it might be due to the version of the redux form.

I avoided redux form and used custom validation instead

# Server Side Rendering
Uses express + node to serve the site into server side rendering since it runs faster.
