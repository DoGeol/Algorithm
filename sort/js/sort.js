(function () {
    var classes = {
        'container' : '.algo_study_container',
        'sortArea' : '.sort_area',
        'sortType' : {
            'selection' : '.sort_selection',
            'bubble' : '.sort_bubble'
        }
    }
    var $container = document.querySelector(classes.container);
    var $selectionArea = $container.querySelector(classes.sortArea+classes.sortType.selection);
    var $selectionDesc = $selectionArea.querySelector('.area_desc');
    var $selectionScriptArea = $selectionArea.querySelector('.script_area');
    var array01 = [22,100,99,24,62];
    $selectionDesc.innerHTML = '<div> Original ::: '+array01+'</div>';
    var selectionArray = sort_selection(array01, 'min')
    $selectionScriptArea.innerHTML = '<div> Sorting ::: '+selectionArray+'</div>';

    var $bubbleArea = $container.querySelector(classes.sortArea+classes.sortType.bubble);
    var $bubbleDesc = $bubbleArea.querySelector('.area_desc');
    var $bubbleScriptArea = $bubbleArea.querySelector('.script_area');
    var array02 = [22,100,99,24,62];
    $bubbleDesc.innerHTML = '<div> Original ::: '+array02+'</div>';
    var bubbleArray = sort_bubble(array02, 'min');
    $bubbleScriptArea.innerHTML = '<div> Sorting ::: '+bubbleArray+'</div>';

    function sort_selection( list, sortType ) {
        // sortType : min or max
        var temp;
        for( var i = 0; i < list.length - 1; i++ ){
            var minValue = i;
            for( var j = i+1; j < list.length; j++ ){
                var condition = sortType === 'min' ? list[minValue] > list[j] : list[minValue] < list[j];
                if ( condition ) {
                    minValue = j;
                }
            }
            temp = list[i];
            list[i] = list[minValue];
            list[minValue] = temp;
        }
        return list;
    }
    function sort_bubble( list ) {
        var temp;
        var frstCount = 0;
        for ( var i = list.length; i > 0; i-- ) {
            console.log( ++frstCount, '회차 실행');
            var scndCount = 0;
            for( var j = 0; j < i; j++ ) {
                if(list[j] > list[j+1]){
                    console.log( ++scndCount, '번 ::: list[j] ::: ', list[j], ' <-> list[j+1] :::', list[j+1] );
                    temp = list[j];
                    list[j] = list[j+1];
                    list[j+1] = temp;
                }
                console.log('list ::: ', list)
            }
        }
        return list;
    }
})()