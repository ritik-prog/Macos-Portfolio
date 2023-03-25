import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Full stack developer with additional knowledge of AWS Cloud,
              Blockchain Development, Application Designing(Figma) and Marketing
              Strategy.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Full stack development , AWS Cloud, Blockchain Development, Application Designing(Figma) and \
                Marketing Strategy."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:ritikmakhija2002@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ritikmakhija2002@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="mailto:ritikmakhija2002@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ritikmakhija2002@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ritik-prog"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/ritik-prog
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/ritikmakhija/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/ritikmakhija/
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://blog.ritikmakhija.tech"
                target="_blank"
                rel="noreferrer"
              >
                https://blog.ritikmakhija.tech
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
