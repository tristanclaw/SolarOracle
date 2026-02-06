import time
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger("SolarOracle")

from src.audio.manager import AudioManager
from src.inference.engine import InferenceEngine
from src.rag.engine import RagEngine

class SolarOracle:
    def __init__(self):
        logger.info("Initializing Solar Oracle System...")
        
        self.state = "IDLE"
        
        # Initialize Subsystems
        self.audio = AudioManager()
        self.inference = InferenceEngine()
        self.rag = RagEngine()

    def run(self):
        """Main Event Loop."""
        logger.info("System Online. Entering Main Loop.")
        
        try:
            while True:
                if self.state == "IDLE":
                    self._handle_idle()
                elif self.state == "LISTENING":
                    self._handle_listening()
                elif self.state == "PROCESSING":
                    self._handle_processing()
                elif self.state == "SPEAKING":
                    self._handle_speaking()
                
                # Prevent CPU spin
                time.sleep(0.1)
                
        except KeyboardInterrupt:
            logger.info("Shutdown signal received.")
            self._shutdown()

    def _handle_idle(self):
        """Check for wake word or button press."""
        # Simulated check
        # if wake_word_detected():
        #     self.state = "LISTENING"
        pass

    def _handle_listening(self):
        """Capture audio input."""
        logger.info("Listening for user query...")
        self.audio_data = self.audio.listen()
        self.state = "PROCESSING"

    def _handle_processing(self):
        """Transcribe -> RAG -> Generate Answer."""
        logger.info("Processing query...")
        
        # 1. Transcribe
        query_text = self.inference.transcribe(self.audio_data)
        logger.info(f"Recognized: {query_text}")

        # 2. RAG Search
        context = self.rag.search(query_text)
        
        # 3. Generate Answer (Simulated logic combining context)
        full_prompt = f"Context: {context}\nQuestion: {query_text}"
        self.response_audio = self.inference.generate_speech(full_prompt)
        
        self.state = "SPEAKING"

    def _handle_speaking(self):
        """Output audio response."""
        logger.info("Speaking response...")
        self.audio.play(self.response_audio)
        self.state = "IDLE"

    def _shutdown(self):
        """Graceful shutdown procedure."""
        logger.info("Shutting down subsystems...")
        pass

if __name__ == "__main__":
    oracle = SolarOracle()
    oracle.run()
