// Generic Bootstrap-styled tabbed panel, controlled by the parent so other UI
// (the floating nav) can switch tabs too. `tabs` is [{ key, label, content }].
export default function Tabs({ tabs, activeKey, onChange }) {
  return (
    <div className="interactive-window">
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.key}>
            <button
              className={`nav-link${activeKey === tab.key ? ' active' : ''}`}
              type="button"
              role="tab"
              onClick={() => onChange(tab.key)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content p-3 border border-top-0">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-pane fade${activeKey === tab.key ? ' show active' : ''}`}
            role="tabpanel"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
