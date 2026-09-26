// const useState = React.useState;

// function App() {
//   // Enhanced state holding text, image, color, font style, and size options
//   const [meme, setMeme] = useState({
//     topText: "UNSTOPPABLE",
//     bottomText: "CODER VIBES",
//     imageUrl: "https://api.memegen.link/images/doge.png",
//     textColor: "#ffffff",
//     fontFamily: "font-sans",
//     fontSize: "text-3xl"
//   });

//   // Handle standard text inputs and pickers
//   function handleChange(e) {
//     setMeme({
//       ...meme,
//       [e.target.name]: e.target.value
//     });
//   }

//   // Handle local image file upload using URL.createObjectURL
//   function handleImageUpload(e) {
//     const file = e.target.files[0];
//     if (file) {
//       const localUrl = URL.createObjectURL(file);
//       setMeme({
//         ...meme,
//         imageUrl: localUrl
//       });
//     }
//   }

//   // Reset or clear text
//   function handleSubmit(e) {
//     e.preventDefault();
//     setMeme({
//       ...meme,
//       topText: "",
//       bottomText: ""
//     });
//   }

//   // Pure JavaScript React layout implementation
//   return React.createElement(
//     "div",
//     { className: "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 flex flex-col items-center justify-center p-4 sm:p-8" },

//     // Header Section
//     React.createElement(
//       "header",
//       { className: "text-center mb-8" },
//       React.createElement("h1", { className: "text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2" }, "🚀 Ultra Meme Studio"),
//       React.createElement("p", { className: "text-purple-200 text-sm sm:text-base" }, "Upload your custom image, pick styles, and craft masterpieces")
//     ),

//     // Main Studio Container (Grid Layout for Controls & Preview)
//     React.createElement(
//       "div",
//       { className: "w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center" },

//       // Left Side: Control Panel Form
//       React.createElement(
//         "form",
//         { onSubmit: handleSubmit, className: "w-full lg:w-1/2 space-y-4" },

//         // 1. File Upload Option (Replaced Dropdown)
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Upload Image File"),
//           React.createElement("input", {
//             type: "file",
//             accept: "image/*",
//             onChange: handleImageUpload,
//             className: "w-full text-sm text-purple-200 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-500 cursor-pointer bg-neutral-900/50 p-2 rounded-xl border border-white/10"
//           })
//         ),

//         // 2. Top Text Input
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Top Caption"),
//           React.createElement("input", {
//             type: "text",
//             name: "topText",
//             value: meme.topText,
//             onChange: handleChange,
//             placeholder: "Enter top text",
//             className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           })
//         ),

//         // 3. Bottom Text Input
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Bottom Caption"),
//           React.createElement("input", {
//             type: "text",
//             name: "bottomText",
//             value: meme.bottomText,
//             onChange: handleChange,
//             placeholder: "Enter bottom text",
//             className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           })
//         ),

//         // 4. Customization Options (Color Picker & Font Family)
//         React.createElement(
//           "div",
//           { className: "grid grid-cols-2 gap-4" },

//           // Text Color Picker
//           React.createElement(
//             "div",
//             null,
//             React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Text Color"),
//             React.createElement("input", {
//               type: "color",
//               name: "textColor",
//               value: meme.textColor,
//               onChange: handleChange,
//               className: "w-full h-11 bg-neutral-900/60 border border-white/20 rounded-xl cursor-pointer p-1"
//             })
//           ),

//           // Font Style Selection
//           React.createElement(
//             "div",
//             null,
//             React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Style"),
//             React.createElement(
//               "select",
//               {
//                 name: "fontFamily",
//                 value: meme.fontFamily,
//                 onChange: handleChange,
//                 className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
//               },
//               React.createElement("option", { value: "font-sans", className: "bg-neutral-900" }, "Modern Sans"),
//               React.createElement("option", { value: "font-serif", className: "bg-neutral-900" }, "Classic Serif"),
//               React.createElement("option", { value: "font-mono", className: "bg-neutral-900" }, "Code Mono")
//             )
//           )
//         ),

//         // 5. Font Size Selector
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Size"),
//           React.createElement(
//             "select",
//             {
//               name: "fontSize",
//               value: meme.fontSize,
//               onChange: handleChange,
//               className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
//             },
//             React.createElement("option", { value: "text-xl", className: "bg-neutral-900" }, "Medium"),
//             React.createElement("option", { value: "text-3xl", className: "bg-neutral-900" }, "Large"),
//             React.createElement("option", { value: "text-4xl sm:text-5xl", className: "bg-neutral-900" }, "Massive")
//           )
//         ),

