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
function Info(prop) {
    return (
        <div className="main__cont">
            <div>{prop.text1}</div>
            <div>{prop.text2}</div>
            <div>{prop.text3}</div>
            <div>{prop.text4}</div>
        </div>
    );
}

function Main(){
    return (
        <div id="wrap">
            <Header />
            <Layout>
            <section id="mainCont">
                <div className="main__cont">
                    <Info 
                    text1="WE PROVIDE" 
                    text2="VISUAL CODING" 
                    text3="SOLUTION" 
                    text4="FOR YOU WEBS" 
                    />
                </div>
            </section>
            </Layout>
        </div>
    )
}

export default Main;