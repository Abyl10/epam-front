import { FunctionComponent } from "react";
import cat from "@/assets/images/car.png";
import noDataImage from "@/assets/images/no-data.png"; // Ensure this path is correct and accessible
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';


const Voice: FunctionComponent = () => {
  const hasData = false; // Placeholder for your data checking condition
  const navigate = useNavigate(); // Get access to the navigate function

  const handleClick = () => {
    navigate('/voice-start'); // Programmatic navigation
  };
  return (
    <div>
      <div className="relative flex flex-col items-center">
        {/* Image tag for displaying the cat image */}
        <img src={cat} alt="Cat" className="w-full sticky top-0" />

        <button onClick={handleClick} className="z-20 relative -mt-20 px-6 py-4 inline-block bg-white text-[#613BE7] font-semibold text-sm leading-none tracking-normal font-poppins rounded-[20px]">
          Начать разговор
        </button>
      </div>
      <div className="w-full p-4 text-left mt-4">
        {" "}
        {/* Added mt-4 to ensure it doesn't overlap */}
        <h1 className="font-poppins font-medium text-2xl pt-11">
          Отчет по последнему разговору
        </h1>
        <div className="mt-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выбрать время" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Сегодня, 14:30</SelectItem>
              <SelectItem value="dark">Вчера, 12:38</SelectItem>
              <SelectItem value="system">11ое апреля, 09:20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasData ? (
        <div className="p-4">
          <div className="gap-4">
            {" "}
            <Card className="flex pb-2">
              <div className="flex justify-center pl-4 items-center">
                <div className="w-2 bg-blue-500 h-3/4 rounded-[10px]"></div>
              </div>
              <div>
                <CardHeader>
                  <CardTitle>Лексика</CardTitle>
                </CardHeader>
                <CardContent className="flex ">
                  {/* Vertical line */}
                  <div className="flex-1">
                    <p>Content on the right side of the vertical line.</p>
                  </div>
                </CardContent>
              </div>
            </Card>{" "}
            <Card className="flex">
              <div className="flex justify-center pl-4 items-center">
                <div className="w-2 bg-[#70FF00] h-3/4 rounded-[10px]"></div>
              </div>
              <div>
                <CardHeader>
                  <CardTitle>Грамматика</CardTitle>
                </CardHeader>
                <CardContent className="flex ">
                  {/* Vertical line */}
                  <div className="flex-1">
                    <p>Content on the right side of the vertical line.</p>
                  </div>
                </CardContent>
              </div>
            </Card>
            <Card className="flex">
              <div className="flex justify-center pl-4 items-center">
                <div className="w-2 bg-[#FF007A] h-3/4 rounded-[10px]"></div>
              </div>
              <div>
                <CardHeader>
                  <CardTitle>Тындалым</CardTitle>
                </CardHeader>
                <CardContent className="flex ">
                  {/* Vertical line */}
                  <div className="flex-1">
                    <p>Content on the right side of the vertical line.</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center p-4 mt-11">
          <img src={noDataImage} alt="No data" className="w-40" />{" "}
          {/* Adjust size as needed */}
          <p className="text-[#6E7591] font-poppins text-lg mt-2">No data</p>
        </div>
      )}
    </div>
  );
};

export default Voice;
