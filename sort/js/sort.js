(function () {
    var classes = {
        'container' : '.algo_study_container',
        'sortArea' : '.sort_area'
    }
    var $container = document.querySelector(classes.container);
    var $sortArea = $container.querySelector(classes.sortArea);
    var $selectionDesc = $sortArea.querySelector('.area_desc');
    var $selectionScriptArea = $sortArea.querySelector('.script_area');
    var array01 = [22,100,99,24,62];
    $selectionDesc.innerHTML = '<div> Original ::: '+array01+'</div>';
    console.log('BEFORE ::: ', array01);
    var selectionArray = sort_selection(array01, 'min')
    console.log('AFTER  ::: ', selectionArray);
    $selectionScriptArea.innerHTML = '<div> Sorting ::: '+selectionArray+'</div>';
    function sort_selection( list, sortType ) {
        // sortType : min or max
        var temp;
        for( var i = 0; i < list.length - 1; i++ ){
            var val = i;
            for( var j = i+1; j < list.length; j++ ){
                var condition = sortType === 'min' ? list[val] > list[j] : list[val] < list[j];
                if ( condition ) {
                    val = j;
                }
            }
            temp = list[i];
            list[i] = list[val];
            list[val] = temp;
        }
        return list;
    }
})()