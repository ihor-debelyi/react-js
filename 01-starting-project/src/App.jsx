import { CORE_CONCEPTS, TAB_BUTTONS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={conceptItem.title}
                image={conceptItem.image}
                title={conceptItem.title}
                description={conceptItem.description}
              />
            ))}
            {/* {CORE_CONCEPTS.map((c) => (
              <CoreConcept {...c} />
            ))} */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {TAB_BUTTONS.map((val) => (
              <TabButton
                onSelect={() => handleSelect(val.toLowerCase())}
                isSelected={val.toLowerCase() === selectedTopic}
              >
                {val}
              </TabButton>
            ))}
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
