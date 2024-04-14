import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useUserContext } from "@/context/user-context";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const data = [
    { name: "Оқылым", x: user?.reading_exp || 0 },
    { name: "Айтылым", x: user?.speaking_exp || 0 },
    { name: "Грамматика", x: user?.grammar_exp || 0 },
    { name: "Лексика", x: user?.vocabulary_exp || 0 },
    { name: "Жазылым", x: user?.writing_exp || 0 },
  ];

  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
    >
      <div className="flex items-center justify-between pt-10 pb-10 px-4">
        <h1 className="font-poppins font-medium text-lg leading-5">
          Привет, {user?.user_data.username || "Гость"}
        </h1>

        <div className="flex items-center flex-row space-x-4">
          <LogOut
            className="cursor-pointer"
            onClick={() => {
              logout();
              navigate("/auth/login");
            }}
          />
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4999 16.9167C15.8346 16.9167 16.9166 15.8347 16.9166 14.5C16.9166 13.1654 15.8346 12.0834 14.4999 12.0834C13.1652 12.0834 12.0833 13.1654 12.0833 14.5C12.0833 15.8347 13.1652 16.9167 14.4999 16.9167Z"
              stroke="#6E7591"
            />
            <path
              d="M6.52367 7.10499L6.82576 6.58057C6.70716 6.512 6.56877 6.48578 6.43331 6.50619C6.29784 6.52661 6.17334 6.59247 6.08022 6.69295L6.52367 7.10499ZM4.10822 11.2907L3.53063 11.1118C3.49043 11.2426 3.49579 11.3831 3.54584 11.5104C3.59588 11.6377 3.68765 11.7443 3.80613 11.8127L4.10822 11.2907ZM4.1058 17.7081L3.80372 17.1849C3.68498 17.2533 3.59304 17.3601 3.54298 17.4877C3.49291 17.6152 3.48771 17.756 3.52822 17.8869L4.1058 17.7081ZM6.52247 21.8938L6.07901 22.3046C6.17213 22.4051 6.29663 22.471 6.4321 22.4914C6.56756 22.5118 6.70595 22.4856 6.82455 22.417L6.52247 21.8938ZM12.0808 25.1019H11.4766C11.4766 25.2391 11.5232 25.3722 11.6088 25.4794C11.6945 25.5866 11.8141 25.6614 11.9479 25.6916L12.0808 25.1019ZM16.9153 25.1043L17.0495 25.694C17.1831 25.6636 17.3024 25.5886 17.3878 25.4815C17.4732 25.3743 17.5196 25.2413 17.5195 25.1043H16.9153ZM22.4749 21.895L22.1728 22.4182C22.2914 22.4868 22.4298 22.513 22.5653 22.4926C22.7007 22.4722 22.8252 22.4063 22.9183 22.3058L22.4749 21.895ZM24.8891 17.7069L25.4667 17.8857C25.5069 17.755 25.5016 17.6145 25.4515 17.4872C25.4015 17.3598 25.3097 17.2533 25.1912 17.1849L24.8891 17.7069ZM24.8915 11.2894L25.1936 11.8127C25.3124 11.7442 25.4043 11.6375 25.4544 11.5099C25.5044 11.3823 25.5096 11.2415 25.4691 11.1106L24.8915 11.2894ZM22.4749 7.10257L22.9183 6.69174C22.8252 6.59126 22.7007 6.5254 22.5653 6.50499C22.4298 6.48457 22.2914 6.51079 22.1728 6.57937L22.4749 7.10257ZM16.9165 3.89687H17.5207C17.5206 3.76005 17.474 3.62733 17.3886 3.52043C17.3032 3.41353 17.1841 3.33878 17.0507 3.30841L16.9165 3.89687ZM12.0832 3.89445L11.9491 3.30478C11.8153 3.33496 11.6957 3.40979 11.61 3.51696C11.5244 3.62413 11.4778 3.75726 11.4778 3.89445H12.0832ZM4.6858 11.4695C5.13916 9.99668 5.91849 8.64492 6.96592 7.51462L6.08022 6.69295C4.90917 7.95612 4.03773 9.46567 3.53063 11.1118L4.6858 11.4695ZM5.60413 19.6354C5.22012 18.9702 4.91169 18.2642 4.68459 17.5305L3.52942 17.8882C3.78398 18.7078 4.12929 19.4965 4.55892 20.2396L5.60413 19.6354ZM6.96713 21.4842C6.44576 20.9206 5.98779 20.3005 5.60413 19.6354L4.55892 20.2396C4.98745 20.9829 5.49771 21.6759 6.08022 22.3058L6.96713 21.4842ZM16.7824 24.5171C15.2799 24.8591 13.7195 24.8583 12.2173 24.5147L11.9491 25.6916C13.6278 26.0758 15.3714 26.077 17.0507 25.6952L16.7824 24.5171ZM24.314 17.5305C23.8606 19.0033 23.0813 20.3551 22.0338 21.4854L22.9195 22.307C24.0906 21.0438 24.962 19.5331 25.4691 17.8869L24.314 17.5305ZM23.3956 9.36457C23.7871 10.0449 24.0928 10.7505 24.3164 11.4695L25.4703 11.1118C25.2159 10.2921 24.8706 9.50339 24.4408 8.76041L23.3956 9.36457ZM22.0326 7.51582C22.5544 8.07911 23.0124 8.69925 23.3956 9.36457L24.4408 8.76041C24.0123 8.0171 23.5021 7.32405 22.9195 6.69416L22.0326 7.51582ZM12.2173 4.48291C13.7199 4.14083 15.2802 4.14166 16.7824 4.48532L17.0507 3.30841C15.372 2.92414 13.6283 2.9229 11.9491 3.30478L12.2173 4.48291ZM12.6874 6.12866V3.89324H11.479V6.12866H12.6874ZM8.7603 7.69707L6.82576 6.58057L6.22159 7.62578L8.15492 8.74349L8.7603 7.69707ZM5.73947 16.0684L3.80372 17.1849L4.40909 18.2313L6.34242 17.1148L5.73947 16.0684ZM6.34363 11.8827L4.4103 10.7674L3.80613 11.8139L5.73947 12.9292L6.34363 11.8827ZM12.6874 25.1019V22.8701H11.479V25.1019H12.6874ZM8.15613 20.2541L6.22159 21.3706L6.82576 22.417L8.75909 21.3005L8.15613 20.2541ZM22.7782 21.3718L20.8436 20.2541L20.2395 21.3017L22.1728 22.4182L22.7782 21.3718ZM17.5207 25.1055V22.8701H16.3124V25.1055H17.5207ZM24.5907 10.7662L22.6561 11.8827L23.2603 12.9292L25.1936 11.8127L24.5907 10.7662ZM25.1924 17.1837L23.2603 16.0708L22.6561 17.1172L24.5895 18.2325L25.1924 17.1837ZM17.5207 6.12866V3.89687H16.3124V6.12866H17.5207ZM22.174 6.58057L20.2395 7.69828L20.8436 8.7447L22.7782 7.62699L22.174 6.58057ZM16.3124 6.12866C16.3124 8.45349 18.8293 9.90712 20.8436 8.7447L20.2395 7.69828C19.9638 7.85741 19.6512 7.94116 19.3329 7.94111C19.0147 7.94106 18.702 7.85721 18.4265 7.69799C18.1509 7.53877 17.9221 7.3098 17.7631 7.03411C17.6041 6.75841 17.5205 6.44692 17.5207 6.12866H16.3124ZM22.6561 11.8839C20.6418 13.0464 20.6418 15.9536 22.6561 17.116L23.2603 16.0696C22.9848 15.9105 22.756 15.6817 22.5969 15.4062C22.4379 15.1307 22.3541 14.8181 22.3541 14.5C22.3541 14.1818 22.4379 13.8693 22.5969 13.5938C22.756 13.3183 22.9848 13.0895 23.2603 12.9304L22.6561 11.8839ZM20.8436 20.2553C18.8293 19.0929 16.3124 20.5441 16.3124 22.8701H17.5207C17.5207 22.552 17.6045 22.2406 17.7636 21.9651C17.9226 21.6896 18.1515 21.4608 18.427 21.3017C18.7025 21.1426 19.0151 21.0589 19.3332 21.0589C19.6514 21.0589 19.9639 21.1426 20.2395 21.3017L20.8436 20.2553ZM12.6874 22.8701C12.6874 20.5453 10.1704 19.0929 8.15613 20.2553L8.7603 21.3017C9.03592 21.1426 9.34858 21.0588 9.66684 21.0589C9.9851 21.0589 10.2977 21.1428 10.5733 21.302C10.8489 21.4612 11.0777 21.6902 11.2367 21.9659C11.3957 22.2416 11.4793 22.5543 11.479 22.8725L12.6874 22.8701ZM6.34363 17.116C8.35792 15.9536 8.35792 13.0464 6.34363 11.8839L5.73947 12.9304C6.9478 13.6276 6.9478 15.37 5.73947 16.0684L6.34363 17.116ZM11.479 6.12866C11.4788 6.44671 11.3949 6.75911 11.2357 7.03447C11.0766 7.30983 10.8478 7.53846 10.5723 7.69739C10.2968 7.85632 9.98429 7.93996 9.66624 7.9399C9.34818 7.93985 9.03574 7.8561 8.7603 7.69707L8.15613 8.7447C10.1704 9.90712 12.6874 8.4547 12.6874 6.12866H11.479Z"
              fill="#6E7591"
            />
          </svg>
        </div>
      </div>
      <div className="p-5 bottom-4">
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-semibold text-sm leading-[140%] text-[#613BE7]">
            {user?.total_level.title || "Жауынгер"}
          </h1>
          <span className="font-poppins font-normal text-sm leading-5 text-[#5F7084]">
            {user?.total_level.level || 0} из 10 уровней
          </span>
        </div>
        <div className="mt-4">
          <Progress value={(user?.total_level.level || 0) * 10} />
        </div>
      </div>

      <div className="p-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Статистика по пользователю</AccordionTrigger>
            <AccordionContent>
              <RadarChart
                height={500}
                width={500}
                outerRadius="80%"
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar
                  dataKey="x"
                  stroke="green"
                  fill="green"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Предыдущие отчеты</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Profile;
