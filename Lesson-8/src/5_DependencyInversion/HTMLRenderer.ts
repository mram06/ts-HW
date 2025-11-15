import IPageRenderer from "./IPageRenderer";

export default class HTMLRenderer implements IPageRenderer {
  render(content: string) {
    console.log(`<html>${content}</html>`);
  }
}
