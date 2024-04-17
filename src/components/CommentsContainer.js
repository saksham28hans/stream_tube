import React from 'react';


const commentsData = [
    {
        name: "Saksham Hans",
        text: "This video has the best content",
        replies: [
            {
                name: "Saksham Hans",
                text: "This video has the best content",
                replies: [
            
                ]
            },
            {
                name: "Saksham Hans",
                text: "This video has the best content",
                replies: [
                    {
                        name: "Saksham Hans",
                        text: "This video has the best content",
                        replies: [
            
                         ]
                    }
                ]
            },
        ]
    },
    {
        name: "Saksham Hans",
        text: "This video has the best content",
        replies: [
            {
                name: "Saksham Hans",
                text: "This video has the best content",
                replies: [
            
                ]
            },
            {
                name: "Saksham Hans",
                text: "This video has the best content",
                replies: [
                    {
                        name: "Saksham Hans",
                text: "This video has the best content",
                replies: [
            
                ]
                    }
                ]
            },
        ]
    }
]

const Comment = ({data})=>{
  const {name,text,replies} = data;
  return (
    <div className='flex flex-row shadow-sm rounded-lg p-2'>
        <img className= "w-12 h-12" alt="user" src = "/images/user_icon.jpg" />
        <div className='px-3'>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  );
}

const CommentList = ({comments})=>{
    return (comments.map((comment,index)=>(
        <div key={index}>
        <Comment data={comment} />
        <div className='pl-5 ml-5 border border-l-black'>
            <CommentList comments={comment.replies}/>
        </div>
        </div>
    )))
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>
        Comments:
      </h1>
      <CommentList comments={commentsData}/>
    </div>
  );
}

export default CommentsContainer;
