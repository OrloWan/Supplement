var listItem = document.querySelectorAll('.supplement-list__item');
var suppIngredient = document.querySelectorAll('.supplement-ingredient');

for(i = 0; i < listItem.length; i++){
	listItem[i].onclick = function(){

		for(j = 0; j < listItem.length; j++){
			listItem[j].classList.remove('active')
		}

		this.classList.add('active')
		var listItemAttr = this.getAttribute('data-target')

		for(j = 0; j < suppIngredient.length; j++){

			suppIngredient[j].classList.remove('active')

			if (suppIngredient[j].getAttribute('data-target') == listItemAttr){
				suppIngredient[j].classList.add('active')
			}
			
		}
	}
}


