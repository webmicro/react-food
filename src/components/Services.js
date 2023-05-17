import React, { useEffect } from "react"
import Gallery from './Gallery';

class Services  extends React.Component  {
    constructor( props )
    {
        super( props )   
        console.log('in class service constructor')            
        this.state = {
            count : 0,
            count2 : 1,
            data : false
        }
    }
    async get_news_data (){
        let url = 'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=6d28a1833043465e896549da9c1943de';
        let data  = await fetch(url);
        let json_data = await data.json();
        console.log(json_data)
        this.setState( { data : json_data })
    }
    componentDidMount(){
        this.x_interval = setInterval( ()=>{ console.log(" THis is from setInterval ") }, 1000 );
        console.log('Service componentDidMount')
        this.get_news_data()
    }
    componentDidUpdate( prevProps, prevState ){
        console.log('Service componentDidUpdate')
        if ( prevState.count != this.state.count )
        {
            console.log('count state is updated')
        } 
        if ( prevState.count2 != this.state.count2 )
        {
            console.log('count2 state is updated')
        } 
    }
    componentWillUnmount()
    {
        clearInterval( this.x_interval )
        console.log("This is service componentWillUnmount")
    }
    render(){
        console.log('in service render ')            
        return (
            <div>
                {this.props.name} And {this.props.capital} 
                <h1>Our Services from Class Component</h1>
                Count : {this.state.count}<br></br>
                Count2 : {this.state.count2}
                <button onClick={ ( x )=> { 
                    console.log(x);
                    this.setState( {                    
                    count: this.state.count + 1 } ) } }>Count++</button>
                <button onClick={ ()=> { this.setState( { count2: this.state.count2 + 1 } ) } }>Count2++</button>
                
                <p>THis is paragraph</p>
                <Gallery />

                { this.state.data && this.state.data?.articles.map( ( d, index )=>{
                    return (
                        <h3 key={index}>{d.title}</h3>
                    )
                }) }
            </div>
        )
    }
}
export default Services
// class Test{
//     constructor(x){
//         this.props = x 
//     }
// }
// class Test2 extends Test {
//     display = ()=>{
//         console.log(this.props )
//         console.log(this.props.name )3
//     }
// }
// const ob1 = new Test2( { name: "USA", capital: "Wash"} )
// ob1.display()
