import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function TestSpeech() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
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
