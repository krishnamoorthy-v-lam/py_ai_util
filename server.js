const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, "  ", req.url);
  next();
});

app.post("/get_available_doctor", (req, res) => {
  /**
   * Get available doctor based on current time.
   * Returns 'damon' if Date.now() is odd, otherwise returns 'cathrin'.
   */
  const { toolCallId } = req.body || {};
  console.log("tool: ", toolCallId)
  const currentTime = Date.now();

  if (currentTime % 2 === 1) {
    // Odd number
    res.status(200).json({
      results: [
        {
          toolCallId,
          result: "Dr. Damon is available",
        },
      ],
    });
  } else {
    // Even number
    res.status(200).json({
      results: [
        {
          toolCallId,
          result: "Dr. Cathrin is available",
        },
      ],
    });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
