import React from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
  markdownText: string;
}

const MarkdownRenderer: React.FC<IProps> = ({ markdownText }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
