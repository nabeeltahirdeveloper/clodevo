"use client"
import React from "react";
import styles from "./Sidebar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const location = usePathname();
  const backgroundColor = location === "/" ? "#293040" : "#0C0B0B";
  return (
    <div className={styles.sidebarContainer} style={{backgroundColor}}>
      <h1>Clodevo</h1>
      <div className={"flex flex-col"}>
        <div>
          <div className={`${styles.sidebarLink} mt-8`}>
            <img src="/sidebar/icon.svg" />
            <a href="#">Home</a>
          </div>
          <div className={`${styles.sidebarLink} mt-8`}>
            <img src="/sidebar/icon.svg" />
            <div className={styles.dropdown}>
              <button className={styles.dropdownToggle}  onClick={toggleOpen}>
                Uptime
              </button>
              
            </div>
          </div>
          {isOpen && (
                <div className={isOpen ? styles.dropdownMenuOpen : styles.dropdownMenuClosed} style={{
                  flexDirection: "column",
                  display: "flex",  
                  color: "white",
                  marginLeft: "75px",
                  gap: 5,
                  marginTop: 10,
                }}>
                  <a className={styles.dropdownItem}  href="#">Monitors</a>
                  <a className={styles.dropdownItem}  href="#">Heartbeats</a>
                  <a className={styles.dropdownItem}  href="#">Status pages</a>
                </div>
              )}
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
