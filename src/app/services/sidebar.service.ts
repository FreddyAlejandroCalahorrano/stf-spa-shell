import {Injectable} from '@angular/core';
import {Rol} from '../auth/enums/rol.enum';
import {SidebarItem} from "../types/sidebar.interface";
import {LoginService} from "../auth/services/login.service";

const ITEMS: SidebarItem[] = [
  {
    code: "p",
    type: 'item',
    title: 'Personas',
    url: "/admin/personas",
    icon: "person_outline",
    isActive: false,
    role: [Rol.Admin],
    children: [
      {
        code: "pc",
        type: 'item',
        title: 'Crear',
        url: "/admin/personas/crear",
        hidden: true,
        isActive: false,
      },
      {
        code: "pe",
        type: 'item',
        title: 'Editar',
        url: "/admin/personas/editar",
        hidden: true,
        isActive: false,
      },
    ]
  },
  {
    code: "c",
    type: 'collapse',
    title: 'Catálogo',
    url: "/admin/catalogos",
    icon: "panorama_horizontal",
    isActive: false,
    role: [Rol.Admin],
    children: [
      {
        code: "p",
        type: 'item',
        title: 'Tribu',
        url: "/admin/catalogos/tribus",
        // hidden: true,
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Célula',
        // hidden: true,
        url: "/admin/catalogos/celulas",
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Habilidades',
        // hidden: true,
        url: "/admin/catalogos/habilidades",
        isActive: false,
      }
    ]
  },
  {
    code: "a",
    type: 'collapse',
    title: 'Asignaciones',
    url: "/admin/asignaciones",
    icon: "bubble_chart",
    isActive: false,
    role: [Rol.Admin],
    children: [
      {
        code: "p",
        type: 'item',
        title: 'Asignación Tribu',
        url: "/admin/asignaciones/tribus",
        isActive: false,
      }, {
        code: "p",
        type: 'item',
        title: 'Asignación Célula',
        url: "/admin/asignaciones/celulas",
        isActive: false,
      },
    ]
  },
  {
    code: "rp",
    type: 'collapse',
    title: 'Reporte',
    url: "/reporting",
    icon: "content_paste",
    isActive: false,
    role: [Rol.Admin, Rol.User],
    children: [
      {
        code: "p",
        type: 'item',
        title: 'Personas',
        url: "/reporting/new-person-report",
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Personas no asignadas',
        url: "/reporting/unassigned-person-report",
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Personas dada de baja',
        url: "/reporting/discharged-person-report",
        isActive: false,
      },
    ]
  },
  {
    code: "rsr",
    type: 'collapse',
    title: 'Solicitudes',
    url: "/solicitud-recursos",
    icon: "contacts",
    isActive: false,
    role: [Rol.Admin, Rol.User],
    children: [
      {
        code: "ls",
        type: 'item',
        title: 'Listado',
        url: "/solicitud-recursos/listado",
        isActive: false,
      },
      {
        code: "ing",
        type: 'item',
        title: 'Ingresadas',
        url: "/solicitud-recursos/ingresadas",
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Aprobadas',
        url: "/solicitud-recursos/aprobadas",
        isActive: false,
      },
      {
        code: "p",
        type: 'item',
        title: 'Por asignar',
        url: "/solicitud-recursos/por-asignar",
        isActive: false,
      },
    ]
  },
]

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private loginService: LoginService) {
  }

  getMenuItems(): SidebarItem[] {
    return [...ITEMS]
  }

  getMenuFilters() {
    return [...ITEMS]
      .filter(({role}) =>
          role && role.some(
            rol => this.loginService.hasRole(rol)
          )
      )
  }
}