//         // Clear Text Button
//         React.createElement(
//           "button",
//           {
//             type: "submit",
//             className: "w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform active:scale-95"
//           },
//           "Clear Text Fields"
//         )
//       ),

//       // Right Side: Creative Live Preview Screen
//       React.createElement(
//         "div",
//         { className: "w-full lg:w-1/2 flex flex-col items-center justify-center" },
//         React.createElement(
//           "div",
//           { className: "relative w-full border-4 border-white/30 rounded-2xl overflow-hidden bg-black shadow-2xl flex justify-center items-center max-h-[450px]" },
          
//           // Meme Image preview
//           React.createElement("img", {
//             src: meme.imageUrl,
//             alt: "Custom Meme Preview",
//             className: "w-full h-auto object-contain max-h-[420px]"
//           }),

//           // Top Text Overlay (with dynamic color, font family, and size)
//           React.createElement(
//             "h2",
//             {
//               style: { color: meme.textColor },
//               className: `absolute top-3 w-full text-center font-black uppercase tracking-wider drop-shadow-[0_3px_3px_rgba(0,0,0,1)] px-4 break-words ${meme.fontFamily} ${meme.fontSize}`
//             },
//             meme.topText
//           ),

//           // Bottom Text Overlay
//           React.createElement(
//             "h2",
//             {
//               style: { color: meme.textColor },
//               className: `absolute bottom-3 w-full text-center font-black uppercase tracking-wider drop-shadow-[0_3px_3px_rgba(0,0,0,1)] px-4 break-words ${meme.fontFamily} ${meme.fontSize}`
//             },
//             meme.bottomText
//           )
//         )
//       )
//     )
//   );
// }

// // Render component inside #root
// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById("root")
// );






// const useState = React.useState;

// function App() {
//   const [meme, setMeme] = useState({
//     topText: "UNSTOPPABLE",
//     bottomText: "CODER VIBES",
//     imageUrl: "https://api.memegen.link/images/doge.png",
//     textColor: "#ffffff",
//     fontFamily: "font-sans",
//     fontSize: "text-3xl",
//     textShadow: true
//   });

//   const [fileName, setFileName] = useState("");
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Handle standard text inputs and pickers
//   function handleChange(e) {
//     const target = e.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     setMeme({
//       ...meme,
//       [target.name]: value
//     });
//   }

//   // Handle local image file upload + trigger animation
//   function handleImageUpload(e) {
//     const file = e.target.files[0];
//     if (file) {
//       const localUrl = URL.createObjectURL(file);
//       setFileName(file.name);
      
//       // Trigger animation effect
//       setIsAnimating(true);
//       setTimeout(() => setIsAnimating(false), 500);

//       setMeme({
//         ...meme,
//         imageUrl: localUrl
//       });
//     }
//   }

//   // Remove uploaded image & reset file input
//   function handleRemoveImage() {
//     setFileName("");
//     setMeme({
//       ...meme,
//       imageUrl: "https://api.memegen.link/images/doge.png"
//     });
//   }

//   // Clear text captions
//   function handleSubmit(e) {
//     e.preventDefault();
//     setMeme({
//       ...meme,
//       topText: "",
//       bottomText: ""
//     });
//   }

//   // Download Meme Handler using HTML5 Canvas
//   function handleDownload() {
//     const img = new Image();
//     img.crossOrigin = "anonymous";
//     img.src = meme.imageUrl;

//     img.onload = function () {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       canvas.width = img.width || 600;
//       canvas.height = img.height || 600;

//       // Draw background image
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//       // Configure text styles
//       ctx.fillStyle = meme.textColor;
//       ctx.textAlign = "center";
      
//       let fontPx = 40;
//       if (meme.fontSize === "text-xl") fontPx = 28;
//       if (meme.fontSize === "text-4xl sm:text-5xl") fontPx = 56;
      
//       let fontName = "sans-serif";
//       if (meme.fontFamily === "font-serif") fontName = "serif";
//       if (meme.fontFamily === "font-mono") fontName = "monospace";

//       ctx.font = `900 ${fontPx}px ${fontName}`;

//       if (meme.textShadow) {
//         ctx.strokeStyle = "black";
//         ctx.lineWidth = 6;
//       }

