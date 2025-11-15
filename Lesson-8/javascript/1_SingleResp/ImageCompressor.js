export default class ImageCompressor {
    compressImage(path) {
        console.log(`Compressing image: ${path}`);
        return `compressed_${path}`;
    }
}
