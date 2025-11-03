const express = require("express");
const app = express();

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
    res.json({ doctor_name: "damon" });
  } else {
    // Even number
    res.json({ doctor_name: "cathrin" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
