// Задача 5. Рендеринг сторінок:
// PageRenderer напряму залежить від HTMLTemplateRenderer, тому не можна підставити інший тип рендерингу (Markdown, PDF).
// class HTMLTemplateRendererBad {
//   render(content: string) {
//     console.log(`<html>${content}</html>`);
//   }
// }
import HTMLRenderer from "./5_DependencyInversion/HTMLRenderer";
class PageRendererService {
    constructor(renderer) {
        this.renderer = renderer;
    }
    showPage(text) {
        this.renderer.render(text);
    }
}
const pageRenderer = new PageRendererService(new HTMLRenderer());
pageRenderer.showPage("hello world");
