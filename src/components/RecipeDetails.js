import React, { Component } from 'react';
import {detailResult} from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      results:{},
      detailResult:detailResult,
      url:`https://api.spoonacular.com/recipes/${this.props.detail_result}/information?includeNutrition=false&apiKey=62f06d15d61a4a6aa1e75836afb2768b`
    }
  }
  /* Nie wiem dlaczego tu jest błąd. Wyrzuca 404 tak jakby nie widział tego ID w template stringu
    Jednak gdy wrzuce mu na sztywno jakiś ID który jest prawidłowy to nie wyrzuca błędu ale
    też nie przeładowuje strony. Może to sugerować, że jest coś nie tak z przekazywaniem state i props bo czyta dane z tempDetails... 
  */
 
    
    async componentDidMount(){
      try{
    
        const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        result:jsonData.result
      })
      }catch(error){
        console.log(error);
      }
    }
    

    
  render() {
     console.log(this.state.detailResult);
    const{image,readyInMinutes,sourceName,sourceUrl,title,extendedIngredients} = this.state.detailResult;
    return (
     <React.Fragment>
         
          <div className="container">
           
           <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3">
               
               <button type="button" className="btn btn-secondary my-5 text-capitalize">Return to Recipe List</button>
               <img src={image} className="display-block w-100" alt="recipeImg" />
             </div> 
             {/* Details section */}
              <div className="col-10 mx-auto col-md-6 my-3 p-5">
               <h6 className="text-uppercase">{title}</h6>
               <h6 className="text-info inline-block">Recipe provided by <p className="text-warning text-capitalize">{sourceName}</p>
               
               </h6>
               <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 text-white">
                Go to publisher webpage
               </a>
               <ul className="list-group mt-4">
                 <h2 className="mt-3 mb-4">
                    <p className="mx-auto">Ingredients</p>
                    {
                      extendedIngredients.map((item,index)=>{
                        return (
                          <li key={index} className="list-group-item ">
                           <p className="h6">{item.name}</p> 
                          </li>
                        )
                      })
                    }
                 </h2>
               </ul>
             </div>

           </div>
           
         </div>
         
         
     </React.Fragment>
    );
  }
}
