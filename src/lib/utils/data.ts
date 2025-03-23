import type { PageData } from "../types/page-data";

const data: PageData = {
  hero: {
    heading: "Ready to find your new home",
    description:
      "Looking for a house with a low price and quality here, and sell your house quickly here",
    selected_city: "Jakarta",
    selected_price: "$1000 - $2000",
    selected_rooms: "3 rooms",
    selected_footage: "2 footage",
  },
  latest: [
    {
      name: "Orange House",
      address: "Jl. Jaya Temaram, South Jakarta, DKI Jakarta",
      price: "$1,435,000",
      total_rooms: 3,
      is_liked: false,
      image_path: "/assets/house-1.png",
    },
    {
      name: "White House",
      address: "Perum Asri Bojongkenyot, Gerlong, Bandung",
      price: "$1,200,500",
      total_rooms: 2,
      is_liked: true,
      image_path: "/assets/house-2.png",
    },
    {
      name: "Dark Blue House",
      address: "Jl. Klapanunggal, Cileungsi, Bogor",
      price: "$2,300,500",
      total_rooms: 1,
      is_liked: false,
      image_path: "/assets/house-3.png",
    },
  ],
  testimonials: [
    {
      name: "Jane",
      image_path: "/assets/girl-1.png",
      testimony:
        "Purchasing my dream home here was a breeze! The process was seamless and stress-free.",
    },
    {
      name: "Michael",
      image_path: "/assets/girl-2.png",
      testimony:
        "I never thought buying a house could be this simple! The team guided me every step of the way.",
    },
    {
      name: "Sophia",
      image_path: "/assets/girl-3.png",
      testimony:
        "From start to finish, the experience was fantastic! I found the perfect home without any hassle.",
    },
    {
      name: "Liam",
      image_path: "/assets/girl-4.png",
      testimony:
        "I was amazed at how quickly I found my house. The service was exceptional and very supportive!",
    },
  ],
  blogs: [
    {
      title: "Essential Tips for First-Time Homebuyers",
      short_desc:
        "Discover key strategies to secure your dream home without breaking the bank.",
      writer_name: "Ahmad Sumbul",
      image_path: "/assets/blog-1.png",
    },
    {
      title: "Navigating the Real Estate Market: A Beginner's Guide",
      short_desc:
        "Unlock the secrets to smart home buying with practical advice from industry experts.",
      writer_name: "Siti Amanda",
      image_path: "/assets/blog-2.png",
    },
    {
      title: "The Ultimate Checklist for House Hunting",
      short_desc:
        "Ensure you don't miss a detail with this comprehensive guide for house hunters.",
      writer_name: "John Carpenter",
      image_path: "/assets/blog-3.png",
    },
  ],
};

export default data;
