// sort string
function sortString(arr) {
    // zadeklarowac zmienna przechowujaca tymczasowa tablice z przefiltrowanymi stringami
    // zamiana znaków specjalnych na puste (regexp)
    // odfiltrowana tablice posortowac po dlugosci (length)

    // sort string
    function sortString(arr) {
        var tempArr = [];
        for(var i=0; i<arr.length; i++) {
            tempArr.push(arr[i].replace(/\W/g, ''));
        }

        return tempArr.sort(function(x,y){
            return x.length-y.length;
        })
    }


    console.log(sortString(['aa$566a','bb','ccccccc','d'])) // posortować; bonus usunąc wszystkie znaki oprócz liter
}


sortString(['fdsaas','fd&898433ss','fdsdfff','fdsssdf']); // posortować; bonus usunąc wszystkie znaki oprócz liter