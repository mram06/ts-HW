export default class ImageCompressor {
  compressImage(path: string): string {
    console.log(`Compressing image: ${path}`);
    return `compressed_${path}`;
  }
}
