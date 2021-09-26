import contentstack from "contentstack";
// import { footerDefaultValue, navDefaultValue } from "../Interfaces/Interface";

const Stack = contentstack.Stack(process.env.KEY || '',process.env.DELIVERY_TOKEN || '',process.env.ENV || '');

export const getNavData = async () => {
    let Query = Stack.ContentType('navbar').Entry("blt736de03d983c65db");
    let entry = await Query.fetch();
    let nav = entry.toJSON();

    let navData = {
      navLogo: nav.company_logo.logoimage.url,
      navTitle: nav.company_logo.logoimage.title,
      navLinks: nav.nav_links.navlink,
    }

    return navData;
}

export const getFooterData = async () => {
    let Query = Stack.ContentType('footer').Entry("blt7cd2adf99f749b93");
    let entry = await Query.fetch();
    let footer = entry.toJSON();

    let footerData = {
      footerLogo: footer.footerlogo.url,
      footerLinks: footer.footerlinks,
    }

    return footerData;
}

export const getAllBlogs = async () => {
    const stack = await Stack.ContentType('blogdata').Query().toJSON().find();
    return stack;
}

export const getBlogById = async (id: string) => {
    const Query = Stack.ContentType('blogdata').Entry(id);
    const entry = await Query.fetch();
    let obj = entry.toJSON();

    return obj;
}