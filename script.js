function startPuzzle() {
        document.getElementById("startButton").style.display = "none";
        createPuzzle();
    }

    function createPuzzle() {
        const puzzleContainer = document.getElementById("puzzleContainer");
        const completeMessage = document.getElementById("completeMessage");

        // Assuming 3x3 grid, you can customize based on your preference
        const gridSize = 3;
        const pieceSize = 100;

        puzzleContainer.style.display = "block";

        for (let i = 0; i < gridSize * gridSize; i++) {
            const puzzlePiece = document.createElement("div");
            puzzlePiece.className = "puzzlePiece";
            puzzlePiece.style.backgroundImage = `url(${imageUrl})`;
            puzzlePiece.style.backgroundSize = `${gridSize * pieceSize}px ${gridSize * pieceSize}px`;
            puzzlePiece.style.backgroundPosition = `-${(i % gridSize) * pieceSize}px -${Math.floor(i / gridSize) * pieceSize}px`;

            puzzlePiece.onclick = () => handlePieceClick(puzzlePiece);

            puzzleContainer.appendChild(puzzlePiece);
        }

        function handlePieceClick(piece) {
            piece.style.visibility = "hidden";
            checkPuzzleComplete();
        }

        function checkPuzzleComplete() {
            const puzzlePieces = document.querySelectorAll(".puzzlePiece");
            const visiblePieces = [...puzzlePieces].filter(piece => piece.style.visibility !== "hidden");

            if (visiblePieces.length === 0) {
                completeMessage.style.display = "block";
            }
        }
    }
</script>

</body>
</html>
