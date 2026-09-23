const quoteOpen = "[[quote]]";
const quoteClose = "[[/quote]]";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function storyMarkupToHtml(value: string) {
  return escapeHtml(value)
    .replace(/^&gt; (.+)$/gm, "<q>$1</q>")
    .replace(/\[\[quote\]\]([\s\S]*?)\[\[\/quote\]\]/g, "<q>$1</q>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");
}

function nodeToMarkup(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? "";
  if (!(node instanceof HTMLElement)) return "";

  const content = Array.from(node.childNodes).map(nodeToMarkup).join("");
  const tag = node.tagName.toLowerCase();
  if (tag === "br") return "\n";
  if (tag === "strong" || tag === "b") return `**${content}**`;
  if (tag === "em" || tag === "i") return `*${content}*`;
  if (tag === "q") return `${quoteOpen}${content}${quoteClose}`;
  if (tag === "div" || tag === "p") return `${content}\n`;
  return content;
}

export function htmlToStoryMarkup(element: HTMLElement) {
  return Array.from(element.childNodes)
    .map(nodeToMarkup)
    .join("")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\n$/, "");
}
