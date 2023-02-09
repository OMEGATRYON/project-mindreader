let state = {
    symbols: ['!', '@', '#', '$'. '%', '^', '&', '*', '('],
    currentPage: 1,
    pages = [
        {
          headerText: "I can read your mind",
          paragraphText: "",
          nextButtonText: ""
        },
        {
          headerText: "Pick a number between 01-99",
          paragraphText: "When you have your number, click next",
          nextButtonText: "NEXT"
        },
        {
            headerText: "Add both digits together to get a new number",
            paragraphText: "Ex: 14 is 1 + 4 = 5" + " click next to proceed",
            nextButtonText: "NEXT"
        },
        {
            headerText: "Subtract your new number from your original number",
            paragraphText: "Ex: 14 - 5 = 9" + " click next to proceed",
            nextButtonText: "NEXT"
        },
        {
            headerText: "0-!, 1-@, 2-#, 3-$",
            paragraphText: "Find your new number. Note the symbol thats by the number.",
            nextButtonText: "REVEAL"
        },
        {
            headerText: create99Symbols(),
            paragraphText: "",
            nextButtonText: ""
        },
    ]
}

