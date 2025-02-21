"use client"
import { FaCheckCircle, FaStar, FaGem } from "react-icons/fa";
import NavBar from "../components/NavBar/NavBar";

const plans = [
  {
    name: "Basic",
    price: "$9.99/mo",
    features: ["Access to standard NFTs", "Limited bidding", "Basic analytics"],
    icon: FaCheckCircle,
  },
  {
    name: "Pro",
    price: "$29.99/mo",
    features: ["Exclusive NFT drops", "Priority bidding", "Advanced analytics"],
    icon: FaStar,
  },
  {
    name: "Premium",
    price: "$49.99/mo",
    features: ["Early access to top NFTs", "Zero transaction fees", "Premium support"],
    icon: FaGem,
  },
];

export default function SubscriptionPage() {
  return (
    <div >
         <NavBar/>
      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white py-10 ">
      <h1 className="text-4xl font-bold mb-6 mt-20">Choose Your Subscription</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {plans.map((plan, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center">
            <plan.icon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-green-400" /> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg font-semibold">Subscribe</button>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
}