//       // Draw Top Text
//       if (meme.topText) {
//         const topY = fontPx + 20;
//         if (meme.textShadow) ctx.strokeText(meme.topText.toUpperCase(), canvas.width / 2, topY);
//         ctx.fillText(meme.topText.toUpperCase(), canvas.width / 2, topY);
//       }

//       // Draw Bottom Text
//       if (meme.bottomText) {
//         const bottomY = canvas.height - 30;
//         if (meme.textShadow) ctx.strokeText(meme.bottomText.toUpperCase(), canvas.width / 2, bottomY);
//         ctx.fillText(meme.bottomText.toUpperCase(), canvas.width / 2, bottomY);
//       }

//       // Create download link
//       const link = document.createElement("a");
//       link.download = "meme.png";
//       link.href = canvas.toDataURL("image/png");
//       link.click();
//     };
//   }

//   return React.createElement(
//     "div",
//     { className: "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 flex flex-col items-center justify-center p-4 sm:p-8" },

//     // Header
//     React.createElement(
//       "header",
//       { className: "text-center mb-8" },
//       React.createElement("h1", { className: "text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2 animate-pulse" }, "🚀 Ultra Meme Studio"),
//       React.createElement("p", { className: "text-purple-200 text-sm sm:text-base" }, "Upload your custom image, pick styles, and craft masterpieces")
//     ),

//     // Main Studio Card
//     React.createElement(
//       "div",
//       { className: "w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center" },

//       // Left Panel: Form Controls
//       React.createElement(
//         "form",
//         { onSubmit: handleSubmit, className: "w-full lg:w-1/2 space-y-4" },

//         // 1. File Upload / Remove Cross Section
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Upload Image File"),
          
//           fileName
//             ? // Show File Name Badge with Red Cross Button when file is active
//               React.createElement(
//                 "div",
//                 { className: "flex items-center justify-between bg-neutral-900/80 p-3 rounded-xl border border-pink-500/50 text-sm text-pink-300 font-semibold" },
//                 React.createElement("span", { className: "truncate max-w-[200px]" }, "📁 " + fileName),
//                 React.createElement(
//                   "button",
//                   {
//                     type: "button",
//                     onClick: handleRemoveImage,
//                     className: "bg-red-500/80 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold transition transform active:scale-90"
//                   },
//                   "✕"
//                 )
//               )
//             : // Show File Upload Input
//               React.createElement("input", {
//                 type: "file",
//                 accept: "image/*",
//                 onChange: handleImageUpload,
//                 className: "w-full text-sm text-purple-200 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-500 cursor-pointer bg-neutral-900/50 p-2 rounded-xl border border-white/10"
//               })
//         ),

//         // 2. Top Caption Input
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Top Caption"),
//           React.createElement("input", {
//             type: "text",
//             name: "topText",
//             value: meme.topText,
//             onChange: handleChange,
//             placeholder: "Enter top text",
//             className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           })
//         ),

//         // 3. Bottom Caption Input
//         React.createElement(
//           "div",
//           null,
//           React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Bottom Caption"),
//           React.createElement("input", {
//             type: "text",
//             name: "bottomText",
//             value: meme.bottomText,
//             onChange: handleChange,
//             placeholder: "Enter bottom text",
//             className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
//           })
//         ),

//         // 4. Customization Options (Color Picker & Font Style)
//         React.createElement(
//           "div",
//           { className: "grid grid-cols-2 gap-4" },
//           React.createElement(
//             "div",
//             null,
//             React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Text Color"),
//             React.createElement("input", {
//               type: "color",
//               name: "textColor",
//               value: meme.textColor,
//               onChange: handleChange,
//               className: "w-full h-11 bg-neutral-900/60 border border-white/20 rounded-xl cursor-pointer p-1"
//             })
//           ),
//           React.createElement(
//             "div",
//             null,
//             React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Style"),
//             React.createElement(
//               "select",
//               {
//                 name: "fontFamily",
//                 value: meme.fontFamily,
//                 onChange: handleChange,
//                 className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
//               },
//               React.createElement("option", { value: "font-sans", className: "bg-neutral-900" }, "Modern Sans"),
//               React.createElement("option", { value: "font-serif", className: "bg-neutral-900" }, "Classic Serif"),
//               React.createElement("option", { value: "font-mono", className: "bg-neutral-900" }, "Code Mono")
//             )
//           )
//         ),

