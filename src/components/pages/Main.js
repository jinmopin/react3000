import { checkPropTypes, func } from 'prop-types';
import React from 'react';
import Header from '../Header';
import Layout from '../Layout';

// function Info({ text1, text2, text3, text4 }) {
//     return (
//         <div className="main__cont">
//             <div>{text1}</div>
//             <div>{text2}</div>
//             <div>{text3}</div>
//             <div>{text4}</div>
//         </div>
//     );
// }
function Info(props) {
    return (
        <div className="main__cont">
            <div>{props.text1}</div>
            <div>{props.text2}</div>
            <div>{props.text3}</div>
            <div>{props.text4}</div>
        </div>
    );
}

const textInfo = {
    text1 : "WE PROVIDE", 
    text2 : "VISUAL CODING",
    text3 : "SOLUTION" ,
    text4 : "FOR YOU WEBS",
};

function Main(){
    return (
        <div id="wrap">
            <Header />
            <Layout>
            <section id="mainCont">
                <div className="main__cont">
                    <Info 
                        text1={textInfo.text1}
                        text2={textInfo.text2}
                        text3={textInfo.text3}
                        text4={textInfo.text4}
                    />
                </div>
            </section>
            </Layout>
        </div>
    )
}

export default Main;