export function isNavActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function getActiveNavItem(pathname, navItems) {
  return navItems.find((item) => isNavActive(pathname, item.href));
}
