import type { ExampleItem, ResourceItem } from '../types';

interface Props {
  examples: ExampleItem[];
  resources: ResourceItem[];
  onLoadExample: (code: string) => void;
}

export function ResourceSection({ examples, resources, onLoadExample }: Props) {
  return (
    <section className="resource-section">
      <div className="resource-group">
        <h2>学习示例</h2>
        <ul className="resource-list">
          {examples.map((ex) => (
            <li key={ex.id}>
              <button
                type="button"
                className="resource-btn"
                onClick={() => onLoadExample(ex.code)}
              >
                {ex.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="resource-group">
        <h2>学习资源</h2>
        <ul className="resource-list">
          {resources.map((r) => (
            <li key={r.id}>
              <a href={r.url} target="_blank" rel="noreferrer">
                {r.title}
              </a>
              <span className="resource-desc">{r.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}