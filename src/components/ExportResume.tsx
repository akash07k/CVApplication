import React from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { FormData } from "../types";
import "../styles/ExportResume.css";

interface ExportResumeProps {
  resumeData: FormData;
}

const ExportResume = ({ resumeData }: ExportResumeProps) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text("Resume", 10, 10);

    Object.entries(resumeData).forEach(([sectionTitle, sectionData], index) => {
      doc.setFontSize(10);
      doc.text(
        sectionTitle
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        10,
        20 + index * 10
      );

      Object.entries(sectionData as Record<string, string>).forEach(
        ([key, value], subIndex) => {
          doc.text(
            `${key
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}: ${value}`,
            20,
            30 + subIndex * 10
          );
        }
      );
    });

    doc.save("resume.pdf");
  };

  const generateMarkdown = () => {
    let markdown = "# Resume\n\n";

    Object.entries(resumeData).forEach(([sectionTitle, sectionData]) => {
      markdown += `## ${sectionTitle
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())}\n\n`;
      Object.entries(sectionData as Record<string, string>).forEach(
        ([key, value]) => {
          markdown += `**${key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}**: ${value}\n\n`;
        }
      );
    });

    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    saveAs(blob, "resume.md");
  };

  return (
    <div className="export-buttons">
      <h2>Export Resume</h2>
      <button onClick={generatePDF}>Export to PDF</button>
      <button onClick={generateMarkdown}>Export to Markdown</button>
    </div>
  );
};

export default ExportResume;
