import { Pane } from "@/(components)/pane";
import { getSectionGroups, getContent } from "@/(meta)/meta";

export default function Skills() {
  return (
    <main
      className="content"
      id="main"
    >
      <Pane
        sectionGroups={getSectionGroups("skills")}
        content={getContent("skills")}
      ></Pane>
    </main>
  );
}
