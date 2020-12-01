import React, { useState } from "react";
import { useSpeechSynthesis, SpeechSynthesisVoice } from "react-speech-kit";

export default function TestSpeech() {
  const voice = ["en-UK", "fr-FR", "nl-BE", "it-IT", "da-BK", "fr-BE"];
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  //   const speak = useSpeechSynthesis().speak;
  const test = e => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <textarea value={value} onChange={e => test(e)} />
      <button
        onClick={() => speak({ text: value, voice: SpeechSynthesisVoice })}
      >
        Speak
      </button>
    </>
  );
}
