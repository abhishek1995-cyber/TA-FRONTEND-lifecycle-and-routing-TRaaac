import React from 'react'

class Fetch extends React.Component {
    constructor(props){
        super()

        this.state = {
            data: null,
            value:'',
            title:'My name is'
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/").then((res)=> res.json()).then((profile)=> this.setState({
            data : profile,
            value : profile.results.map((item)=> item.name.first)
        }))
        
    }

    handleUser = () => {
        fetch("https://randomuser.me/api/").then((res) => res.json()).then((data)=> this.setState({
            data,
            value: data.results.map((item)=> item.name.first),
            title:'My name is'
        }))
    }



    render(){
        const{data,value,title} = this.state;
        console.log(data)
  
        if(!this.state.data){
            return <h1>loading...</h1>
        }
        return (
            <>
                    <div>
                        <img src={data.results[0].picture.medium}/>
                        <p>{title}</p>
                        <h1>{value}</h1>
                        <div>
                            <button onClick={()=>{
                                this.setState({
                                    title: 'My email is',
                                    value: data.results[0].email
                                })
                            }} >
                        <i class="fa-solid fa-user"></i>
                            </button>
                            <button onClick={()=>{
                                this.setState({
                                    title: 'My age is',
                                    value: data.results[0].dob.age
                                })
                            }}
                            >
                        <i class="fa-regular fa-envelope-open"></i>
                            </button>
                            <button
                            onClick={()=>{
                                this.setState({
                                    title: 'My street is',
                                    value: data.results[0].location.street.name
                                })
                            }}
                            >

                        <i class="fa-solid fa-calendar-xmark"></i>
                            </button>
                        <button
                        onClick={()=>{
                            this.setState({
                                title: 'My gender is',
                                value: data.results[0].gender
                            })
                        }}
                        >
                                
                        <i class="fa-solid fa-flag-checkered"></i>
                                </button>
                        <button onClick={()=>{
                                this.setState({
                                    title: 'My phone is',
                                    value: data.results[0].phone
                                })
                            }}
                        >
                                
                        <i class="fa-solid fa-phone"></i>
                                </button>
                        <button onClick={()=>{
                                this.setState({
                                    title: 'My password is',
                                    value: data.results[0].login.password
                                })
                            }}>
                        <i class="fa-solid fa-lock"></i>
                                
                                </button>
                        </div>
                        <button 
                        className='btn'
                         onClick={this.handleUser}>
                            Random User
                        </button>
                      
                    </div>
            </>
        )
    }

}

export default Fetch