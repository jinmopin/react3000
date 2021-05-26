import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return (
        <img src={props.user.avatarUrl} alt={props.user.name} />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div>{props.user.name}</div>
        </div>
    )
}

function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    )

}

const comment = {
    date: new Date(),
    text: "열심히 할수록 기회는 따른다.",
    author: {
        name: "jinjeahyun",
        avatarUrl: "https://images.unsplash.com/photo-1621536816171-72c8ea3d63cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80"
    },
};
    

ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author}/>, document.getElementById("root"));

