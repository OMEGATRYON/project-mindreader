const homeButton = document.getElementById("start_button")
homeButton.addEventListener("click", function(event){
    this.remove();
    document.querySelector('div').classList.remove('hidden1')
});
//once this button below is click it should also REadd the CSS propert to the DIV <div class="hidden_one">
const page1Button = document.getElementByClass("button_one")
homeButton.addEventListener("click", function(event){
    this.remove();
    document.querySelector('div').classList.remove('hidden2')
});
//TEST TO SEE IF CSS PROPERTIES WILL PLACE THESE IN SAME SPOT, IF NOT FORCE THEM