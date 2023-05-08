import React, { useState } from "react";

const App = () => {
  return <div></div>;
};

export default App;

// // -------------------------------------------------CRUD operation ---------------------------------------------------------

// import React, { useState } from "react";

// const App = () => {
//   const [activity, setActivity] = useState("");
//   const [listData, setListData] = useState([]);
//   const [isEdit, setisEdit] = useState(false);
//   const [id, setid] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       // const editdata =
//       setListData(
//         listData.map((item, i) => {
//           if  (id == i) {
//             return (item = activity);
//           }
//         })
//       );
//       // setListData([...listData, editdata]);
//     } else {
//       setListData((listData) => {
//         const updatedList = [...listData, activity];
//         console.log(updatedList);
//         setActivity("");
//         return updatedList;
//       });
//     }
//   };

//   const removeActivity = (i) => {
//     const updatedata = listData.filter((item, id) => {
//       return i != id;
//     });
//     setListData(updatedata);
//   };

//   const editActivity = (i) => {
//     setisEdit(true);
//     setid(i);
//     listData.filter((item, id) => {
//       if (i == id) {
//         setActivity(item);
//       }
//     });
//   };

//   return (
//     <div>
//       App
//       <input
//         type="text"
//         value={activity}
//         onChange={(e) => {
//           setActivity(e.target.value);
//         }}
//       ></input>
//       <button onClick={handleSubmit}>Submit</button>
//       <div>
//         {listData != [] &&
//           listData.map((data, i) => {
//             return (
//               <p key={i}>
//                 <div>
//                   {data}
//                   <button onClick={() => editActivity(i)}>Edit</button>
//                   <button onClick={() => removeActivity(i)}>Remove</button>
//                 </div>
//               </p>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default App;

// // -------------------------------------------------CRUD operation ---------------------------------------------------------

// import React, { useState, useRef } from "react";

// function App() {
//   const nameRef = useRef();
//   const passwordRef = useRef();
//   const list = [
//     {
//       id: 1,
//       name: "naziya",
//       password: "1234",
//     },
//     {
//       id: 2,
//       name: "harry",
//       password: "9876",
//     },
//   ];

//   const [lists, setLists] = useState(list);

//   const editTodo = (index) => {
//     lists.map((item) => {
//       if (item.id == index) {
//         console.log(nameRef.current.value);
//         // nameRef.current = item.name;
//         // passwordRef.current = item.password;
//         console.log("sdsjkf");
//         nameRef.current = "nagma";
//         passwordRef.current = item.password;
//       }
//     });
//   };

//   const deleteTodo = (index) => {};
//   return (
//     <div>
//       <h1>hii</h1>
//       <Addlist setLists={setLists} />
//       <table>
//         {lists.map((current, index) => (
//           <tr key={index}>
//             <td>{current.name}</td>
//             <td>{current.password}</td>
//             <td>
//               <button onClick={(index) => editTodo(current.id)}>Edit</button>
//               <button onClick={(index) => deleteTodo}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }

// const Addlist = ({ setLists }) => {
//   const nameRef = useRef();
//   const passwordRef = useRef();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const name = event.target.elements.name.value;
//     const password = event.target.elements.password.value;
//     const newList = {
//       id: 3,
//       name,
//       password,
//     };

//     setLists((prevList) => {
//       return prevList.concat(newList);
//     });
//     nameRef.current.value = "";
//     passwordRef.current.value = "";
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" ref={nameRef}></input>
//       <input type="text" name="password" ref={passwordRef}></input>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { useRef } from "react";
// import {
//   AiFillPlayCircle,
//   AiFillPauseCircle,
//   AiFillStepForward,
//   AiOutlineStepBackward,
// } from "react-icons/ai";
// import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

// import "./App.css";

// function App() {
//   const videoRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [videoTime, setVideoTime] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isfullscreen, setisfullscreen] = useState(false);

//   let link =
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";
//   let vid = document.getElementById("video1");

//   const videoHandler = (control) => {
//     if (control === "play") {
//       videoRef.current.play();
//       setPlaying(true);
//       setVideoTime(vid.duration);
//     } else if (control === "pause") {
//       videoRef.current.pause();
//       setPlaying(false);
//     }
//   };

//   const fastForward = () => {
//     videoRef.current.currentTime += 5;
//   };

//   const revert = () => {
//     videoRef.current.currentTime -= 5;
//   };

//   const toggleFullScreen = () => {
//     if (isfullscreen) {
//       document.exitFullscreen();
//       setisfullscreen(false);
//     } else {
//       vid.requestFullscreen();
//       setisfullscreen(true);
//     }
//   };

//   useEffect(() => {
//     window.setInterval(function () {
//       setCurrentTime(videoRef.current?.currentTime);
//       setProgress((videoRef.current?.currentTime / videoTime) * 100);
//     }, 1000);
//   }, [currentTime, progress]);

//   return (
//     <div className="container">
//       <video
//         id="video1"
//         className="video"
//         alt="All the devices"
//         ref={videoRef}
//         src={link}
//       />
//       <div className="controlsContainer">
//         <div className="controls">
//           <AiOutlineStepBackward
//             className="controlsIcon"
//             alt=""
//             onClick={revert}
//           />

//           {playing ? (
//             <AiFillPauseCircle
//               className="controlsIcon--small"
//               alt=""
//               onClick={() => videoHandler("pause")}
//             />
//           ) : (
//             <AiFillPlayCircle
//               className="controlsIcon--small"
//               alt=""
//               onClick={() => videoHandler("play")}
//             />
//           )}
//           <AiFillStepForward
//             className="controlsIcon"
//             alt=""
//             onClick={fastForward}
//           />
//           {/* {isfullscreen ? ( */}
//           {/* <MdOutlineFullscreenExit
//               className="fullScreen"
//               onClick={toggleFullScreen}
//             />
//           ) : ( */}
//           <MdOutlineFullscreen
//             className="fullScreen"
//             onClick={toggleFullScreen}
//           />
//           {/* )} */}
//         </div>
//       </div>
//       <div className="timecontrols">
//         <p className="controlsTime">
//           {Math.floor(currentTime / 60) +
//             ":" +
//             ("0" + Math.floor(currentTime % 60)).slice(-2)}
//         </p>
//         <div className="time_progressbarContainer">
//           <div
//             style={{ width: `${progress}%` }}
//             className="time_progressBar"
//           ></div>
//         </div>
//         <p className="controlsTime">
//           {Math.floor(videoTime / 60) +
//             ":" +
//             ("0" + Math.floor(videoTime % 60)).slice(-2)}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
