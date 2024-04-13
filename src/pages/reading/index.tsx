import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router-dom";

// Mocked data for books
const books = [
  {
    id: 1,
    title: "Book Title 1",
    description: "This is the description for Book 1.",
    content: "Content of the book goes here.",
    footer: "Published in 2021.",
  },
  {
    id: 2,
    title: "Book Title 2",
    description: "This is the description for Book 2.",
    content: "Content of the book goes here.",
    footer: "Published in 2020.",
  },
  // Add more books as needed
];

export default function Reading() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/book/${id}`);  // Navigates to the page for the book with the given ID
  };

  return (
    <div className="p-4">
      <h1 className="font-poppins font-medium text-2xl py-11">
        Библиотека
      </h1>
      <div className="flex flex-col gap-2">
        {books.map((book) => (
          <div key={book.id} onClick={() => handleCardClick(book.id)} className="cursor-pointer">
            <Card>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}