import Card from "@/components/card/card";
import config from '../config';

const fetchBlogs = async (params) => {
  try {
    const requestOptions = {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    };
    const response = await fetch(`${config.api}/api/blogs?populate=*&${params}`, requestOptions);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

const Home = async () => {
  const featuredBlogs = await fetchBlogs('filters[IsFeatured][$eq]=true');
  const blogs = await fetchBlogs('filters[IsFeatured][$eq]=false');

  console.log('featuredBlogs ', featuredBlogs)
  console.log('blogs ', blogs)

  return (
    <div className="container pb-80">
      {featuredBlogs.map(featuredBlog => (
        <Card label={featuredBlog.attributes.Category} title={featuredBlog.attributes.Title} summary={featuredBlog.attributes.Summary} href={featuredBlog.attributes.slug} className='mb-30' key={featuredBlog.id} />
      ))}
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card label='Opinions' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30' />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label='Product Reviews' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30' />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label='Travel Guides' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30' />
        </div>
      </div>
    </div>
  )
}

export default Home;