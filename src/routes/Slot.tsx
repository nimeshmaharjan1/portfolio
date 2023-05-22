import { audioFile } from '../utils/index';
import { useEffect, useRef, useState } from 'react';
import winImage from '../assets/nft/win.webp';
import loseImage from '../assets/nft/lose.jpg';
interface ICard {
  cardImage: HTMLImageElement;
  isWinImage: boolean;
}

const Slot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [cardImages, setCardImages] = useState<ICard[]>([]);
  const [probability, setProbability] = useState(0.05); // Initially set to true for win image
  const audioSound = audioFile;

  const [previousProbability, setPreviousProbability] = useState(probability);
  const [hasWon, setHasWon] = useState(false);
  // const hoverAudio = new Audio(audio);
  const hoverAudioRef = useRef<HTMLAudioElement>(null);
  const [passingCards, setPassingCards] = useState<number[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    const cardWidth = 200;
    const cardHeight = 220;
    const numCards = 200;
    const gap = 20;
    const borderWidth = 2;
    const borderColor = 'gray';
    const highlightedBorderColor = 'yellow'; // New yellow border color

    let startTime = Date.now();
    let scrollOffset = 0;
    let scrollSpeed = 20;

    const loadCardImages = async (probability: number): Promise<ICard[]> => {
      const cardPromises = Array.from({ length: numCards }, async (_, index) => {
        const cardImage = new Image();
        const isWinImage = Math.random() < probability;
        const cardSrc = isWinImage ? winImage : loseImage;
        cardImage.src = cardSrc;
        await cardImage.decode();

        return {
          isWinImage,
          cardImage,
        };
      });

      try {
        const loadedImages = await Promise.all(cardPromises);
        return loadedImages;
      } catch (error) {
        console.error('Error loading card images:', error);
        return [];
      }
    };
    const drawCard = (x: number, y: number, cardImage: HTMLImageElement, showYellowBorder: boolean = false): void => {
      const borderRadius = 12;

      context.save(); // Save the current context state

      // Set the clipping area to the rounded rectangle
      context.beginPath();
      context.moveTo(x + borderRadius, y);
      context.lineTo(x + cardWidth - borderRadius, y);
      context.arcTo(x + cardWidth, y, x + cardWidth, y + borderRadius, borderRadius);
      context.lineTo(x + cardWidth, y + cardHeight - borderRadius);
      context.arcTo(x + cardWidth, y + cardHeight, x + cardWidth - borderRadius, y + cardHeight, borderRadius);
      context.lineTo(x + borderRadius, y + cardHeight);
      context.arcTo(x, y + cardHeight, x, y + cardHeight - borderRadius, borderRadius);
      context.lineTo(x, y + borderRadius);
      context.arcTo(x, y, x + borderRadius, y, borderRadius);
      context.closePath();
      context.clip(); // Clip the drawing area to the rounded rectangle

      // Draw the card image within the clipping area
      context.drawImage(cardImage, x, y, cardWidth, cardHeight);

      // Restore the previous context state
      context.restore();
      context.lineWidth = showYellowBorder ? 5 : borderWidth;
      context.strokeStyle = showYellowBorder ? highlightedBorderColor : borderColor;

      // Draw the rounded rectangle border
      context.stroke();
    };

    const drawIndicators = (): void => {
      const x = (canvas.width - cardWidth) / 2;
      const yTop = (canvas.height - cardHeight) / 2 - 20;
      const yBottom = (canvas.height + cardHeight) / 2 + 20;

      // Draw top indicator
      context.beginPath();
      context.moveTo(x + cardWidth / 2, yTop);
      context.lineTo(x + cardWidth / 2 - 20, yTop - 20);
      context.lineTo(x + cardWidth / 2 + 20, yTop - 20);
      context.closePath();
      context.fillStyle = 'white';
      context.fill();

      // Draw bottom indicator
      context.beginPath();
      context.moveTo(x + cardWidth / 2, yBottom);
      context.lineTo(x + cardWidth / 2 - 20, yBottom + 20);
      context.lineTo(x + cardWidth / 2 + 20, yBottom + 20);
      context.closePath();
      context.fillStyle = 'white';
      context.fill();
    };

    const stopSpin = () => {
      setIsSpinning(false);
      scrollSpeed = 0;
    };

    const animate = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const canvasWidth = canvas.width;

      const centerRegionStart = (canvasWidth - cardWidth) / 2 - (cardWidth + gap);
      const centerRegionEnd = centerRegionStart + cardWidth;

      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < 2000) {
        scrollSpeed += 0.2;
      } else if (elapsedTime < 1000) {
        scrollSpeed += 0.1;
      } else {
        if (scrollSpeed > 0) {
          scrollSpeed -= 0.1;
        } else if (scrollSpeed < 0.2) {
          stopSpin();
        }
      }
      scrollOffset += scrollSpeed;

      for (let i = 0; i < numCards; i++) {
        const x = i * (cardWidth + gap) - scrollOffset;
        const y = (canvas.height - cardHeight) / 2;
        const { cardImage, isWinImage } = cardImages[i];

        drawCard(x, y, cardImage, x >= centerRegionStart && x <= centerRegionEnd);

        if (x + cardWidth < 0 && x + cardWidth + scrollSpeed >= 0) {
          if (!hoverAudioRef.current) return;
          hoverAudioRef.current.currentTime = 0; // Reset the audio to the beginning
          hoverAudioRef.current.play();
        }
        if (hasWon) {
          if (probability < 0.5) {
            if (elapsedTime > 4000 && scrollSpeed < 100 && cardImage && x >= centerRegionStart && x <= centerRegionEnd && isWinImage) {
              stopSpin();
            }
          } else {
            if (elapsedTime > 7000 && scrollSpeed < 20 && cardImage && x >= centerRegionStart && x <= centerRegionEnd && isWinImage) {
              stopSpin();
            }
          }
        } else {
          if (probability > 0.5) {
            if (elapsedTime > 4000 && scrollSpeed < 100 && cardImage && x >= centerRegionStart && x <= centerRegionEnd && !isWinImage) {
              stopSpin();
            }
          } else {
            if (elapsedTime > 5000 && scrollSpeed < 20 && cardImage && x >= centerRegionStart && x <= centerRegionEnd && !isWinImage) {
              stopSpin();
            }
          }
        }
      }

      drawIndicators();
      requestAnimationFrame(animate);
    };

    drawIndicators();

    if (isSpinning) {
      animate();
    } else {
      if (cardImages.length === 0) {
        loadCardImages(probability).then((loadedImages) => {
          setCardImages(loadedImages);
        });
      } else {
        if (previousProbability !== probability) {
          loadCardImages(probability).then((loadedImages) => {
            setCardImages(loadedImages);
            setPreviousProbability(probability);
          });
        } else {
          for (let i = 0; i < numCards; i++) {
            const x = i * (cardWidth + gap) - scrollOffset;
            const y = (canvas.height - cardHeight) / 2;
            const { cardImage, isWinImage } = cardImages[i];
            drawCard(x, y, cardImage);
          }
        }
      }
    }
  }, [isSpinning, cardImages, probability, previousProbability, hasWon]);

  const handleSpinClick = () => {
    setIsSpinning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="my-4 mb-2 text-2xl font-bold">{hasWon ? 'Will Win' : 'Will Lose'}</div>
      <div className="relative">
        <canvas ref={canvasRef} width={1200} height={420} />
      </div>
      <div className="mb-8 select-probability-section gap-4 flex items-center mt-4">
        Probability
        <select value={probability} className="w-52" onChange={(e) => setProbability(Number(e.target.value))}>
          <option value="0">0%</option>
          <option value="0.05">5%</option>
          <option value="0.15">15%</option>
          <option value="0.25">25%</option>
          <option value="0.5">50%</option>
          <option value="0.9">90%</option>
        </select>
      </div>
      <div className="actions flex gap-4 items-center">
        <button className="btn btn-primary mt-4" onClick={handleSpinClick}>
          Spin
        </button>

        <button className="btn btn-secondary mt-4" onClick={() => setHasWon(!hasWon)}>
          Toggle Win
        </button>
      </div>
      <audio ref={hoverAudioRef} src={audioSound} />
    </div>
  );
};

export default Slot;
