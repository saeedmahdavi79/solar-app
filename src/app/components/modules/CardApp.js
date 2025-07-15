"use client";

import { Card } from "antd";
import InputModule from "./Input";
import { useState } from "react";
import ButtonApp from "./button";

const CardApp = ({ title }) => {
  const [statusState, setStatusSatet] = useState(false);
  const [statusState2, setStatusSatet2] = useState(false);

  const changeStatus = (e) => {
    if (!e.target.value) {
      setStatusSatet(false);
    } else {
      setStatusSatet(true);
    }
  };
  const changeStatus2 = (e) => {
    if (!e.target.value) {
      setStatusSatet2(false);
    } else {
      setStatusSatet2(true);
    }
  };

  return (
    <>
      <Card title={title} className="w-full" variant="borderless">
        <div className="w-full grid grid-cols-3 gap-4">
          <InputModule
            type={"text"}
            placeholder={"ظرفیت"}
            selectable={true}
            onChange={changeStatus}
            statusInput={statusState}
            defaultVal={"متر مکعب بر ساعت"}
            options={[
              { value: "1", label: "متر مکعب بر ساعت" },
              { value: "2", label: "متر مکعب بر ثانیه" },
              { value: "3", label: "لیتر بر ثانیه" },
              { value: "4", label: "لیتر بر دقیقه" },
              { value: "5", label: "گالن بر دقیقه" },
              { value: "6", label: "بشکه بر روز" },
            ]}
          />
          <InputModule
            type={"text"}
            placeholder={"ارتفاع"}
            selectable={true}
            defaultVal={"متر"}
            onChange={changeStatus2}
            statusInput={statusState2}
            options={[
              { value: "1", label: "متر" },
              { value: "2", label: "فوت" },
            ]}
          />
          <InputModule
            type={"text"}
            placeholder={"دور محرکه 1"}
            vahed={"دور بر دقیقه"}
          />
          <InputModule
            type={"text"}
            placeholder={"دور محرکه 2"}
            vahed={"دور بر دقیقه"}
          />
          <InputModule
            type={"text"}
            placeholder={"دور محرکه 3"}
            vahed={"دور بر دقیقه"}
          />
          <div className="w-full flex gap-2 items-center">
            <span>محدوده انتخابی</span>
            <span>
              <InputModule type={"text"} placeholder={"0.7"} />
            </span>
            <span>تا</span>
            <span>
              <InputModule type={"text"} placeholder={"1.2"} />
            </span>
          </div>
        </div>

        <div className="w-full flex mt-6 mx-10">
          <div className="w-1/8">
            <ButtonApp text={"بررسی کن"} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardApp;
