import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3/dist/transformers.min.js';

// Вимикаємо пошук локальних файлів моделі, використовуємо CDN
env.allowLocalModels = false;

let cachedPipeline = null;

self.addEventListener('message', async (event) => {
    const { type, payload } = event.data;

    if (type === 'load') {
        try {
            if (!cachedPipeline) {
                // Завантажуємо більшу модель 1.5B (займає близько 1-1.5 ГБ)
                cachedPipeline = await pipeline(
                    'text-generation',
                    'onnx-community/Qwen2.5-1.5B-Instruct',
                    {
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
