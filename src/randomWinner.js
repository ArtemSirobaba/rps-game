export default function randomWinner(userInput) {
  const values = ["rock", "paper", "scissors"];
  const compInput = values[Math.floor(Math.random() * values.length)];
  if (userInput === compInput)
    return { whoWin: "Draw!", compChoice: compInput, userChoice: userInput };
  if (userInput === "rock" && compInput === "paper")
    return {
      whoWin: "Computer Win!",
      compChoice: compInput,
      userChoice: userInput,
    };
  if (userInput === "rock" && compInput === "scissors")
    return { whoWin: "You win!", compChoice: compInput, userChoice: userInput };
  if (userInput === "paper" && compInput === "scissors")
    return {
      whoWin: "Computer Win!",
      compChoice: compInput,
      userChoice: userInput,
    };
  if (userInput === "paper" && compInput === "rock")
    return { whoWin: "You win!", compChoice: compInput, userChoice: userInput };
  if (userInput === "scissors" && compInput === "rock")
    return {
      whoWin: "Computer Win!",
      compChoice: compInput,
      userChoice: userInput,
    };
  if (userInput === "rock" && compInput === "paper")
    return {
      whoWin: "Computer Win!",
      compChoice: compInput,
      userChoice: userInput,
    };
  if (userInput === "scissors" && compInput === "paper")
    return { whoWin: "You win!", compChoice: compInput, userChoice: userInput };
}
