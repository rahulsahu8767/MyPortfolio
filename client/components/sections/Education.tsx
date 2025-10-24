import { useState } from "react";
import { Modal, Button } from "antd";

import fullstackCert from "../../assets/coding seekho certificate _20250211_133057_0000.pdf"
interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details: string;
  field?: string;
  gpa?: string;
}

// EDIT HERE: Replace with your actual education information
const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor in Technology",
    field: "Computer Science & Engineering",
    institution: "RTMNU",
    year: "2022-2026",
    gpa: "8.6 / 10",
    details:
      "Graduated with honors. Specialized in web development and software engineering with a focus on full-stack technologies.",
  },
  {
    id: 2,
    degree: "Full Stack Developer",
    institution: "Coding Sikhoo",
    year: "2024-2026",
    details:
      "Intensive bootcamp covering modern C, C++, Python, Java, Advance-Java ,Web Developement, React, Node.js, monogdb,SQL, and deployment strategies.",
  },
 
];

export function Education() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div key={item.id} className="flex gap-6 mb-12 animate-slide-up" onClick={() => {
                if (item.id === 2) setOpen(true); // 👈 Only open modal for id=2
              }}>
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50 flex-shrink-0 mt-2"></div>
                {index !== educationData.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary to-muted mt-4 mb-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.degree}
                      </h3>
                      {item.field && (
                        <p className="text-primary font-semibold text-sm mt-1">
                          {item.field}
                        </p>
                      )}
                    </div>
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mt-2 sm:mt-0">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-foreground/70 font-medium mb-3">
                    {item.institution}
                  </p>

                  {item.gpa && (
                    <p className="text-secondary font-semibold text-sm mb-2">
                      GPA: {item.gpa}
                    </p>
                  )}

                  <p className="text-foreground/70 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Additional <span className="text-primary">Skills & Training</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* EDIT HERE: Replace or add more certifications */}
            {[
              "HTML,CSS,JS",
              "JAVA,C,Python(Basic)",
              "SPring BOOt Backend",
              "Mongodb Atlas (AWS)",
              "UI/UX Design Principles",
              "SQL",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-colors duration-300 flex items-center gap-3 animate-slide-up"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-foreground/80">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
       <Modal
        title="Full Stack Developer Certificate"
        open={open}
        centered
        width={900}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="close" onClick={() => setOpen(false)}>
            Close
          </Button>,
          <Button
            key="download"
            type="primary"
            href={fullstackCert}
            download="FullStack_Developer_Certificate.pdf"
          >
            Download
          </Button>,
        ]}
      >
        <iframe
          src={fullstackCert}
          title="Full Stack Developer Certificate"
          style={{
            width: "100%",
            height: "80vh",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white"
          }}
        />
      </Modal>
    </section>
  );
}
