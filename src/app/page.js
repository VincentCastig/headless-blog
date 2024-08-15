import Card from "@/components/card/card";

const Home = () => (
  <div className="container pb-80">
    <Card label='Product Reviews' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30' />
    <div className="row">
      <div className="col col_4 m-mw-100">
        <Card label='Opinions' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30'/>
      </div>
      <div className="col col_4 m-mw-100">
        <Card label='Product Reviews' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30'/>
      </div>
      <div className="col col_4 m-mw-100">
        <Card label='Travel Guides' title='Title of Your Content' summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tortor pretium convallis.' href='/#' className='mb-30'/>
      </div>
    </div>
  </div>
);

export default Home;