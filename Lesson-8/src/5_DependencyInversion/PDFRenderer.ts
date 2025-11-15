import IPageRenderer from "./IPageRenderer";

export default class PDFRenderer implements IPageRenderer {
  render(content: string) {
    console.log(`PDF - ${content}`);
  }
}
