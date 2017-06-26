<?php

/**
 * @file
 * Multipage Navigation Admin settings.
 */

/*
 * Admin form.
 */
function multipage_navigation_admin_settings() {
  $form = array();
  $form['multipage_navigation_pagination_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Pagination text'),
    '#description' => t('Current and total pages text. You can use the following placeholders: @current, @total'),
    '#default_value' => variable_get('multipage_navigation_pagination_text', 'Page @current of @total')
  );

  $form['multipage_navigation_exclude_pages'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Exclude nodes without Pagination Block Title'),
    '#description'   => t('To exclude pages from the pagination leave the Pagination Block Title blank. If no pages have a Pagination Block Title there will be no Pagination Block.'),
    '#default_value' => variable_get('multipage_navigation_exclude_pages', FALSE),
  );

  $node_types = node_type_get_names();
  $form['multipage_navigation_content_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Multipage Navigation content types'),
    '#description' => t('Multipage Navigation allows you to enable the navigation for any content type.'),
    '#options' => $node_types,
    '#default_value' => variable_get('multipage_navigation_content_types', array()),
  );

  return system_settings_form($form);
}
