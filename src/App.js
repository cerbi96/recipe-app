import React, {Component} from "react";
import './App.css';
import {results} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';





class App extends Component{

state={
  //results: [], // dla korzystania z API
  results: results, // dla korzystania z tempList
 url:"https://api.spoonacular.com/recipes/search?apiKey=62f06d15d61a4a6aa1e75836afb2768b&query=cheese", //dla wyszukiwania zwyklego
 // url:"https://api.spoonacular.com/recipes/findByIngredients?apiKey=62f06d15d61a4a6aa1e75836afb2768b&ingredients=apples,+flour,+sugar&number=2" // dla wyszukiwania po produktach

  details_id:633508
}

//DLA API

// async getRecipes(){
//   try{

//     const data = await fetch(this.state.url);
//   const jsonData = await data.json();
//   this.setState({
//     results:jsonData.results
//   })
//   }catch(error){
//     console.log(error);
//   }
// }

// componentDidMount(){
//   this.getRecipes()
// }


  render(){

    //  console.log(this.state.results)
    return (
      <React.Fragment>

          {/* <RecipeList results={this.state.results}/> */}
         {<RecipeDetails id={this.state.details_id}/>}

      </React.Fragment>
    )
  }
}

export default App;