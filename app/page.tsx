// "use client"
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './Home.module.css';
import RelatedArticles from '@/Components/RelatedArticles';
// import orange from '../public/img/orange.jpg';

async function getBlogs() {
  const blogDir = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return blogs;
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>BLOG PAGE</h1>
      {/* <Image src={Range} alt="orange" />  */}
      <br />
      
      <br />
      <section className={styles.blogSection}>
        <div className={styles.blogList}>
          {blogs.map((blog) => (
            <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
            <h3 className={styles.subTitle}>{blog.meta.title}</h3>
            <div className={styles.blogDate}>
                <p>{blog.meta.date}</p>
              </div>
              <Image src={blog.meta.image} alt="Orange" width={800} height={300} />

             
              <div className={styles.blogItem}>
                <div>
                  <h3 className={styles.desc}>{blog.meta.subtitle}</h3>
                  <br />
                  <br />
                  <div>
                    <h3 className={styles.subTitle}>{blog.meta.first_title}</h3>
                    <p className={styles.description}>{blog.meta.firstdescription}</p>
                    <br />
                    <h3 className={styles.subTitle}>{blog.meta.second_title}</h3>
                    <p className={styles.description}>{blog.meta.seconddescription}</p>
                    <br />
                    <h3 className={styles.subTitle}>{blog.meta.third_title}</h3>
                    <p className={styles.description}>{blog.meta.thirddescription}</p>
                    <br />
                    <h3 className={styles.subTitle}>{blog.meta.fourth_title}</h3>
                    <p className={styles.description}>{blog.meta.fourthdescription}</p>
                    <br />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <RelatedArticles />
    </main>
  );
}
