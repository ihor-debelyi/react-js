import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
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
  );
}
