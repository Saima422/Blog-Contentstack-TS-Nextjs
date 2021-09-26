import { ReactNode } from "react";

export interface props{
    arr: Array<BlogObjInterface>;
    navData: navInterface;
    footerData: footerInterface;
}

export interface footerInterface{
  footerLogo: string,
  footerLinks: Array<string>,
}

export interface navInterface{
  navLogo: string,
  navTitle: string,
  navLinks: Array<linkInterface>,
}

export interface linkInterface {
  title: string,
  href: string,
  uuid: number,
}

export interface BlogObjInterface {
    author: string;
    blogimage: string;
    createdat: string;
    title: string;
    uid: string;
}

export interface navDataIterface{
    data: navInterface
}

export interface linkInterface {
    title: string,
    href: string,
    uuid: number,
}

export interface navInterface{
    navLogo: string,
    navTitle: string,
    navLinks: Array<linkInterface>,
}

export interface BlogInterface {
    blog: {
      author: string;
      blogimage: string;
      createdat?: string;
      title: string;
      uid: string;
      blogcontent: string;
      relatedlinks: linkObj[];
    }
}
  
export interface linkObj {
    linktitle: string,
    linkuid: string,
}
  
export interface paramsInterface {
    params: {
      id: string,
    }
}

export interface BlogObjInterface {
    author: string;
    blogimage: string;
    createdat: string;
    title: string;
    uid: string;
}

export interface BlogTileInterface {
    item: BlogObjInterface,
    key?: string,
}

export interface dataContextType {
  navData : navInterface;
  footerData : footerInterface;
  setNav : (data: navInterface) => void;
  setFooter : (data: footerInterface) => void;
}

export interface providerProps {
  children: ReactNode;
}

export const navDefaultValue: navInterface = {
  navLogo: '',
  navTitle: '',
  navLinks: [{
      title: '',
      href: '',
      uuid: 0,
  }],
}

export const footerDefaultValue: footerInterface = {
  footerLogo: '',
  footerLinks: [''],
}

export const dataContextDefaultValues: dataContextType = {
  navData: navDefaultValue,
  footerData: footerDefaultValue,
  setNav: (data: navInterface) => {},
  setFooter: (data: footerInterface) => {},
}