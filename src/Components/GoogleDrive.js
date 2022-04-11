import React, { Fragment } from "react";
import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import "../Components/GoogleDrive.css";
import driveimg from "../Components/img/gd.svg.png";

const GoogleDrive = () => {
  const [openPicker, data, authResponse] = useDrivePicker();
  console.log(authResponse);
  const DatasumbitHandler = () => {
    openPicker({
      clientId:
        "391245812212-p5jkqs3514h5gr978u5jd34lh8ppofrd.apps.googleusercontent.com",
      developerKey: "AIzaSyDtA6DwADPkWGrCpAbO31l6xl5ilcz7jw8",
      token: authResponse ? authResponse.access_token : undefined,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      customScopes: ['https://www.googleapis.com/auth/drive']
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data)
      data.docs.map((i) => (
        window.open(i.url, "_blank")
      ));
    }
  }, [data]);

  return (
    <Fragment>
    <button className="btn1" onClick={DatasumbitHandler}>
      <span>
        Google Drive
        <img src={driveimg} alt="google drive"></img>
      </span>
    </button>
    </Fragment>
  );
};

export default GoogleDrive;
