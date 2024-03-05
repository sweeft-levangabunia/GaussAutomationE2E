export function LoginURL(config) {
    return config.domain + "/login"
}

export function Iframe(config) {
    return `//iframe[@title='/tv_reporting/frontend/index.html?global_tv_time_series_reach_by_channel=global_tv_reach_by_channel&global_tv_time_series_reach_by_media=global_tv_reach_by_media&global_tv_singular_data_source=global_tv_impacted&connected_tv_singular_total_cost=connected_tv_total_cost&connected_tv_singular_by_channel_data_source=connected_tv_by_channel_raw&connected_tv_total_data_source=connected_tv_total_raw&version=1.1.25&parent_base_url=${config.domain}']`
}