import { useNavigate } from "react-router-dom";
import Siriwave from "react-siriwave";

const VoiceStart = () => {
  const navigate = useNavigate(); // Get access to the navigate function

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

      <div className="flex flex-col items-center gap-y-4">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/an-6owXUwdg?controls=0&showinfo=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XJeKMKPfnLU?si=CAhDLI9vWuduQ6Gn?controls=0&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          
        ></iframe>
        <p className="p-20">Сәлем, Асель. Саған қалай көмектесе алам?</p>
        <Siriwave color="#6adc92" cover={true} />
        {/* <Siriwave style="ios9" /> */}
      </div>
    </div>
  );
};

export default VoiceStart;
