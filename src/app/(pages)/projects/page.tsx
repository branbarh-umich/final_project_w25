import { Pane } from "@/(components)/pane";
import { getSectionGroups, getContent } from "@/(meta)/meta";

export default function Projects() {
  return (
    <main
      className="content"
      id="main"
    >
      <Pane
        sectionGroups={getSectionGroups("projects")}
        content={getContent("projects")}
      ></Pane>
    </main>
  );
}
