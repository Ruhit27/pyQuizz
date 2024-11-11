import React from "react";
import { FaTwitter, FaHeart, FaUserCircle } from "react-icons/fa"; // Import icons

// Define the type for the testimonial data
interface TestimonialData {
  name: string;
  username: string;
  content: string;
  timeAgo: string;
  likes: number; // Added likes property
}

const TestimonialCard: React.FC<TestimonialData> = ({
  name,
  username,
  content,
  timeAgo,
  likes,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs mx-2 mb-4 relative h-[270px]">
      {/* User Info Section */}
      <div className="flex items-center space-x-4">
        <FaUserCircle className="w-12 h-12 text-gray-500" />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="text-gray-800 text-lg mt-4">
        <p>{content}</p>
      </div>

      {/* Footer Section with 'Twitter' Icon, Date, and Likes */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-gray-500 text-sm">
        <FaTwitter className="text-xl text-blue-400" />
        <p>{timeAgo}</p>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-gray-500 text-sm">
        <FaHeart className="text-red-500" />
        <span>{likes}</span>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  // Example dynamic testimonial data
  const testimonials: TestimonialData[] = [
    {
      name: "Viktor Tan",
      username: "therealDana",
      content: "John Jones is the greatest fighter of ALL-TIME",
      timeAgo: "2 days ago",
      likes: 95,
    },
    {
      name: "Elon Musk",
      username: "@teslaMusk",
      content: "I want to buy this platform for 100000$. ",
      timeAgo: "1 week ago",
      likes: 150,
    },
    {
      name: "Fatima",
      username: "Fatimawallahi",
      content:
        "PyQUIZZ has been a fantastic resource for me! The quizzes are interactive and fun, making learning Python more enjoyable.",
      timeAgo: "5h ago",
      likes: 120,
    },
  ];

  return (
    <div className="md:flex justify-center space-x-4 mt-20">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialSection;
