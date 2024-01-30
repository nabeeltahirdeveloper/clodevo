import React from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <h1>Clodevo</h1>
      <div className={"flex flex-col"}>
        <div>
          <div className={`${styles.sidebarLink} mt-8`}>
            <img src="/sidebar/icon.svg" />
            <a href="#">Home</a>
          </div>
          <div className={`${styles.sidebarLink} mt-8`}>
            <img src="/sidebar/icon.svg" />
            <a href="#">Uptime</a>
          </div>
          <div className={`${styles.sidebarLink} mt-8`}>
            <img src="/sidebar/icon.svg" />
            <a href="#">Alerting</a>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/icon.svg" />
          <a href="#">Metrics</a>
        </div>
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/icon.svg" />
          <a href="#">Logs</a>
        </div>
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/icon.svg" />
          <a href="#">Traces</a>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/setting.svg" />
          <a href="#" className="font-normal">
            Settings
          </a>
        </div>
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/team.svg" />
          <a href="#" className="font-normal">
            Team
          </a>
        </div>
        <div className={`${styles.sidebarLink} mt-8`}>
          <img src="/sidebar/logout.svg" />
          <a href="#" className="font-normal">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
