(function ($) {
  Drupal.behaviors.vbo = {
    attach: function(context) {
      $('.vbo-views-form', context).each(function() {
        Drupal.vbo.initTableBehaviors(this);
        Drupal.vbo.initGenericBehaviors(this);
      });
    }
  }

  Drupal.vbo = Drupal.vbo || {};
  Drupal.vbo.initTableBehaviors = function(form) {
    // If the table is not grouped, "Select all on this page / all pages"
    // markup gets inserted below the table header.
    var selectAllMarkup = $('.vbo-table-select-all-markup', form);
    if (selectAllMarkup.length) {
      $('.views-table > tbody', form).prepend('<tr class="views-table-row-select-all even">></tr>');
      var colspan = $('table th', form).length;
      $('.views-table-row-select-all', form).html('<td colspan="' + colspan + '">' + selectAllMarkup.html() + '</td>');

      $('.vbo-table-select-all-pages', form).click(function() {
        Drupal.vbo.tableSelectAllPages(form);
        return false;
      });
      $('.vbo-table-select-this-page', form).click(function() {
        Drupal.vbo.tableSelectThisPage(form);
        return false;
      });
    }

    $('.vbo-table-select-all', form).show();
    // This is the "select all" checkbox in (each) table header.
    $('.vbo-table-select-all', form).click(function() {
      var table = $(this).closest('table')[0];
      $('input[id^="edit-views-bulk-operations"]:not(:disabled)', table).attr('checked', this.checked);

      // Toggle the visibility of the "select all" row (if any).
      if (this.checked) {
        $('.views-table-row-select-all', table).show();
      }
      else {
        $('.views-table-row-select-all', table).hide();
        // Disable "select all across pages".
        Drupal.vbo.tableSelectThisPage(form);
      }
    });

    // Set up the ability to click anywhere on the row to select it.
    if (Drupal.settings.vbo.row_clickable) {
      $('.views-table tbody tr', form).click(function(event) {
        if (event.target.tagName.toLowerCase() != 'input' && event.target.tagName.toLowerCase() != 'a') {
          $('input[id^="edit-views-bulk-operations"]:not(:disabled)', this).each(function() {
            var checked = this.checked;
            // trigger() toggles the checkmark *after* the event is set,
            // whereas manually clicking the checkbox toggles it *beforehand*.
            // that's why we manually set the checkmark first, then trigger the
            // event (so that listeners get notified), then re-set the checkmark
            // which the trigger will have toggled. yuck!
            this.checked = !checked;
            $(this).trigger('click');
            this.checked = !checked;
          });
        }
      });
    }
  }

  Drupal.vbo.tableSelectAllPages = function(form) {
    $('.vbo-table-this-page', form).hide();
    $('.vbo-table-all-pages', form).show();
    // Modify the value of the hidden form field.
    $('.select-all-rows', form).val('1');
  }
  Drupal.vbo.tableSelectThisPage = function(form) {
    $('.vbo-table-all-pages', form).hide();
    $('.vbo-table-this-page', form).show();
    // Modify the value of the hidden form field.
    $('.select-all-rows', form).val('0');
  }

  Drupal.vbo.initGenericBehaviors = function(form) {
    // Show the "select all" fieldset.
    $('.vbo-select-all-markup', form).show();

    $('.vbo-select-this-page', form).click(function() {
      $('input[id^="edit-views-bulk-operations"]', form).attr('checked', this.checked);
      $('.vbo-select-all-pages', form).attr('checked', false);

      // Toggle the "select all" checkbox in grouped tables (if any).
      $('.vbo-table-select-all', form).attr('checked', this.checked);
    });
    $('.vbo-select-all-pages', form).click(function() {
      $('input[id^="edit-views-bulk-operations"]', form).attr('checked', this.checked);
      $('.vbo-select-this-page', form).attr('checked', false);

      // Toggle the "select all" checkbox in grouped tables (if any).
      $('.vbo-table-select-all', form).attr('checked', this.checked);

      // Modify the value of the hidden form field.
      $('.select-all-rows', form).val(this.checked);
    });

    $('.vbo-select', form).click(function() {
      // If a checkbox was deselected, uncheck any "select all" checkboxes.
      if (!this.checked) {
        $('.vbo-select-this-page', form).attr('checked', false);
        $('.vbo-select-all-pages', form).attr('checked', false);
        // Modify the value of the hidden form field.
        $('.select-all-rows', form).val('0')

        var table = $(this).closest('table')[0];
        if (table) {
          // Uncheck the "select all" checkbox in the table header.
          $('.vbo-table-select-all', table).attr('checked', false);

          // If there's a "select all" row, hide it.
          if ($('.vbo-table-select-this-page', table).length) {
            $('.views-table-row-select-all', table).hide();
            // Disable "select all across pages".
            Drupal.vbo.tableSelectThisPage(form);
          }
        }
      }
    });
  }

})(jQuery);
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.crm_core_report = {
    attach: function (context) {
        // show tooltips on flot charts
        // check for anything flot
        var charts = $('.flot');
        if(charts.length > 0){
          
          var previousPoint = null, pageX, pageY, followMouse, flotTooltipWidth, flotTooltipHeight, tooltip;
          
          // track the mouse so we always know where to put the tooltip
          $(document).bind('mousemove',function(event){
            pageX = event.pageX;
            pageY = event.pageY;
            if(tooltip && followMouse == true){
              tooltip.css('left',pageX-flotTooltipWidth/2);
              tooltip.css('top',pageY-flotTooltipHeight-30);
            }
          }); 
          
          
          // plothover for the tooltip
          $(".flot").bind("plothover", function(event, pos, item){
            
            // make sure we are over a point
            if (item) {
              
              // make sure tooltips are turned on for the chart
              // if not, this returns nothing
              if(!item.series.show_tooltip){
                return true;
              }

              // give us a cursor when hovering over a point
              document.body.style.cursor = 'pointer';
              
              // remove any existing tooltips
              if(item.dataIndex > 0 && item.dataIndex !== previousPoint){
                // remove any existing tooltips
                $("#flot-tooltip").remove();
              }
              
              if (previousPoint != item.dataIndex) {
                
                var usex, usey, label = '', prefix = '', suffix = '', content = 0;
                
                if(item.pageX){
                  usex = item.pageX;
                  usey = item.pageY-10;
                  followMouse = false;
                } else {
                  usex = pageX;
                  usey = pageY;
                  followMouse = true;
                }
                
                // set the current item to the tooltip
                if(item.dataIndex > 0 && item.dataIndex !== previousPoint){
                  previousPoint = item.dataIndex;
                }                
                
                // remove any existing tooltips
                $("#flot-tooltip").remove();
                
                // set the content
                if(item.series.useLabel == 1){
                  label = '<div class="report-tooltip-label">' + item.series.label + '</div>';
                }
                if(item.series.prefix){
                  prefix = item.series.prefix;
                }
                if(item.series.suffix){
                  suffix = item.series.suffix;
                }
                if(item.series.data[item.dataIndex]){
                  content = label + '<div class="report-tooltip-data">' + prefix + item.series.data[item.dataIndex][1] + suffix + '</div>';
                }
                
                // show the tooltip
                if(content !== ''){
                  showTooltip(usex, usey, content);
                }
                
              }
              
            } else {
              document.body.style.cursor = 'default';
              $("#flot-tooltip").remove();
              previousPoint = null;
            }
          });
        }
        
        // display a tooltip
        function showTooltip(x, y, contents) {
          $('<div id="flot-tooltip">' + contents + '</div>').css( {
              top: y,
              left: x,
          }).appendTo("body").fadeIn(5000);
          tooltip = $('#flot-tooltip');
          flotTooltipHeight = tooltip.height();
          flotTooltipWidth = tooltip.width();
          tooltip.css('top', y - flotTooltipHeight-30);
          tooltip.css('left', x - flotTooltipWidth/2);
        }

    },
};
})(jQuery, Drupal, this, this.document);;
