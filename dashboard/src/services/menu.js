function getMenus () {
  return [
        { 'header': 'Admin' },
        { 'href': '/home', 'title': 'Home', 'icon': 'home', 'id': 'cvpm-tour-home', 'openType': 'nav' },
        { 'href': '/package', 'title': 'Packages', 'icon': 'grain', 'id': 'cvpm-tour-packages', 'openType': 'nav' },
        // { 'href': '/pretrained', 'title': 'Pre-trained', 'icon': 'storage' },
        { 'header': 'System' },
        { 'href': '/log', 'title': 'Log', 'icon': 'fas fa-terminal', 'id': 'cvpm-tour-logs', 'openType': 'nav' },
        { 'href': '/settings', 'title': 'Settings', 'icon': 'settings', 'id': 'cvpm-tour-settings', 'openType': 'nav' },
        { 'href': '/login', 'icon': 'lock', 'title': 'Logout' },
        { 'header': 'About' },
        { 'href': 'https://hub.autoai.org', 'title': 'Hub', 'icon': 'device_hub', 'id': 'cvpm-tour-logs', 'openType': '_blank' },
        { 'href': 'https://github.com/unarxiv/cvpm', 'title': 'GitHub', 'icon': 'fab fa-github', 'id': 'cvpm-tour-settings', 'openType': '_blank' },
        { 'href': 'https://autoai.writeas.com', 'icon': 'rss_feed', 'title': 'Blog', 'openType': '_blank' }

  ]
}

export {
    getMenus
}
