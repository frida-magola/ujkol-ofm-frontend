import Image from "next/image";
import Link from "next/link";
import { TfiArrowRight } from "react-icons/tfi";
import "./Cards.css";

export const Cards3ColsLink = (props) => {
  const classes = props.className
    ? props.className
    : `h-full object-cover rounded-sm shadow-md relative`;
  return (
    <div className="w-full h-56 md:w-1/3 mb-4 md:px-2 relative overflow-hidden ujkol-box ">
      <Link
        href={props.url}
        className="h-56 w-full md:w-1/3 relative img-link overflow-hidden "
      >
        <Image
          src={props.img}
          height={props.height}
          width={props.width}
          className={classes}
          alt={props.alt}
        />
      </Link>
      <h3 className="-mt-20 font-semibold relative py-3 px-5 text-2xl z-20 text-white">
        {props.title}
      </h3>
    </div>
  );
};

export const CardsDefault = (props) => {
  const classes = props.className
    ? props.className
    : `h-full object-cover rounded-sm shadow-md `;
  return (
    <div className="w-full md:w-1/3 mb-4 px-2 ">
      <div className="border rounded-xl border-ujkol-brown py-5 px-6 h-60 flex flex-col">
        <h3 className="font-semibold flex-grow">{props.title}</h3>
        <div className="flex justify-between items-center bottom-0">
          <Link
            href={props.url}
            className="py-2 px-6 w-max inline-block border border-ujkol-brown rounded-lg"
          >
            <span>{props.btnText}</span>
          </Link>
          <Link
            href={props.url}
            className="py-3 px-3 w-max inline-block rounded-full border border-ujkol-brown"
          >
            <span>
              <TfiArrowRight
                width={20}
                height={20}
                className="font-bold text-ujkol-brown text-lg"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardsNewsArticles = (props) => {
  const classes = props.className
    ? props.className
    : `h-full object-cover rounded-sm shadow-md `;
  return (
    <div className="w-full md:w-1/3 mb-4 px-2 ">
      <div className="border rounded-xl border-ujkol-brown py-5 px-6 h-60 flex flex-col">
        <h3 className="font-semibold  order-2 bottom-0 flex">{props.title}</h3>
        <div className="flex justify-between flex-grow order-1 items-start">
          <Link
            href={props.url}
            className="py-2 px-6 w-max inline-block border-0 border-ujkol-brown  rounded-sm font-bold"
          >
            <span>{props.btnText}</span>
          </Link>
          <Link
            href={props.url}
            className="py-3 px-3 w-max inline-block rounded-full border border-ujkol-brown"
          >
            <span>
              <TfiArrowRight
                width={20}
                height={20}
                className="font-bold text-ujkol-brown text-lg"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const EventCards = (props) => {
  const classes = props.className
    ? props.className
    : `h-full object-cover rounded-sm shadow-md `;
  return (
    <div className="w-full md:w-1/2 mb-4 px-2 ">
      <div className="border rounded-xl border-white py-5 px-6 h-60 flex flex-col">
        <div className="flex justify-between items-center bottom-0">
          <span>{props.date}</span>
          <Link
            href={props.url}
            className="py-2 px-6 w-max inline-block border border-ujkol-brown rounded-lg"
          >
            <span>{props.btnText}</span>
          </Link>
        </div>

        <div>
          <h3 className="font-semibold flex-grow">{props.title}</h3>
          <p>{props.text}</p>
        </div>

        <div className="flex justify-between items-center bottom-0">
          <Link
            href={props.href}
            className="py-3 px-3 w-max inline-block rounded-full border border-ujkol-brown"
          >
            <span>
              <TfiArrowRight
                width={20}
                height={20}
                className="font-bold text-ujkol-brown text-lg"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CardTestimonial = (props) => {
  return (
    <div className="w-full md:w-1/3 mb-4 px-2">
      <div className="border border-gray-400  lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {props.role}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.facname}
          </div>
          <p className="text-gray-700 text-base">{props.text}</p>
        </div>
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full mr-4"
            src={props.photo}
            alt={props.name}
            width={60}
            height={60}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{props.name}</p>
            <p className="text-gray-600">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
