<?php
/**
 * @file
 * Default theme implementation to display a multipage navigation element.
 *
 * Available variables:
 * - $title: The title of the current page.
 * - $links: An array of links for the pager.
 * - $page_of_total: String displaying the current and total number of pages.
 * - $pagination: The raw pagination object.
 *
 * Helper variables:
 * - $zebra: Same output as $block_zebra but independent of any block region.
 * - $id: Counter dependent on each pager instance.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * @see template_preprocess()
 * @see template_preprocess_block()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>
<section class="pagination mn_background">
  <div class="<?php print $classes; ?>"<?php print $attributes; ?>>
    <h2<?php print $title_attributes; ?>><strong><?php print $page_of_total; ?></strong><?php print $title; ?></h2>
    <span class="arrow"></span>
    <nav class="mn_dropdown">
      <ul>
        <?php foreach($links as $page => $link): ?>
          <li class="link">
            <?php print $link; ?>
          </li>
        <?php endforeach ?>
      </ul>
    </nav>
  </div>
</section>
