import React from "react";
import Link from "next/link";

interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  link: string;
}

interface CloseableComponentProps {
  close: () => void;
}

export default function Notification({ close }: CloseableComponentProps) {
  // Sample notification data
  const notifications: NotificationItem[] = [
    {
      id: 1,
      title: "New Message",
      description: "You have received a new message from John.",
      time: "2 mins ago",
      link: "/messages",
    },
    {
      id: 2,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped.",
      time: "1 hour ago",
      link: "/orders/12345",
    },
    {
      id: 3,
      title: "Account Update",
      description: "Your account settings have been updated.",
      time: "3 hours ago",
      link: "/account",
    },
  ];

  return (
    <div
      className="absolute top-full right-0 mt-2 w-72 bg-white shadow-lg rounded-md overflow-hidden z-50"
      style={{ zIndex: 1000 }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-100">
        <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
      </div>

      {/* Notification List */}
      <div className="max-h-64 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Link
              key={notification.id}
              href={notification.link}
              onClick={close} // Close the dropdown when a notification is clicked
            >
              <div className="flex items-start px-4 py-3 hover:bg-gray-100 cursor-pointer">
                {/* Icon */}
                <div className="mr-3">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="px-4 py-3 text-center text-gray-600">
            No notifications available
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200">
        <button
          onClick={close}
          className="w-full text-left px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100"
        >
          Mark all as read
        </button>
      </div>
    </div>
  );
}