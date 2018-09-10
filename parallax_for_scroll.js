// у родительского элемента должно быть относительное позиционирования,
// а у дочерних элементов - абсолютное.
// глубина расположения элемента задается свойством data-depth от 1 до 9
;(function(){
    if (!HTMLElement.prototype.__proto__.parralax) {

        // функция принимает список элементов, которые будут двигаться
        HTMLElement.prototype.__proto__.parallax = function parallax(elems) {
            const self = this;
            let containerRect = self.getBoundingClientRect();

            for (let i=0; i<elems.length; i++){
                elemStyle = getComputedStyle(elems[i]);
                elems[i].setAttribute('data-start-top', `${elemStyle.top.slice(0,-2)}`);
            };

            window.onscroll = function() {
                for (let i=0; i<elems.length; i++){
                    containerRect = self.getBoundingClientRect();

                    if (elems[i].hasAttribute('data-depth')){
                        elems[i].style.top = `${elems[i].dataset.startTop - window.pageYOffset / (elems[i].dataset.depth/10+1)  }px`;
                    } else {
                        elemStyle = getComputedStyle(elems[i]);
                        elems[i].style.top = `${elems[i].dataset.startTop - window.pageYOffset }px`;
                    }
                }
        
            }
    
        };
    }
})();