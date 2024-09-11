import React from 'react'



const CommentsData =[
    {
    name:"Akshay",
    text:"React JS Developer",
    replies :[]
    },
    {
        name:"Rakesh",
        text:"React JS Developer",
        replies :[
            {
                name:"Infosys ",
                text:"React JS Developer",
                replies :[
                    {
                        name:"Pranay",
                        text:"React JS Developer",
                        replies :[]
                    }
                ]
            }
        ]
    },
    {
            name:"Rakesh",
            text:"Java  Developer",
            replies :[
                
                {
                        name:"Zoho",
                        text:"Java Developer",
                        replies :[]
                }
                
            ]
    },
    {
        name:"Vinay",
        text:"Javascript  Developer",
        replies :[]
    }

]


const CommentsList = ({comments})=>{
    return(
        comments.map((comment,index,i)=>(
            <div>
                <Comment key ={index} data ={comment}/>
                <div className="pl-5 border border-l-black ml-5 ">
                <CommentsList  comments ={comment.replies}/>
                </div>
            </div>
            
        )
    )
    )
}
    //Disclaimer : Don't use index as keys

const Comment = ({data})=>{
    const {name , text }= data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
           <img className="w-6 h-6 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s" alt="user-icon"/>
           <div className="px-2" > 
            <p className="font-bold" > {name}</p>
            <p>{text}</p>
           </div>
        </div>
    )
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
        <h1 className="text-2xl font-bold" > Comments</h1>
        <CommentsList comments={CommentsData}/>
    </div>
  )
}

export default CommentsContainer;