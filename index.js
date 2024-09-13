
let bagItems;
onLoad();

function onLoad(){
   let bagItemsStr = localStorage.getItem('bagItems');
   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [] ;
    displayItemsAtHomePage();
    displayBagIcon();
   
}

function displayBagIcon(){
    let bagCount = document.querySelector('.bag-items');

    if(bagItems.length > 0)
    {
        bagCount.style.visibility = 'visible';
        bagCount.innerText = bagItems.length;
    }
    else{
        bagCount.style.visibility = 'hidden';
    }

}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems));
    displayBagIcon();
}


function displayItemsAtHomePage(){
    let itemContainerElement = document.querySelector('.items-container');

if(!itemContainerElement) return;

let innerHtml = '';
items.forEach(item => {
    
    innerHtml +=  `
    <div class="item-container">
                <img class="item-image" src="${item.image}" alt="">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}% OFF</span>
                </div>
                <div class="btn-add-bag" onclick="addToBag(${item.id})" >Add To Bag</div>
    </div>
        `;
});
itemContainerElement.innerHTML = innerHtml;
}
