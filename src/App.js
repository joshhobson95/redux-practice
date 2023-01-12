import Products from './components/Products';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">



      <div>
        <span>We are going to use Redux Toolkit!! This is the newest and easiest way to use Redux.</span>
        <p>First we set up our store file!</p>
          <span>a Reducer is basically where you store your state and is named whatever you want. We export the slice as a filterSlice.reducer and import it in the store. The store holds this slice and can be used anywhere now.</span>
          <p> You can then set up your slices, slicing up peices of state that you want to use all around your application. The slices set up the methods and actions to use throughout the applications. </p>
          <p> Once the slice is configured import the reducer to your store!</p>
          <p> Now we have set up everything, and all that is left is to use the slices! We can do this by importing useSelector from react-redux in the component we are trying to pull these state slices into</p>
          <p> Similarly to use actions you must import the useDispatch hook in order to dispatch methods or actions.</p>
      <p> In this exmaple, we are using the filterSlice to set up a place to hold the filter state, which is simply whatever you type into the searchbar input. We are also setting up and storing a very simple action/method, setFilter. These two things can now be passed around to any component and will work anywhere on the App. </p>
      <p> we pass the filter state to the Filter component that so it can read what's in its own searchbar, as well as the setFilter method in order to change the state of the filter</p>
         <p> In the Products component we can use filter and setFilter to help search through the products without having to pass down any state with props.</p>
         <p>* at the root of your application, in index.js, make sure to wrap your app in Provider and import the store!</p>
         <h6>And thats some simple and easy Redux!</h6>

        
          

      </div>

      <div className='project'>
        <Filter />
        <Products filterBy="" />
          

      </div>

      
    </div>
  );
}

export default App;
