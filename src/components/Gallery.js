import React from "react"

class Gallery  extends React.Component  {
    constructor( props )
    {
        super( props )   
        console.log('in class Gallery constructor')            
        this.state = {
            count : 0,
            count2 : 1
        }
    }
    componentDidMount(){
        console.log('in Gallery componentDidMount ')
    }
    render(){
        console.log('in Gallery render ')            
        return (
            <div>
                {this.props.name} And {this.props.capital} 
                <h1>Our Gallery from Class Component</h1>
                Count : {this.state.count}<br></br>
                Count2 : {this.state.count2}
                <button onClick={ ( x )=> { 
                    console.log(x);
                    this.setState( {                    
                    count: this.state.count + 1 } ) } }>Count++</button>
                <button onClick={ ()=> { this.setState( { count2: this.state.count2 + 1 } ) } }>Count2++</button>
                
                <p>THis is Gallery</p>
            </div>
        )
    }
}
export default Gallery
