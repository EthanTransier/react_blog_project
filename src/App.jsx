// import './App.css';
// import { useEffect, useState } from "react";
// const imageUrl = "https://api.artic.edu/api/v1/artworks?ids=208131,240935,142595,120300,13454,151363,102611,191556,117266,137125,126414&fields=id,title,image_id";

// function App() {
//   const [img, setImg] = useState<string | undefined>(); 

//   const fetchImage = async () => {
//     const res = await fetch(imageUrl);
//     const imageBlob = await res.blob();
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     setImg(imageObjectURL);
//   };


//   useEffect(() => {
//     fetchImage();
//   }, []);

//   const classes = useStyles();

//   return (
//     <>
//       <Navbar />
//       <img src={img} alt="icons" />
//       <div className={`${classes.background}`}>
//         <div className={classes.main_text}>

//           <div></div>
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default App;
