export type SideNavItem = {
  title: string;
  href: string;
  icon?: string;
  subMenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type MenuItemWithSubmenuProps = {
  item: SideNavItem;
  toggleOpen?: () => void;
  subMenuItems: SideNavItem[];
};
