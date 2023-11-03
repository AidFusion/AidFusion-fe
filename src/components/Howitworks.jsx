import React from 'react'
import { PlusCircle, User, Phone, Locate } from 'lucide-react'; // Import the necessary icons
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

export const Howitworks = ({sectionId}) => {
  const cards = [
      {
          title: "Create an Account",
          icon: <PlusCircle />, // Icon component here
          content: "Register an account to access exclusive features and content.",
      },
      {
          title: "User Profile",
          icon: <User />, // Another icon component
          content: "View and manage your personal profile information here.",
      },
      {
          title: "Phone Login",
          icon: <Phone />, // Yet another icon component
          content: "Login using your phone number for quick access.",
      },
      {
        title: "Browse Restaurants",
        icon: <Locate />, // Replace with your Restaurant icon
        content: "Discover and explore a variety of restaurants and their menus.",
    },
  ];
  

  return (
    <div className='p-10 flex flex-col gap-10' id={sectionId}>
      <div className='text-2xl text-center font-semibold p-5'>HOW IT WORKS</div>
      <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
        {cards.map((card, index) => (
          <Card className='w-full md:w-1/4 text-center h-[20em]l'>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription className="flex justify-center text-secondary">
             {card.icon}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
        </Card>
        ))}

      </div>
    </div>
  )
}
