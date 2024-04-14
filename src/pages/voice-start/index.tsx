import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import Siriwave from "react-siriwave";
import { sendPromptToChat } from "@/api/chat";
import { Loader } from "lucide-react";

const VoiceStart = () => {
  const navigate = useNavigate(); // Get access to the navigate function
  const { id } = useParams();
  const [prompt, setPrompt] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendPromptClick = () => {
    if (id && prompt) {
      setLoading(true);
      sendPromptToChat(id, prompt)
        .then((res) => {
          if (res.response !== "") {
            setAnswer(res.response);
          }
          setPrompt("");
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  const handleClick = () => {
    navigate("/voice"); // Programmatic navigation
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6C43EB] text-white font-poppins font-semibold text-lg leading-5">
      <button
        onClick={handleClick}
        className="absolute top-4 right-4 bg-white rounded-full p-3 text-[#613BE7] w-10 h-10 flex items-center justify-center"
        style={{ borderRadius: "10px" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#613BE7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#613BE7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* pointer-events-none */}
      <div className="flex flex-col items-center gap-y-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XJeKMKPfnLU?si=CAhDLI9vWuduQ6Gn?&controls=0&showinfo=0&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="pointer-events-none"
        ></iframe>
        <p className="p-8">
          {answer ? answer : "Сәлем, Асель. Саған қалай көмектесе алам?"}
        </p>
        <Siriwave color="#6adc92" cover={true} />
        <div className="mb-16 flex flex-row items-center space-x-4 w-full px-10">
          <Input
            className="text-white w-full"
            type="text"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="w-12 h-10 rounded-lg flex items-center justify-center cursor-pointer bg-white"
            onClick={handleSendPromptClick}
            disabled={loading}
          >
            {loading ? (
              <Loader
                size={24}
                className="
            animate-spin
            text-[#613BE7]
            
            "
              />
            ) : (
              <Icons.send />
            )}
            {/* <Icons.sendActive /> */}
          </button>
          <button
            className="w-12 h-10 rounded-lg flex items-center justify-center cursor-pointer bg-white"
            disabled={loading}
          >
            <Icons.voice />
            {/* <Icons.voiceActive /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceStart;
