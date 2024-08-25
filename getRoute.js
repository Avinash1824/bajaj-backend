import express from "express";

const getRoute = express.Router();

getRoute.post("/bhfl", (req, res) => {
  const numbers = [];
  const alpha = [];
  let hla = [];

  // Ensure req.body.data exists and is an array
  const arr = Array.isArray(req.body.data) ? req.body.data : [];

  arr.forEach((element) => {
    if (!isNaN(parseInt(element))) {
      numbers.push(element);
    } else if (element.length === 1 && /^[a-zA-Z]$/.test(element)) {
      alpha.push(element);
    }
  });

  let highest = null;
  alpha.forEach((element) => {
    if (element >= "a" && element <= "z") {
      if (highest === null || element > highest) {
        highest = element;
      }
    }
  });

  if (highest) {
    hla.push(highest);
  }

  const data = {
    is_success: true,
    user_id: "Yarabothu-Avinash_18022004",
    email: "yarabothu.21bce9850@vitapstudent.ac.in",
    rollnumber: "21BCE9850",
    numbers: numbers,
    alphabets: alpha,
    highest_lowercase_alphabet: hla,
  };

  return res.json(data);
});

getRoute.get("/bhfl", (req, res) => {
  const data = {
    operation_code: 1,
  };
  return res.json(data);
});

export default getRoute;
