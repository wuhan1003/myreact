import React,{ Component } from 'react';
class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            content:'',
            current:0
        }        
    }
    changeItem = (index) => {
        this.setState({
            current : index
        })
    }
    componentWillMount(){
    //     console.log(this.props);
    //     console.log(Object.getOwnPropertyNames(Tabs))
       const { children} = this.props;
    //    console.log( this.constructor )
    //    for(let i in this.constructor ){
    //        console.log(i)
    //    }
       children.forEach((val,index)=>{
            this.setState({
                [val.key]:val.props
            })
       })
    }
    render(){
        return(
            <section className="tabs">
               <Tabs.Title child = { this.state.title } changeItem = {this.changeItem} current = { this.state.current } />                
               <Tabs.Content child = { this.state.content } current = {  this.state.current } />             
            </section>
        )
    }


}




// class Title extends Tabs {
//     constructor(props){
//         super(props);
//         this.state = {}
//     }
//     render(){
//         return (
//             <nav className = "footer">
//                 { this.props.child.children }
//             </nav>  
//         )
//     }
// }

Tabs.Title = ( props ) =>{
    return(
        <nav className = "footer">
            {props.child.children.map((val,index)=>{
                return (
                    <a href="javascript:;" key={index} onClick = { e =>  props.changeItem(index) } >
                        { val }
                    </a>
                )
            })}
        </nav>  
    )
}
Tabs.Content = (props)=>{
    return(
        <section className = "content">
            { props.child.children.map((val,index)=>{
                return(
                    <section className = { props.current === index ? 'active' : '' } key = {index}>
                        { val }
                    </section>
                )
            })}
        </section>  
    )
}


export default Tabs;