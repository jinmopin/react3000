import React from 'react';
    import ReactDOM from 'react-dom';
    function formatDate(date){
        return date.toLocaleDateString();
    }
    function Comment(props) {
        return (
            <div className="Comment">
                <div className="user-info">
                    <img 
                        className="avatar" 
                        src={props.author.avatarUrl} 
                        alt={props.author.name} 
                    />
                    <div className="user-name">{props.author.name}</div>
                </div>
                <div className="comment-text">{props.text}</div>
                <div className="comment-date">{formatDate(props.date)}</div>
            </div>
        );
    }
    
    const comment = {
        date: new Date(),
        text: "열심히 할수록 기회는 따른다.",
        author: {
            name: "jinjeahyun",
            avatarUrl: "http://jinmopin.dothome.co.kr/portfolio/assets/images/aboutImg01.jpg"
        },
    };
    
    
    ReactDOM.render(
    <Comment date={comment.date} text={comment.text} author={comment.author} />, document.getElementById("root"));    
