// "use client";

// import { useState, useRef, useEffect } from "react";
// import Banner1 from "../banner1/Banner1";
// import Banner2 from "../banner2/Banner2";
// import BrideLeft from "../bride/BrideLeft";
// import BrideRight from "../bride/BrideRight";
// import Footer from "../footer/Footer";
// import Gallery from "../gallery/Gallery";
// import Gift from "../gift/Gift";
// import PlatformOnline from "../platformOnline/PlatformOnline";
// import Rsvp from "../rsvp/Rsvp";
// import Story from "../story/Story";
// import { TimeLine } from "../timeline/TimeLine";
// import Youtube from "../youtube/Youtube";
// import TimeBack from "../timeBack/TimeBack";

// const SectionContainer = ({ dataMempelai, params }) => {
//   const [showContent, setShowContent] = useState(false);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (showContent && contentRef.current) {
//       contentRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [showContent]);

//   const scrollToContent = () => {
//     setShowContent(true);
//   };

//   return (
//     <>
//       <Banner1
//         params={params}
//         dataMempelai={dataMempelai}
//         onButtonClick={scrollToContent}
//       />
//       {showContent && (
//         <>
//           <div ref={contentRef}>
//             <audio src={audio} autoPlay loop />
//             <Banner2 dataMempelai={dataMempelai} />
//             <TimeBack dataMempelai={dataMempelai} />
//             <BrideRight dataMempelai={dataMempelai} />
//             <BrideLeft dataMempelai={dataMempelai} />
//             <TimeLine />
//             <Gallery />
//             <Story />
//             <PlatformOnline />
//             <Rsvp />
//             <Gift params={params} />
//             <Youtube />
//             <Footer />
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default SectionContainer;