//         // 5. Font Size & Shadow Toggle
//         React.createElement(
//           "div",
//           { className: "grid grid-cols-2 gap-4 items-center" },
//           React.createElement(
//             "div",
//             null,
//             React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Size"),
//             React.createElement(
//               "select",
//               {
//                 name: "fontSize",
//                 value: meme.fontSize,
//                 onChange: handleChange,
//                 className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
//               },
//               React.createElement("option", { value: "text-xl", className: "bg-neutral-900" }, "Medium"),
//               React.createElement("option", { value: "text-3xl", className: "bg-neutral-900" }, "Large"),
//               React.createElement("option", { value: "text-4xl sm:text-5xl", className: "bg-neutral-900" }, "Massive")
//             )
//           ),
//           React.createElement(
//             "label",
//             { className: "flex items-center gap-2 cursor-pointer text-xs font-bold uppercase tracking-wider text-purple-300 mt-4" },
//             React.createElement("input", {
//               type: "checkbox",
//               name: "textShadow",
//               checked: meme.textShadow,
//               onChange: handleChange,
//               className: "w-4 h-4 accent-pink-500 rounded cursor-pointer"
//             }),
//             "Text Shadow"
//           )
//         ),

//         // Action Buttons: Download & Clear
//         React.createElement(
//           "div",
//           { className: "flex gap-3 pt-2" },
//           React.createElement(
//             "button",
//             {
//               type: "button",
//               onClick: handleDownload,
//               className: "w-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform active:scale-95 flex items-center justify-center gap-2"
//             },
//             "💾 Download"
//           ),
//           React.createElement(
//             "button",
//             {
//               type: "submit",
//               className: "w-1/2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform active:scale-95"
//             },
//             "Clear Captions"
//           )
//         )
//       ),

//       // Right Panel: Preview Area with Animation Effect
//       React.createElement(
//         "div",
//         { className: "w-full lg:w-1/2 flex flex-col items-center justify-center" },
//         React.createElement(
//           "div",
//           {
//             className: `relative w-full border-4 border-white/30 rounded-2xl overflow-hidden bg-black shadow-2xl flex justify-center items-center max-h-[450px] transition-all duration-500 ${
//               isAnimating ? "scale-105 rotate-1 opacity-80" : "scale-100 rotate-0 opacity-100"
//             }`
//           },
//           React.createElement("img", {
//             src: meme.imageUrl,
//             alt: "Custom Meme Preview",
//             className: "w-full h-auto object-contain max-h-[420px]"
//           }),

//           // Top Caption Overlay
//           React.createElement(
//             "h2",
//             {
//               style: { color: meme.textColor },
//               className: `absolute top-3 w-full text-center font-black uppercase tracking-wider px-4 break-words ${meme.fontFamily} ${meme.fontSize} ${
//                 meme.textShadow ? "drop-shadow-[0_3px_3px_rgba(0,0,0,1)]" : ""
//               }`
//             },
//             meme.topText
//           ),

//           // Bottom Caption Overlay
//           React.createElement(
//             "h2",
//             {
//               style: { color: meme.textColor },
//               className: `absolute bottom-3 w-full text-center font-black uppercase tracking-wider px-4 break-words ${meme.fontFamily} ${meme.fontSize} ${
//                 meme.textShadow ? "drop-shadow-[0_3px_3px_rgba(0,0,0,1)]" : ""
//               }`
//             },
//             meme.bottomText
//           )
//         )
//       )
//     )
//   );
// }

// // Render component inside #root
// ReactDOM.render(
//   React.createElement(App),
//   document.getElementById("root")
// );












