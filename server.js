const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, "  ", req.url);
  next();
});

app.post("/get_available_doctor", (req, res) => {
  /**
   * Get available doctor based on current time.
   * Returns 'damon' if Date.now() is odd, otherwise returns 'cathrin'.
   */
  const currentTime = Date.now();

  if (currentTime % 2 === 1) {
    // Odd number
    res.json({
      results: [
        {
          toolCallId: "ae384ae8-dff2-4a34-aa9e-a8a404fa2b22",
          result: "Dr. Damon is available",
        },
      ],
    });
  } else {
    // Even number
    res.json({
      results: [
        {
          toolCallId: "ae384ae8-dff2-4a34-aa9e-a8a404fa2b22",
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
