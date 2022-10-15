import axios from "axios";

//this is only for the home page products the backend api is in another folder

import img1 from "../images/img1.jpg";
import img2 from "../images/img6.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

const data = {
  cardData: [
    {
      id: 1,
      img: img1,
      title: "juma",
      Price: "k100",
    },

    {
      id: 2,
      img: img2,
      title: "blog2",
      Price: "K200",
    },
    {
      id: 3,
      img: img3,
      title: "blog3",
      Price: "K300",
    },
    {
      id: 4,
      img: img4,
      title: "blog4",
      Price: "k400",
    },
    {
      id: 5,
      img: img4,
      title: "blog 5",
      Price: "K500",
    },
    {
      id: 6,
      img: img4,
      title: "blog6",
      Price: "K600",
    },
    {
      id: 7,
      img: img4,
      title: "blog7",
      Price: "K700",
    },
    {
      id: 8,
      img: img4,
      title: "blog8",
      Price: "k800",
    },
  ],
};
export default data;
