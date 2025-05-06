// "use client"
// import { useEffect } from 'react';
// import Script from 'next/script';

// export default function InstagramEmbed({ postUrl }) {
//   useEffect(() => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//   }, [postUrl]);

//   return (
//     <>
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink={postUrl}
//         data-instgrm-version="14"
//         style={{
//           background: '#FFF',
//           border: '0',
//           borderRadius: '3px',
//           boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
//           margin: '1px',
//           minWidth: '326px',
//           padding: '0',
//           width: '99.375%',
//         }}
//       >
//         <div style={{ padding: '16px' }}>
//           {/* Content will be replaced by Instagram */}
//         </div>
//       </blockquote>
//       <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
//     </>
//   );
// }