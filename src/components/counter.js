import {component} from "react"

class counter extends component{
    constructor(props){
        super(props);
        this.state = {count : 0};

    }
    render(){
        let increment = () => {
            let curr = this.state.count;
            this.setState({count: 1 + curr});
        }
        return(
            <>
            <p>Button clicked {this.state.count} times</p>
            <button onClick={increment}></button>
            </>
        )
    }
}


export default App;