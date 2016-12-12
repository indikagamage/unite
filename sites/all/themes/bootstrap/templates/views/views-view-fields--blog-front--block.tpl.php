<?php
 /**
  * This template is used to print a single field in a view. It is not
  * actually used in default Views, as this is registered as a theme
  * function which has better performance. For single overrides, the
  * template is perfectly okay.
  *
  * Variables available:
  * - $view: The view object
  * - $field: The field handler object that can process the input
  * - $row: The raw SQL result that can be used
  * - $output: The processed output that will normally be used.
  *
  * When fetching output from the $row, this construct should be used:
  * $data = $row->{$field->field_alias}
  *
  * The above will guarantee that you'll always get the correct data,
  * regardless of any changes in the aliasing that might happen if
  * the view is modified.
  */
?>
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="img-responsive" src="<?php print image_style_url('blog_350x200', $row->_field_data['nid']['entity']->field_blog_image['und'][0]['uri']);?>" alt="">
        <div class="overlay">
           <h2><?php print $fields['title']->content; ?></h2>
           <a class="info" href="<?php print $fields['path']->content; ?>"><?php print $fields['body']->content; ?></a>
        </div>
    </div>
</div>
