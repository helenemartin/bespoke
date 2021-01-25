// import { useSpeechSynthesis } from "react-speech-kit";
// import { useState } from "react";

// export function useSpeechSynthesisLazyLoad() {
//   const { speak } = useSpeechSynthesis();
//   const [voices, setVoices] = useState([]);
//   window.speechSynthesis.onvoiceschanged = () => {
//     console.log("blalala");
//     setVoices(window.speechSynthesis.getVoices());
//   };

//   return {
//     speak,
//     voices
//   };
// }
