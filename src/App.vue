<script setup lang="ts">
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';

const inputValue = ref('');
const qrCodeDataUrl = ref('');

const generateQRCode = () => {
    if (!inputValue.value) {
        qrCodeDataUrl.value = '';
        return;
    }
    QRCode.toDataURL(inputValue.value, {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        margin: 1,
        width: 300,
    }, (err, dataUrl) => {
        if (err) {
            console.error('Error generating QR code:', err);
            return;
        }
        qrCodeDataUrl.value = dataUrl;
    });
};

onMounted(() => {
    console.log('QR Code Generator App loaded');
});
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div class="max-w-md mx-auto">
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-4xl font-bold text-white mb-2">QR Code Generator</h1>
                <p class="text-slate-400">Generate QR codes from text or URLs</p>
            </div>

            <!-- Input Section -->
            <div class="bg-slate-800 rounded-lg p-6 shadow-xl mb-6">
                <!-- <label for="text-input" class="block text-sm font-medium text-slate-200 mb-3">
                    Enter Text or URL
                </label> -->
                <input
                    id="text-input"
                    v-model="inputValue"
                    @input="generateQRCode"
                    type="text"
                    placeholder="https://example.com..."
                    class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <!-- QR Code Display Section -->
            <div v-if="qrCodeDataUrl" class="bg-slate-800 rounded-lg p-6 shadow-xl">
                <!-- <label class="block text-sm font-medium text-slate-200 mb-3">
                    Generated QR Code
                </label> -->
                <div class="p-4 flex justify-center">
                    <img :src="qrCodeDataUrl" alt="Generated QR Code" class="w-full max-w-xs" />
                </div>
            </div>

            <!-- Placeholder Section -->
            <div v-else class="bg-slate-800 rounded-lg p-6 shadow-xl text-center">
                <p class="text-slate-400">QR Code will appear here</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
