import { Pane } from "@/(components)/pane";
import { getSectionGroups, getContent } from "@/(meta)/meta";

export default function About() {
  return (
    <main
      className="content"
      id="main"
    >
      <Pane
        sectionGroups={getSectionGroups("about")}
        content={getContent("about")}
      ></Pane>
    </main>
  );
}
