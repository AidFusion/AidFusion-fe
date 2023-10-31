import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Howitworks = ({sectionId}) => {
  const cards = [
    {
      title: "Card Title",
      description: "Card Description",
      content: "Card Content",
      footer: "Card Footer",
    },
    {
      title: "Card Title",
      description: "Card Description",
      content: "Card Content",
      footer: "Card Footer",
    },
    {
      title: "Card Title",
      description: "Card Description",
      content: "Card Content",
      footer: "Card Footer",
    },
    
  ]

  return (
    <div className='p-10 flex flex-col gap-10' id={sectionId}>
      <div className='text-2xl text-center font-semibold p-5'>HOW IT WORKS</div>
      <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
        {cards.map((card, index) => (
          <Card className='w-full md:w-1/4 text-center'>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        ))}

      </div>
    </div>
  )
}
