import React from 'react';

import { NavigationContext, Tabs } from 'NavigationContext';
import { useContext } from 'react';

const Navbar = () => {
  const { activeTab, setActiveTab } = useContext(NavigationContext);

  return (
    <nav className="navigation h-100 d-flex flex-column text-center navbar navbar-light hide-scrollbar">
      {/* Brand */}
      <a
        href="index.html"
        title="Instant Messaging App"
        className="d-none d-xl-block mb-6"
      >
        <svg
          version="1.1"
          width="46px"
          height="46px"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 46 46"
          enableBackground="new 0 0 46 46"
          xmlSpace="preserve"
        >
          <polygon opacity="0.7" points="45,11 36,11 35.5,1 "></polygon>
          <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
          <polygon opacity="0.4" points="17,9.8 39,21 17,26 "></polygon>
          <polygon opacity="0.7" points="2,12 17,26 17,9.8 "></polygon>
          <polygon opacity="0.7" points="17,26 39,21 28,36 "></polygon>
          <polygon points="28,36 4.5,44 17,26 "></polygon>
          <polygon points="17,26 1,26 10.8,20.1 "></polygon>
        </svg>
      </a>

      {/* Nav items */}
      <ul
        className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between align-items-center w-100 py-2 py-lg-4 px-3 px-lg-5"
        role="tablist"
      >
        {/* Invisible item to center nav vertically */}
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
          <a className="nav-link py-0 py-lg-4" href="#" title="">
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </a>
        </li>

        {/* New chat */}
        <li className="nav-item" onClick={() => setActiveTab(Tabs.NEW_CHAT)}>
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.NEW_CHAT ? 'active' : ''
            }`}
            id="tab-create-chat"
            href="#tab-content-create-chat"
            title="Create chat"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-3"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
          </a>
        </li>

        {/* Friends */}
        <li className="nav-item" onClick={() => setActiveTab(Tabs.FRIENDS)}>
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.FRIENDS ? 'active' : ''
            }`}
            id="tab-friends"
            href="#tab-content-friends"
            title="Friends"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </a>
        </li>

        {/* Chats */}
        <li className="nav-item" onClick={() => setActiveTab(Tabs.CHATS)}>
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.CHATS ? 'active' : ''
            }`}
            id="tab-chats"
            href="#tab-content-chats"
            title="Chats"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-square position-relative translate-middle-x start-50"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="badge bg-primary position-absolute translate-middle rounded-pill border border-light">
                <small>4</small>
              </span>
            </div>
          </a>
        </li>

        {/* Notification */}
        <li
          className="nav-item"
          onClick={() => setActiveTab(Tabs.NOTIFICATION)}
        >
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.NOTIFICATION ? 'active' : ''
            }`}
            id="tab-notifications"
            href="#tab-content-notifications"
            title="Notifications"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
          </a>
        </li>

        {/* Support */}
        <li
          className="nav-item d-none d-xl-block flex-xl-grow-1"
          onClick={() => setActiveTab(Tabs.SUPPORT)}
        >
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.SUPPORT ? 'active' : ''
            }`}
            id="tab-support"
            href="#tab-content-support"
            title="Support"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-layout"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
          </a>
        </li>

        {/* Switcher */}
        <li
          className="nav-item d-none d-xl-block"
          onClick={() => setActiveTab(Tabs.SWITCHER)}
        >
          <a
            className={`switcher-btn nav-link py-0 py-lg-4 ${
              activeTab === Tabs.SWITCHER ? 'active' : ''
            }`}
            href="#!"
            title="Themes"
          >
            <div
              className="switcher-icon switcher-icon-dark icon icon-xl d-none"
              data-theme-mode="dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <div
              className="switcher-icon switcher-icon-light icon icon-xl"
              data-theme-mode="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
          </a>
        </li>

        {/* Settings */}
        <li className="nav-item" onClick={() => setActiveTab(Tabs.SETTINGS)}>
          <a
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.SETTINGS ? 'active' : ''
            }`}
            id="tab-settings"
            href="#tab-content-settings"
            title="Settings"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-settings"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
          </a>
        </li>

        {/* Profile */}
        <li
          className="nav-item d-none d-xl-block"
          onClick={() => setActiveTab(Tabs.PROFILE)}
        >
          <a
            href="#"
            className={`nav-link py-0 py-lg-4 ${
              activeTab === Tabs.PROFILE ? 'active' : ''
            }`}
            data-bs-toggle="modal"
            data-bs-target="#modal-profile"
          >
            <div className="icon icon-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="currentColor"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bi bi-person"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
