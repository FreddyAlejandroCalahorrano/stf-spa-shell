import {Rol} from "../auth/enums/rol.enum";

export interface SidebarItem {
  code: string,
  type: 'item' | 'collapse' | 'group',
  classes?: string,
  title: string,
  url: string,
  icon?: string,
  isActive: boolean,
  hidden?: boolean,
  breadcrumbs?: boolean,
  role?: Rol[]
  children?: SidebarItem[]
}
