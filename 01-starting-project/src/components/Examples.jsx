import { TAB_BUTTONS, EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            {TAB_BUTTONS.map((val) => (
              <TabButton
                key={val}
                onClick={() => handleSelect(val.toLowerCase())}
                isSelected={val.toLowerCase() === selectedTopic}
              >
                {val}
              </TabButton>
            ))}
          </>
        }
      >
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
