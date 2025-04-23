import { Pane } from "@/(components)/pane";
import { getSectionGroups, getContent } from "@/(meta)/meta";

export default function Experience() {
  return (
    <main
      className="content"
      id="main"
    >
      <Pane
        sectionGroups={getSectionGroups("experience")}
        content={getContent("experience")}
      ></Pane>
    </main>
  );
}
