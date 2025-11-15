// Задача 5. Рендеринг сторінок:
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
// class HTMLTemplateRendererBad {
//   render(content: string) {
//     console.log(`<html>${content}</html>`);
//   }
// }

// class PageRendererBad {
//   private renderer = new HTMLTemplateRendererBad(); // ❌ залежність від конкретного класу
//   showPage(text: string) {
//     this.renderer.render(text);
//   }
// }
import IPageRenderer from "./5_DependencyInversion/IPageRenderer";
import HTMLRenderer from "./5_DependencyInversion/HTMLRenderer";
import PDFRenderer from "./5_DependencyInversion/PDFRenderer";
import MarkdownRenderer from "./5_DependencyInversion/MarkdownRenderer";

class PageRendererService {
  constructor(private renderer: IPageRenderer) {}
  showPage(text: string) {
    this.renderer.render(text);
  }
}

const pageRenderer = new PageRendererService(new HTMLRenderer());
pageRenderer.showPage("hello world");
