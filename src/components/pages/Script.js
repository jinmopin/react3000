import React from "react";
import WrapTitle from "../basics/WrapTitle";
import Header from "../Header";
import Layout from "../Layout";
import { Link } from "react-router-dom";

// function ScriptContents({ id, image, imageDesc, title, desc, desc2 }) {
//   return (
//     <div className="js-box js-box01">
//       <div className="js__motherbox">
//         <div className="js__img js__img01 active">
//           <img src={image} alt={imageDesc} />
//         </div>
//         <h2>{title}</h2>
//         <div className="js__desc">
//           <div className="js_descText">
//             <div className="motherbox motherbox1 active">
//               <div className="box1">
//                 <p>{desc}</p>
//               </div>
//               <div className="box2">
//                 <p>{desc2}</p>
//               </div>
//             </div>
//           </div>
//           <div className="js_menu js_menu01">
//             <ul>
//               <li>
//                 <Link to="/" className="active">
//                   1
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/">2</Link>
//               </li>
//               <li>
//                 <Link to="/">3</Link>
//               </li>
//               <li>
//                 <Link to="/">4</Link>
//               </li>
//               <li>
//                 <Link to="/">5</Link>
//               </li>
//               <li>
//                 <Link to="/">6</Link>
//               </li>
//               <li>
//                 <Link to="/">7</Link>
//               </li>
//               <li>
//                 <Link to="/">8</Link>
//               </li>
//               <li>
//                 <Link to="/">9</Link>
//               </li>
//               <li>
//                 <Link to="/">10</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const ScriptContent = [
//   {
//     id: 1,
//     title: "animationRequestFrame",
//     image: "img/video01.png",
//     imageDesc: "이미지",
//     desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     desc2:
//       "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.2 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//   },
//   {
//     id: 2,
//     title: "animationRequestFrame",
//     image: "img/video02.png",
//     imageDesc: "이미지",
//     desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     desc2:
//       "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.2 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//   },
//   {
//     id: 3,
//     title: "animationRequestFrame",
//     image: "img/video01.png",
//     imageDesc: "이미지",
//     desc: "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//     desc2:
//       "레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.2 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
//   },
// ];

// function Script() {
//   return (
//     <div id="wrap" className="light">
//       <Header info="none" />
//       <section id="ScriptCont">
//         <div className="container">
//           <WrapTitle text={["SCRIPT", "JAVSCRIPT"]} />
//           <div className="script-cont">
//             {ScriptContent.map((text) => (
//               <ScriptContents
//                 key={text.id}
//                 title={text.title}
//                 desc={text.desc}
//                 desc2={text.desc2}
//                 image={text.image}
//                 imageDesc={text.imageDesc}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

function ScriptText({ image, title, desc1, desc2 }) {
  return (
    <div className="script__cont__wrap">
      <div className="script__cont__img">
        <img src={image} alt={title} />
      </div>
      <div className="script__cont__txt">
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <ul>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
          <li>
            <a href="/">6</a>
          </li>
          <li>
            <a href="/">7</a>
          </li>
          <li>
            <a href="/">8</a>
          </li>
          <li>
            <a href="/">9</a>
          </li>
          <li>
            <a href="/">10</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const scriptInfo = [
  {
    id: 1,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "1 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "2 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 2,
    image: "../img/video02.png",
    title: "animationRequestFrame",
    desc1:
      "1 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "2 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
  {
    id: 3,
    image: "../img/video01.png",
    title: "animationRequestFrame",
    desc1:
      "1 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
    desc2:
      "2 레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다.1 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.",
  },
];

function Script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <section id="ScriptCont">
        <div className="container">
          <WrapTitle text={["SCRIPT", "JAVSCRIPT"]} />
          <div className="script__cont">
            {scriptInfo.map((text) => (
              <ScriptText
                key={text.id}
                image={text.image}
                title={text.title}
                desc1={text.desc1}
                desc2={text.desc2}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Script;
