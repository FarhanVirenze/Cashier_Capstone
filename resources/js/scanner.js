import { BrowserMultiFormatReader } from "@zxing/browser";

window.addEventListener("DOMContentLoaded", async () => {
    const previewElem = document.getElementById("preview");
    if (!previewElem) return;

    const codeReader = new BrowserMultiFormatReader();

    try {
        const devices = await BrowserMultiFormatReader.listVideoInputDevices();

        if (devices.length === 0) {
            alert("Tidak ada kamera yang tersedia.");
            return;
        }

        const backCamera = devices.find((device) =>
            device.label.toLowerCase().includes("back")
        ) || devices[0];

        const selectedDeviceId = backCamera.deviceId;

        const videoConstraints = {
            video: {
                deviceId: selectedDeviceId,
                width: { ideal: 640 },  // resolusi diperkecil
                height: { ideal: 480 },
                facingMode: "environment",
            },
        };

        let hasScanned = false;

        // Deteksi apakah kamera belakang dan atur efek mirror
const isBackCamera = backCamera.label.toLowerCase().includes("back") ||
                     videoConstraints.video.facingMode === "environment";

previewElem.style.transform = isBackCamera ? "scaleX(1)" : "scaleX(-1)";

        // scan terus tanpa membatasi format barcode
        codeReader.decodeFromConstraints(videoConstraints, previewElem, async (result, err) => {
            if (hasScanned) return;

            if (result) {
                hasScanned = true;
                const barcode = result.getText();

                const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute("content");

                try {
                    const res = await fetch("/scan", {
                        method: "POST",
                        headers: {
                            "X-CSRF-TOKEN": csrfToken,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ barcode }),
                    });

                    const data = await res.json();

                    if (data.success && data.product) {
                        const addRes = await fetch("/scan/add", {
                            method: "POST",
                            headers: {
                                "X-CSRF-TOKEN": csrfToken,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ product_id: data.product.id }),
                        });

                        const addData = await addRes.json();
                        console.log("Scan Add Response:", addData);

                        // Stop kamera
                        const stream = previewElem.srcObject;
                        if (stream) {
                            stream.getTracks().forEach((track) => track.stop());
                            previewElem.srcObject = null;
                        }

                        if (addData.success) {
                            const posMeta = document.querySelector('meta[name="pos-url"]');
                            const posUrl = posMeta?.getAttribute("content");
                            if (!posUrl) {
                                alert("URL halaman POS tidak ditemukan.");
                                return;
                            }
                            window.location.href = posUrl;
                        } else {
                            alert(addData.message || "Gagal menambahkan ke keranjang.");
                            hasScanned = false;  // reset agar bisa scan ulang jika gagal
                        }
                    } else {
                        alert(data.message || "Produk tidak ditemukan.");
                        hasScanned = false;  // reset agar bisa scan ulang jika produk tidak ada
                    }
                } catch (err) {
                    console.error("Kesalahan fetch:", err);
                    alert("Terjadi kesalahan saat memproses barcode.");
                    hasScanned = false;  // reset agar bisa scan ulang
                }
            }
        });
    } catch (error) {
        console.error("Kamera error:", error);
        alert("Gagal mengakses kamera.");
    }
});
