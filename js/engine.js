$(function(){
 

//As click outside of Select Box close activeSelect Box
var close_selectBox = (function() {

    var activeJs_container = "";
    var activeJs_containerArrow = "";
    $(document).mouseup(function (e){
      
      //Find the active Select Box
      $('.js_container').click(function(){
            activeJs_container = $(this);
            activeJs_containerArrow = $(this).find('.js_arrow');
      });

      var container = activeJs_container;

      if(!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container, if the target of the click isn't the container...
      {
        container.removeClass('activeSelect calendarActive'); 
        activeJs_containerArrow.removeClass('activeArrow').addClass('deActiveArrow');
             
      }
  });

})();//Close close_selectBox


var simple_select = (function() {
  
  var $selectSimple = $('.select_simple');
  var $selectSimpleHeader = $('.select_simple_header');
  var $selectSimpleArrow = $('.select_simple_header span');
  var $selectSimpleOption = $('.optionBox_simple input:checkbox');
  var $activeSelectSimple = "";
  var $activeSelectSimpleHeader ="";
  var $activeSelectSimpleArrow = "";
  var $activeSelectSimpleHeaderTxt = "";

  //Default Settings
  $selectSimpleArrow.addClass('deActiveArrow'); //Dropdown Arrow Position

  //Dropdown Option Box & Rotate DropDown Arrow
  var dropDown = function(x,y){
    
    x.toggleClass('activeSelect');
    y.toggleClass('deActiveArrow activeArrow');

  };

  /*On click select_simple_header
  * Assign active Select Box
  * Assign Active Select Dropdown Arrow
  * Apply dropDown behaviours to Active Select Box
  */
  $selectSimpleHeader.click(function(){
    
    $activeSelectSimpleHeaderTxt = $(this).find('p').html(); //Get Default Select Header Txt so that you can set default name as an option is unchecked
    $activeSelectSimpleHeader = $(this).find('p');// Find the active Select Box Header to assign selected option
    $activeSelectSimple = $(this).parent($selectSimple); // Find the active Select Box 
    $activeSelectSimpleArrow = $activeSelectSimple.find('span'); // Find the active Select Box Arrow
    
    //Assign dropDown Behaviours
    dropDown($activeSelectSimple, $activeSelectSimpleArrow);

  });
  /* On select an option   */
  $selectSimpleOption.click(function(){
 
      var $selectedOptionTxt = $(this).val();
      $activeSelectSimpleHeader.html($selectedOptionTxt);

      //Assign dropDown Behaviours
    dropDown($activeSelectSimple, $activeSelectSimpleArrow);
 
  });
 
})();//Close simple_select


//Multi Select Box Behaviours

var multi_select = (function() {

  var $selectMulti = $('.select_multi');
  var $selectMultiHeader = $('.select_multi_header');
  var $selectMultiHeaderTxt = $('.select_multi_header p');
  var $selectMultiArrow = $('.select_multi_header span');
  var $selectMultiCheckbox = $('.optionBox_multi input:checkbox');
  var $totalCheckbox = 0;

  //Default Settings
  $selectMultiArrow.addClass('deActiveArrow'); //Dropdown Arrow Position

  //Dropdown Option Box & Rotate DropDown Arrow
  var dropDown = function(x,y){
    
    x.toggleClass('activeSelect');
    y.toggleClass('deActiveArrow activeArrow');
  };

  //On click select_multi_header
  $selectMultiHeader.click(function(){

  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);

  }); 

  //Check & Uncheck All
    $('#checkAll').click(function(){
      $selectMultiCheckbox.prop('checked', true); 
      $totalCheckbox = $(".optionBox_multi input:checkbox:checked").length;
      $selectMultiHeaderTxt.html($totalCheckbox + ' selected');


  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);
  
    });
    $('#unCheckAll').click(function(){
      $selectMultiCheckbox.prop('checked', false);  
      $selectMultiHeaderTxt.html('Select one or more options');    

  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);
    });

  //Select an multi select option
    $selectMultiCheckbox.change(function(){

      $totalCheckbox = $(".optionBox_multi input:checkbox:checked").length;
      $selectMultiHeaderTxt.html($totalCheckbox + ' selected');
      if($totalCheckbox === 0){ //If checked option number returns to 0, return header txt to Default 
        $selectMultiHeaderTxt.html('Select one or more options'); 
      } 

    });
 
})();//Close multi_select








  
});// Close jQ