const useState = React.useState;
function App() {
  // Ref:Meme state stored as an object Section 8 of notes iddhar se dekhna future mein iddhar se yeh kiya 
  const [meme, setMeme] = useState({
    topText: "UNSTOPPABLE",
    bottomText: "CODER VIBES",
    imageUrl: "https://api.memegen.link/images/doge.png",
    textColor: "#ffffff", 
    fontFamily: "font-sans",
    fontSize: "text-3xl"
  });
 // Ref:Saved memes list state stored as an array Section 8 of notes  iddhar se dekhna future mein iddhar se yeh kiya
  const [savedMemes, setSavedMemes] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
 // Handle input changes Section 9 of notes  iddhar se dekhna future mein iddhar se yeh kiya
  function handleChange(e) {
    setMeme({
      ...meme,                                                    
      [e.target.name]: e.target.value
    });
  }
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setFileName(file.name);
      setIsAnimating(true);
      setTimeout(function () {
        setIsAnimating(false);
      }, 500);
      setMeme({
        ...meme,
        imageUrl: localUrl
      });
    }
  }
  function handleRemoveImage() {
    setFileName("");
    setMeme({
      ...meme,
      imageUrl: "https://api.memegen.link/images/doge.png"
    });
  }
  function handleSubmit(e) {              // Clear text captions ke liye yeh kiya mene
    e.preventDefault();                   // Prevent page refresh used kiya yaha pe mene
    setMeme({
      ...meme,
      topText: "",
      bottomText: ""
    });
  }
  // Ref:Save current meme to array state using spread operator Section 8 of notes iddhar se dekhna future mein iddhar se yeh kiya 
  function handleSaveMeme() {
    setSavedMemes([...savedMemes, meme]); // Immutable array update[cite: 1]
  }
  // Delete a saved meme from array state using filter Section 6 & Array Methods in notes iddhar se dekhna future mein iddhar se yeh kiya 
  function handleDeleteSaved(indexToDelete) {
    const updatedList = savedMemes.filter(function (_, index) {
      return index !== indexToDelete;
    });
    setSavedMemes(updatedList);
  }
  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950 flex flex-col items-center justify-center p-4 sm:p-8" },
    // Header Section
    React.createElement(
      "header",
      { className: "text-center mb-8" },
      React.createElement("h1", { className: "text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2" }, "🚀 Ultra Meme Studio"),
      React.createElement("p", { className: "text-purple-200 text-sm sm:text-base" }, "Upload your custom image, pick styles, and craft masterpieces")
    ),
   // TO make Main Studio Card Yah se suru
    React.createElement(
      "div",
      { className: "w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8 items-center" },
      // Left Side: Ka yah se dhund na future mein
      React.createElement(
        "form",
        { onSubmit: handleSubmit, className: "w-full lg:w-1/2 space-y-4" },
        // File Upload / Cross Button Section
        React.createElement(
          "div",
          null,
          React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Upload Image File"),
          fileName
            ? React.createElement(
                "div",
                { className: "flex items-center justify-between bg-neutral-900/80 p-3 rounded-xl border border-pink-500/50 text-sm text-pink-300 font-semibold" },
                React.createElement("span", { className: "truncate max-w-[200px]" }, "📁 " + fileName),
                React.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: handleRemoveImage,
                    className: "bg-red-500/80 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold transition transform active:scale-90"
                  },
                  "✕"
                )
              )
            : React.createElement("input", {
                type: "file",
                accept: "image/*",
                onChange: handleImageUpload,
                className: "w-full text-sm text-purple-200 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-500 cursor-pointer bg-neutral-900/50 p-2 rounded-xl border border-white/10"
              })
        ),
        // Top Text Input
        React.createElement(
          "div",
          null,
          React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Top Caption"),
          React.createElement("input", {
            type: "text",
            name: "topText",
            value: meme.topText,
            onChange: handleChange,
            placeholder: "Enter top text",
            className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          })
        ),
        // Bottom Text Input
        React.createElement(
          "div",
          null,
          React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Bottom Caption"),
          React.createElement("input", {
            type: "text",
            name: "bottomText",
            value: meme.bottomText,
            onChange: handleChange,
            placeholder: "Enter bottom text",
            className: "w-full bg-neutral-900/60 border border-white/20 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          })
        ),
        // Customization Options if users wish to make ANY
        React.createElement(
          "div",
          { className: "grid grid-cols-2 gap-4" },
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Text Color"),
            React.createElement("input", {
              type: "color",
              name: "textColor",
              value: meme.textColor,
              onChange: handleChange,
              className: "w-full h-11 bg-neutral-900/60 border border-white/20 rounded-xl cursor-pointer p-1"
            })
          ),
          React.createElement(
            "div",
            null,
            React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Style"),
            React.createElement(
              "select",
              {
                name: "fontFamily",
                value: meme.fontFamily,
                onChange: handleChange,
                className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              },
              React.createElement("option", { value: "font-sans", className: "bg-neutral-900" }, "Modern Sans"),
              React.createElement("option", { value: "font-serif", className: "bg-neutral-900" }, "Classic Serif"),
              React.createElement("option", { value: "font-mono", className: "bg-neutral-900" }, "Code Mono")
            )
          )
        ),
        // Font Size Selector
        React.createElement(
          "div",
          null,
          React.createElement("label", { className: "block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1" }, "Font Size"),
          React.createElement(
            "select",
            {
              name: "fontSize",
              value: meme.fontSize,
              onChange: handleChange,
              className: "w-full h-11 bg-neutral-900/60 border border-white/20 text-white px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            },
            React.createElement("option", { value: "text-xl", className: "bg-neutral-900" }, "Medium"),
            React.createElement("option", { value: "text-3xl", className: "bg-neutral-900" }, "Large"),
            React.createElement("option", { value: "text-4xl sm:text-5xl", className: "bg-neutral-900" }, "Massive")
          )
        ),
        // Action Buttons to be PERFORMED
        React.createElement(
          "div",
          { className: "flex gap-3 pt-2" },
          React.createElement(
            "button",
            {
              type: "button",
              onClick: handleSaveMeme,
              className: "w-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform active:scale-95"
            },
            "⭐ Save to Gallery"
          ),
          React.createElement(
            "button",
            {
              type: "submit",
              className: "w-1/2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform active:scale-95"
            },
            "Clear Text"
          )
        )
      ),
      // Right Side: Live Meme Preview Card RIGHT SIDE KA HAI YEH PART
      React.createElement(
        "div",
        { className: "w-full lg:w-1/2 flex flex-col items-center justify-center" },
        React.createElement(
          "div",
          {
            className: `relative w-full border-4 border-white/30 rounded-2xl overflow-hidden bg-black shadow-2xl flex justify-center items-center max-h-[450px] transition-all duration-500 ${
              isAnimating ? "scale-105 rotate-1 opacity-80" : "scale-100 rotate-0 opacity-100"
            }`
          },
          React.createElement("img", {
            src: meme.imageUrl,
            alt: "Custom Meme Preview",
            className: "w-full h-auto object-contain max-h-[420px]"
          }),
        // Top Text Overlay
          React.createElement(
            "h2",
            {
              style: { color: meme.textColor },
              className: `absolute top-3 w-full text-center font-black uppercase tracking-wider drop-shadow-[0_3px_3px_rgba(0,0,0,1)] px-4 break-words ${meme.fontFamily} ${meme.fontSize}`
            },
            meme.topText
          ),
        // Bottom Text Overlay
          React.createElement(
            "h2",
            {
              style: { color: meme.textColor },
              className: `absolute bottom-3 w-full text-center font-black uppercase tracking-wider drop-shadow-[0_3px_3px_rgba(0,0,0,1)] px-4 break-words ${meme.fontFamily} ${meme.fontSize}`
            },
            meme.bottomText
          )
        )
      )
    ),
    // Ref: Saved Memes Gallery Section Rendered using Array .map from Section 8 of notes future ref ke liye
    savedMemes.length > 0
      ? React.createElement(
          "div",
          { className: "w-full max-w-4xl mt-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-2xl" },
          React.createElement("h2", { className: "text-2xl font-bold text-white mb-4 text-center" }, "🖼️ Saved Gallery"),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" },
            savedMemes.map(function (item, index) {
              return React.createElement(
                "div",
                { key: index, className: "relative border-2 border-white/20 rounded-xl overflow-hidden bg-black aspect-square flex items-center justify-center group" },
                React.createElement("img", { src: item.imageUrl, className: "w-full h-full object-cover" }),
                React.createElement("h3", { style: { color: item.textColor }, className: `absolute top-2 w-full text-center text-sm font-black uppercase ${item.fontFamily} drop-shadow-[0_2px_2px_rgba(0,0,0,1)] px-2` }, item.topText),
                React.createElement("h3", { style: { color: item.textColor }, className: `absolute bottom-2 w-full text-center text-sm font-black uppercase ${item.fontFamily} drop-shadow-[0_2px_2px_rgba(0,0,0,1)] px-2` }, item.bottomText),
                React.createElement(
                  "button",
                  {
                    onClick: function () {
                      handleDeleteSaved(index);
                    },
                    className: "absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg hover:bg-red-700"
                  },
                  "✕"
                )
              );
            })
          )
        )
      : null
  );
}
// REFFERD:Render component inside #root Section 1 of notes iddhar se dekhna future mein iddhar se yeh kiya
ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);