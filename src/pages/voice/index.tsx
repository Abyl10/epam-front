import { FunctionComponent, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { IChatReport } from "@/ts/types";
import { getChatReports } from "@/api/report";
import { createChat } from "@/api/chat";
import { useUserContext } from "@/context/user-context";

const Voice: FunctionComponent = () => {
  const { user } = useUserContext();
  const navigate = useNavigate(); // Get access to the navigate function
  const [report, setReport] = useState<IChatReport[]>([]);

  useEffect(() => {
    getChatReports().then((data) => setReport(data));
  }, []);

  const hasData = report.length > 0;

  const handleClick = () => {
    createChat(user?.user_data.id || 1).then((res) =>
      navigate(`/voice-start/${res.id}`)
    );
    navigate("/voice-start"); // Programmatic navigation
  };
  return (
    <div>
      <div className="relative flex flex-col items-center">
        {/* Image tag for displaying the cat image */}
        <img src={cat} alt="Cat" className="w-full sticky top-0" />

        <button
          onClick={handleClick}
          className="z-20 relative -mt-20 px-6 py-4 inline-block bg-white text-[#613BE7] font-semibold text-sm leading-none tracking-normal font-poppins rounded-[20px]"
        >
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
      <div className="h-[350px] overflow-y-auto">
        {hasData ? (
          report.map((item) => (
            <div className="p-4" key={item.id}>
              <div className="gap-4 flex flex-col">
                {" "}
                <Card className="flex pb-2">
                  <div className="flex justify-center pl-4 items-center">
                    <div className="w-2 bg-blue-500 h-3/4 rounded-[10px]"></div>
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex flex-row space-x-5 items-center justify-between">
                        <CardTitle>Лексика</CardTitle>
                        <div className="rounded-full w-10 h-10 bg-blue-500 flex items-center justify-center">
                          <div className="rounded-full w-7 h-7 bg-white">
                            <p className="text-blue-500 text-center pt-0.5">
                              {item.report_data.vocabulary.score}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex ">
                      {/* Vertical line */}
                      <div className="flex-1">
                        <p>{item.report_data.vocabulary.comments}</p>
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
                      <div className="flex flex-row space-x-5 items-center justify-between">
                        <CardTitle>Өз ойын жеткізе алуы</CardTitle>
                        <div className="rounded-full w-10 h-10 bg-[#70FF00] flex items-center justify-center">
                          <div className="rounded-full w-7 h-7 bg-white">
                            <p className="text-[#70FF00] text-center pt-0.5">
                              {
                                item.report_data.communication_effectiveness
                                  .score
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex ">
                      {/* Vertical line */}
                      <div className="flex-1">
                        <p>
                          {
                            item.report_data.communication_effectiveness
                              .comments
                          }
                        </p>
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
                      <div className="flex flex-row space-x-5 items-center justify-between">
                        <CardTitle>
                          Контекстке сәйкес жауап беру қабілеті
                        </CardTitle>
                        <div className="rounded-full w-10 h-10 bg-[#FF007A] flex items-center justify-center">
                          <div className="rounded-full w-7 h-7 bg-white">
                            <p className="text-[#FF007A] text-center pt-0.5">
                              {item.report_data.contextual_understanding.score}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex ">
                      {/* Vertical line */}
                      <div className="flex-1">
                        <p>
                          {item.report_data.contextual_understanding.comments}
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center p-4 mt-11">
            <img src={noDataImage} alt="No data" className="w-40" />{" "}
            {/* Adjust size as needed */}
            <p className="text-[#6E7591] font-poppins text-lg mt-2">No data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voice;
