import ControlPanel from "../ControlPanel";
import React, { useState, useEffect } from "react";
import ConfigInput from "./ConfigInput";
import { useGetSettingsQuery } from "@/services/setting/settingApi";

const Settings = () => {

  const {
    data,
    error,
    isLoading
  } = useGetSettingsQuery();




    return (
        <>
            <ControlPanel>
                <div className="grid grid-cols-1 gap-5  sm:grid-cols-2">

                    {isLoading
                        ?
                        <h1 className="text-center text-2xl"> درحال بارگزاری  </h1>
                        :
                        data.data.length == 0 ? <h1 className="text-center text-2xl"> هیچ تنظیماتی وجود ندارد  </h1>
                            :
                            data.data.map((item) => <ConfigInput item={item} />)
                    }

                </div>
            </ControlPanel>
        </>
    );
};

export default Settings;