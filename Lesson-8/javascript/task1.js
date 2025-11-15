// Клас і завантажує, і стискає, і логує дії.
// ❌ Неправильна реалізація
// class ImageUploaderBad {
//   uploadImage(filePath: string) {
//     const compressed = this.compressImage(filePath);
//     console.log(`Uploading ${compressed} to server...`);
//     this.logAction(`File ${filePath} uploaded successfully.`);
//   }
//   private compressImage(path: string): string {
//     console.log(`Compressing image: ${path}`);
//     return `compressed_${path}`;
//   }
//   private logAction(message: string) {
//     const timestamp = new Date().toISOString();
//     console.log(`[${timestamp}] LOG: ${message}`);
//   }
// }
import ActionLogger from "./1_SingleResp/ActionLogger.js";
import ImageCompressor from "./1_SingleResp/ImageCompressor.js";
import ImageUploader from "./1_SingleResp/ImageUploader.js";
class ImageService {
    constructor(uploader, compressor, actionLogger) {
        this.uploader = uploader;
        this.compressor = compressor;
        this.actionLogger = actionLogger;
    }
    process(path, message) {
        this.uploader.uploadImage(path);
        this.compressor.compressImage(path);
        this.actionLogger.logAction(message);
    }
}
const imageService = new ImageService(new ImageUploader(), new ImageCompressor(), new ActionLogger());
imageService.process("C:/Users/Desktop/image.png", "successful");
