import IPageRenderer from "./IPageRenderer";

export default class MarkdownRenderer implements IPageRenderer {
  render(content: string) {
    console.log(`Markdown - ${content}`);
  }
}
