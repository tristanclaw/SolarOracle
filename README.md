# Solar Oracle
> The Internet, Without the Screen.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Architecture_Phase-orange.svg)
![Power](https://img.shields.io/badge/power-Solar_%2F_LiFePO4-green.svg)

## The Mission
The **Solar Oracle** is a standalone, offline, solar-powered speech interface designed to bridge the digital divide for the unconnected billion. It provides instant access to agricultural, medical, and technical knowledge in off-grid communities—without requiring literacy, electricity, or internet connectivity.

By running the Liquid LFM 2.5 Audio model on edge hardware, we bring the reasoning power of the cloud to the ground, entirely offline.

## Architecture

### Hardware Stack
Designed for resilience, heat tolerance (60°C+), and zero-maintenance operation.
*   **Compute:** Raspberry Pi 5 (8GB) - Chosen for high-bandwidth CPU inference.
*   **Storage:** NVMe SSD via PCIe HAT (Eliminates SD card corruption risk).
*   **Power:** 40W Monocrystalline Solar Panel + LiFePO4 Battery Array (Safe chemistry, long cycle life).
*   **Audio:** IP66 Waterproof Microphone + High-efficiency Class-D Amplifier/Speaker.
*   **Enclosure:** UV-resistant ASA/PETG with passive chimney cooling and gore vents.

### Software Stack
*   **OS:** Raspberry Pi OS Lite (64-bit) - Headless, optimized for minimal overhead.
*   **Inference Engine:** `llama.cpp` running **LiquidAI LFM 2.5 Audio (1.5B)** in GGUF format.
*   **Control Logic:** Python 3.11.
    *   *Pipeline:* Wake Word Detect -> Audio Capture -> LFM Transcribe -> RAG Search -> LFM Speech Generation.
*   **RAG (Retrieval Augmented Generation):**
    *   **Database:** SQLite (FTS5 enabled for hybrid search).
    *   **Embeddings:** `all-MiniLM-L6-v2` (ONNX Runtime for speed).
    *   **Context:** Localized knowledge bases (e.g., "Kenya_Maize_Farming.txt", "Red_Cross_First_Aid.pdf").

## Planned Directory Structure

```bash
solar-oracle/
├── src/
│   ├── core/              # Main control loop and state machine
│   ├── audio/             # ALSA configuration and audio processing
│   ├── inference/         # llama.cpp python bindings wrapper
│   └── rag/               # Vector search and context retrieval logic
├── hardware/
│   ├── cad/               # STL/STEP files for enclosure (Fusion 360/FreeCAD)
│   ├── pcb/               # KiCad schematics for power management hat
│   └── bom.md             # Bill of Materials and sourcing guide
├── knowledge_base/
│   ├── ingest.py          # Script to parse PDFs/TXTs into the vector DB
│   └── datasets/          # Raw text data for RAG
└── docs/                  # Architecture Decision Records (ADRs)
```

## Roadmap & Status

*   **Phase 1: Architecture (Current)**
    *   [x] Concept Definition & Landing Page
    *   [ ] Hardware Component Selection (BMS & Audio HAT)
    *   [ ] Core Software Loop Prototype (Python)
    *   [ ] RAG Pipeline Integration

*   **Phase 2: Prototyping (Q3 2026)**
    *   [ ] 3D Print Enclosure V1 (Alpha)
    *   [ ] Thermal Stress Testing (45°C Chamber)
    *   [ ] Power Budget Optimization

*   **Phase 3: Pilot (2027)**
    *   [ ] Field Deployment: Rift Valley
    *   [ ] Local Dialect Finetuning

## Contributing
This is an Open Hardware initiative. We are building in the open and actively seeking contributors for the following roles:

*   **Electrical Engineers:** To design the custom BMS (Battery Management System) and Solar Charging HAT.
*   **Python Developers:** To assist with integrating `llama.cpp` bindings and optimizing the RAG retrieval latency on the Pi 5.
*   **Industrial Designers:** To optimize the enclosure for passive cooling and water ingress protection (IP65).

Please check the [Issues](https://github.com/tristanclaw/SolarOracle/issues) tab for current tasks.

## License
MIT License.
