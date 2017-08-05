                Redux: Ducks start with:
-----------------------------------------------------------

Actions (dm6-funds-travel/fundstravel/src/actions/index.js)
-----------------------------------------------------------

Example:
export const GET_PACKAGES = 'packages/GET_PACKAGES';


export function getPackages(funds){
  const request = axios.get('/api/packages/' + funds)
  return {
    type: GET_PACKAGES,
    payload: request
  }
}

* axios calls the anything that requires /api. 

Actions have a "type" and a "payload: request".
- type               =   
- payload: request   =  This is the "Result" of the API call.

NOTE:
Types should typically be defined as string constants. Actions must have a type property that indicates the type of action being performed. 

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch(). - (Skip to smart component for explanation.)


-----------------------------------------------------------

Reducers (dm6-funds-travel/fundstravel/src/reducers_getPackages)
-----------------------------------------------------------

NOTE: Actions are imported into Reducers.

Line 5 through 9 are exporting the actions found below Line 12 

* Actions are plain JavaScript objects. 

Actions have a "type" and a "payload: request".
- type               =   
- payload: request   =  This is the "Result" of the API call.

Note:
Types should typically be defined as string constants. Actions must have a type property that indicates the type of action being performed. 

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch(). - (Skip to smart component for explanation.)

Reducers conitnued: (dm6-funds-travel/fundstravel/src/index)

The reducers are imported.

const rootReducer = combineReducers({
  postUser: PostUserReducer,
  packet: GetPackages
})

export rootReducer;
base reducers invoking combinedReducers

Note: rootReducer envokes all reducers in an Asycn call.
See: http://randycoulman.com/blog/2016/11/22/taking-advantage-of-combinereducers/



-----------------------------------------------------------

Containers (dm6-funds-travel/fundstravel/src/containers/Packages/Packages)
-----------------------------------------------------------


! IMPORTANT ----------------- (information)

A (container) component is a react component that has direct connection with state managed by Redux and also called 'smart component'

A (component) is simple component which only renders the DOM elements to the screen and they are also called Dumb or Presentational component

Basically container is a Smart or Stateful component while a component is Dumb or presentational.

!-----------------



Line 2 is importing the { connect } which is the "STORE" middleware.
* middleware is what is passing data

Line 3 is importing functions from actions. (line 9 actions/index.js).
The function is basically calling to getpackages for a req.body.

! IMPORTANT -----------------
Despite the layout of code, an async call is occurring within this component and rendering mapDispatchToProps (action payload).
!-----------------

Line 8 componentWillMount() mounts line 9.

Line 9(this.props) is making the Async call to props in line 45.
(mapStateToProp is now allowing the component to shop from the store. THe props(packet.packages) is then passed as "packages" allowing this component access to it. (this.props.packages). 

Line 12 to 18 are mapping a an input filter to the state. This is continued on line 35-41.

Line 21 is the assignment of myPackages = props.packages.

Line 29 is using the map method to get the object, assigning the object key as item and rendering it into <Package />.
Example: { item.price }
Line 27 is continued in components

Line 29 is where myPackages is being mapped and passed to components/packages/packages. See Line 127 of this page.

Line 31 is where <Package /> (components/Package/Package) is being rendered with HTML and CSS. See line 125 of this page for continued explanation.

Line 35-41 is assigning the state.priceFilter the value of whatever the input is on the e.target.value(text input field). This field is assigned to be watched with an "onChange" to set the state in the super(). This is where the filter then listens to the state and applies the state.priceFilter(e.target.value).

* disregard: 
additional practices: bindactionCreators - binds dispatched items to props.


-----------------------------------------------------------

Components (dm6-funds-travel/fundstravel/src/components/Packages/Packages)
-----------------------------------------------------------


This component is called a dumb component in that we will use this to render data.

Line 4 we define our export as well as bring in the object we were given in containers/packages/packages.

-----------------------------------------------------------

That's it. That's React Redux. 

Any objects that are needed can be pulled from the reducer via the import { connect }

Interaction with the store can be pushed back to the Store as a different object with "export default connect(mapDispatchToProps )

Here's a really dumbed down diagram to assis you in your time of need.
https://image.slidesharecdn.com/redux-151020080756-lva1-app6892/95/redux-js-13-638.jpg?cb=1445329200
