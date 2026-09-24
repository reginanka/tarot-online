import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js';

// Вимикаємо пошук локальних файлів моделі, використовуємо CDN
env.allowLocalModels = false;

let cachedPipeline = null;

self.addEventListener('message', async (event) => {
    const { type, payload } = event.data;

    if (type === 'load') {
        try {
            if (!cachedPipeline) {
                // Перевіряємо, чи підтримує браузер WebGPU (відеокарту)
                const isWebGPU = navigator.gpu !== undefined;

                // Завантажуємо 1.5B модель зі стисненням q4 (4-bit)
                // Це критично важливо, щоб браузер не впав від нестачі пам'яті
                cachedPipeline = await pipeline(
                    'text-generation',
                    'onnx-community/Qwen2.5-1.5B-Instruct',
                    {
                        dtype: 'q4', // 4-бітне стиснення ваг
                        device: isWebGPU ? 'webgpu' : 'wasm', // GPU прискорення
                        progress_callback: (progress) => {
                            self.postMessage({ type: 'progress', payload: progress });
                        }
                    }
                );
            }
            self.postMessage({ type: 'loaded' });
        } catch (err) {
            self.postMessage({ type: 'error', payload: err.message });
        }
    } else if (type === 'generate') {
        try {
            const { messages, params } = payload;
            const output = await cachedPipeline(messages, params);
            self.postMessage({ type: 'complete', payload: output });
        } catch (err) {
            self.postMessage({ type: 'error', payload: err.message });
        }
    }
});
