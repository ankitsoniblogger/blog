import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card_box box-content border-solid border-2 border-gray-100 shadow-slate-50 hover:border-gray-300 rounded-xl">
        <img
          className="rounded-xl"
          src="https://picsum.photos/450/300"
          alt=""
          loading="lazy"
        />

        <h1 className="text-xl mt-2 font-medium hover:text-red-700">
          <a href="#"> {props.title} </a>
        </h1>
        <hr className="mt-5" />
        <div className="mt-3 card_details flex items-center justify-between">
          <div className="flex gap-1 items-center">
            {" "}
            <img
              className="rounded-full "
              src="https://picsum.photos/20"
              alt=""
            />{" "}
            <p className="text-sm">{props.author}</p>
          </div>
          <p className="flex item-center gap-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="rgba(0, 0, 0, 1)"
            >
              <path d="M20 12a2 2 0 00-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2.06 2.06 0 009 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2 .892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A1.906 1.906 0 007 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.48 2.48 0 001.133-.281l2.399 1.963A2.077 2.077 0 0018 14c0 1.108.892 2 2 2s2-.892 2-2-.892-2-2-2z"></path>
            </svg>
            {props.views} views
          </p>
          <p className="flex items-center gap-1 text-sm">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="rgba(0, 0, 0, 1)"
            >
              <path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path>
              <circle cx="9.5" cy="11.5" r="1.5"></circle>
              <circle cx="14.5" cy="11.5" r="1.5"></circle>
            </svg>{" "}
            {props.comments} comments
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
