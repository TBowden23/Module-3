var opts = {
  api: {
    total: 3,
    item_number: (localStorage.getItem('productId')+ '_' + localStorage.getItem('color')).toUpperCase()
  },
  display: {
    cols: 3,

    // Styles the cta: "border" (default), "underline", "plain"
    ctaThemeClass: "border",

    // Positions the cta relative to collage: "bottom" (default), "top"
    ctaPosition: "bottom",

    // Item info layout. Defaults to "rows"
    itemInfoLayout: "columns",

    //no carousel on mobile; show in a vertical stack
    mobileVertical: false
  }
};

  if (typeof(StyliticsWidget !== undefined)) {
      var styliticsWidget1 = new StyliticsWidget("dickssportinggoods", "pdp-stylitics-target", opts);

      var headerStyles = {
        fontFamily: '"Archivo", sans-serif',
        fontSize: '2rem',
        fontWeight: 700,
        letterSpacing: "0.5px",
        lineHeight: "2.4rem",
        color: "#191f1c",
        textAlign: "center"
      }

      var hrStyles = {
        height : "auto",
        borderTop : "2px solid #bb5811",
        width : "32px"
      }

      // In this example we'll use jQuery to init widget on document.ready and set up
      // triggers for refreshing the widget when the user selects a different color.
    $(function(){

      function toggleJumplink(outfits){
        $('#stylitics-header-container').remove();
        if (outfits.length > 2){
          // $('#item-content').append("<a href='#pdp-stylitics-target' class='jumplink'>TEST</a>");
          $('.pdp-stylitics-component').prepend('<div id="stylitics-header-container"><h2 class="stylitics-header description-header flex-grow-1">How to Wear It</h2><hr/></div>');
          $('.stylitics-header').css(headerStyles);
          $('hr').css(hrStyles);
        }
      }

      function onLoadCustom(outfits){
        toggleJumplink(outfits);
      }
      // render the widget to its target div
      styliticsWidget1.load(onLoadCustom);
      // set first color swatch
      var originalLocalStorageColor = localStorage.getItem('color');

      // swatch button clicked
      $('button.swatch-color').on('click', function() {
        // set the new swatch color
        var newSwatch = localStorage.getItem('color');
        // if the new swatch color doesn't equal the first swatch color
        if (newSwatch !== originalLocalStorageColor) {
          // update swatch color
          originalLocalStorageColor === newSwatch;
          var newItemNumber = (localStorage.getItem('productId')+ '_' +newSwatch).toUpperCase();
          // update item_number in opts config
          opts.api.item_number = newItemNumber;
        }
        // refresh the widget
        styliticsWidget1.refresh((localStorage.getItem('productId')+ '_' + localStorage.getItem('color')).toUpperCase(), onLoadCustom);

      }); // end swatch click
    }); // end main function
  }
