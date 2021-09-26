import Link from "next/link";
import styles from './styles/Blogpage.module.scss';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BlogInterface, linkObj, paramsInterface } from "./Interfaces/Interface";
import { getBlogById } from "./api/apiCalls";
import { useDataContext } from "./context/dataContext";

const BlogPage: React.FC<BlogInterface> = ({blog}) => {
  const {navData, footerData} = useDataContext();

  return (
      <div>
      <Navbar data={navData}/>
      <div className={styles.blogContainer}>
            <div className={styles.blog}>
                <div className={styles.blogContent}>
                    <h1>{blog.title}</h1>
                    <div className={styles.blogImage}>
                        <img src={blog.blogimage} alt='blog' />
                    </div> 
                    <h4>Posted On: {blog.createdat}</h4>
                    <h4>Author: {blog.author}</h4>
                    <div className={styles.content}>{blog.blogcontent}</div> 
                </div>
                <div className={styles.blogAside}>
                    <h2>Related Links</h2>
                    {blog.relatedlinks?
                        blog.relatedlinks.map((item: linkObj)=>(
                            <div key={item.linkuid} className={styles.linkBox}>
                            <Link href={`/${item.linkuid}`}>{item.linktitle}</Link>
                            <br></br>
                            </div>
                        ))
                        :
                        <h5>None</h5>
                    }
                </div>
            </div>
        </div>
        <Footer data={footerData}/>
      </div>
  )
}

export default BlogPage;


export async function getServerSideProps({params}: paramsInterface){

  const obj = await getBlogById(params.id);

  let linkarr:linkObj[] = [];

  obj.relatedlinks.map((item: any)=>{
      let obj = {
        linktitle: item.linkinfo.linktitle,
        linkuid: item.linkinfo.reflink[0].uid,
      }
      linkarr.push(obj);
  });

  let blog = {
    author: obj.author_details.authorname,
    blogimage: obj.blogimage.url,
    createdat: obj.createdat,
    title: obj.title,
    uid: obj.uid,
    blogcontent: obj.blogcontent,
    relatedlinks: linkarr,
  }
  
  return {
    props: {blog} 
  }
}