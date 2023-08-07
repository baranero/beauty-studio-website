<?php

add_action('rest_api_init', function () {

  register_rest_route('beauty-website/v1', '/servives', array(
    'methods' => 'GET',
    'callback' => 'get_custom_services',
  ));
});

function get_custom_services() {

  $args = array(
    'post_type' => 'services',
    'post_status' => 'publish',
    'posts_per_page' => -1,
  );

  $services = get_posts($args);


  $data = array();
  foreach ($services as $service) {
    $data[] = array(
      'id' => $service->ID,
      'title' => $service->service_title,
      'description' => $service->service_description,
      'image' => $service->service_image

    );
  }

  return $data;
}
