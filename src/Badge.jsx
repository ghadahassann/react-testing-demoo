// Export a tiny "Badge" UI that shows whatever text we pass via children.
// Why tiny? Small DOM = clean, readable snapshot diffs.
export default function Badge({ children }) {
  return (
    <span
      role="status"                 // Give it an accessible role so queries are semantic (a11y-friendly)
      className="badge"             // Simple class; not used for queries to keep tests resilient
    >
      {children}                    {/* The visible text inside the badge */}
    </span>
  );
}
